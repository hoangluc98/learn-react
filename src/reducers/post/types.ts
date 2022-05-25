export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IState {
  requesting: boolean;
  success: boolean;
  message: string;
  data: IPost[];
}

export interface IPayload {
  type: string;
  message: string;
  data: IPost[];
}
