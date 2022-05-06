import { createContext } from 'react';

const initialState = {
  word: '',
};

export const WordleContext = createContext(initialState);
