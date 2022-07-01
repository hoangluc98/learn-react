import React, { useState, useContext } from 'react';

// Declare type and create context
interface IUser {
  email: string;
  name: string;
}
export interface AuthContextType {
  auth: IUser;
  setAuth(data: IUser): void;
}
const initalAuthContext: AuthContextType = {
  auth: {
    email: '',
    name: ''
  },
  setAuth: async () => null
};
const AuthContext = React.createContext<AuthContextType>(initalAuthContext);

// Auth provider function
type PropsType = {
  children: React.ReactNode;
};
const AuthProvider = ({ children }: PropsType) => {
  const [auth, setAuth] = useState<IUser>({
    email: '',
    name: ''
  });

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
export default AuthProvider;

// Use Hook
export function useAuth() {
  return useContext(AuthContext);
}
