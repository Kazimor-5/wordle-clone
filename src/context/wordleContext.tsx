// ! FILES
import { createContext } from 'react';

export const initialState = {
  word: '',
  secretWord: 'hello',
};

export const WordleContext = createContext(initialState);
