// ! COMPONENTS
import Grid from './components/Grid';
// ! FILES
import { useEffect, useReducer } from 'react';
import { styled } from '@stitches/react';
import { WordleContext, initialState } from './context/wordleContext';
import { wordReducer } from './handlers/wordReducer';
import AlertBox from './components/AlertBox';

const Container = styled('div', {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const initialWord = '';

function App() {
  const [word, setWord] = useReducer(wordReducer, initialWord);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => setWord(event.key);

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <WordleContext.Provider value={{ ...initialState, word }}>
      <Container>
        <Grid />
        <AlertBox />
      </Container>
    </WordleContext.Provider>
  );
}

export default App;
