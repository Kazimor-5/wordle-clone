import { useEffect, useReducer } from 'react';
import { styled } from '@stitches/react';
import Grid from './components/Grid';
import { WordleContext } from './context/wordleContext';

const Container = styled('div', {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const wordReducer = (prevWord: string, key: string) => {
  if (key === 'Backspace') {
    return prevWord.slice(0, -1);
  }

  const newWord = `${prevWord}${key}`;
  const isWordLengthOK = newWord.length < 6;

  if (isWordLengthOK) {
    return newWord;
  }

  return prevWord;
};

const initialWord = '';

function App() {
  const [word, setWord] = useReducer(wordReducer, initialWord);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => setWord(event.key);

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <WordleContext.Provider value={{ word }}>
      <Container>
        <Grid />
      </Container>
    </WordleContext.Provider>
  );
}

export default App;
