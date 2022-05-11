// ! COMPONENTS
import Row from './Row';
// ! FILES
import React from 'react';
import { styled } from '@stitches/react';

const StyledGrid = styled('div', {
  width: '350px',
  height: '380px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const Grid = () => {
  return (
    <StyledGrid>
      <Row isActive />
      <Row isActive={false} />
      <Row isActive={false} />
      <Row isActive={false} />
      <Row isActive={false} />
      <Row isActive={false} />
    </StyledGrid>
  );
};

export default Grid;
