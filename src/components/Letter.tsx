// ! FILES
import { styled } from '@stitches/react';
import React from 'react';

interface ILetter {
  letter: string;
}

const StyledLetter = styled('div', {
  fontWeight: 'bold',
  fontFamily: 'Arial',
  fontSize: '32px',
  textTransform: 'uppercase',
});

const Letter = (props: ILetter) => {
  return <StyledLetter>{props.letter}</StyledLetter>;
};

export default Letter;
