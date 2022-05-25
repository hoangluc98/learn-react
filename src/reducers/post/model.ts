import { IState } from './types';

export const initialState: IState = {
  requesting: false,
  success: false,
  message: '',
  data: []
};
