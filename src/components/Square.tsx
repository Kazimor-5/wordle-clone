import { styled } from '@stitches/react';
import React from 'react';
import { bounce } from '../styles/animations';
import Letter from './Letter';

interface ISquare {
  word: string;
}

const StyledSquare = styled('div', {
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: '2px solid #d3d6da',
  transition: '0.25s outline',
  variants: {
    isActive: {
      true: {
        outline: '2px solid #878a8c',
        animation: `${bounce} 200ms ease`,
      },
    },
  },
});

const Square = (props: ISquare) => {
  return (
    <StyledSquare isActive={!!props.word}>
      <Letter word={props.word} />
    </StyledSquare>
  );
};

export default Square;
