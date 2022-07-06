import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: Number(process.env.REACT_APP_TIMEOUT),
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use(
  (config: any) => {
    const token = sessionStorage.getItem("api_token") || null;
    if (token) config.headers.common["Authorization"] = `Bearer ${token}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  response => {
    if (response.data.status === "error") {
      throw response;
    }

    return response.data;
  },
  async error => {
    throw error;
  },
);

type Method = 'get' | 'post' | 'put' | 'delete'

export const API = (method: Method, path: string, body: any, config = {}) => {
  let res = null;
  switch (method.toLowerCase()) {
    case "get":
      // in case GET method: body is config
      res = httpClient[method](path, body || config);
      break;
    default:
      res = httpClient[method](path, body, config);
  }

  return res.catch(async (error: any) => {
    if (error.data.status === "error") {
      console.error(error.data.message);
      throw error.data;
    }

    switch (error.status) {
      case 400: // Wrong url or params
      case 404: // Missing parameters | Missing upload file
      case 409: // Conflict
      case 500: // Server error
        console.error(error.data.message);
        throw error.data.message;

      case 403: // Permission
      case 401: // Signature verification failed | Token has been revoked
        // store.dispatch("logout").then(() => {
        //   router.push({ path: "/login" });
        // });
        break;

      default:
        console.error(error.data.message);
        throw error.data.message;
    }
  });
};
