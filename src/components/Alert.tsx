import { styled } from '@stitches/react';
import { useEffect } from 'react';
import { fade } from '../styles/animations';

export interface IAlertProps {
  message: string;
  autoDestruct: () => void;
}

const StyledAlert = styled('div', {
  backgroundColor: 'black',
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '17px 20px',
  borderRadius: '5px',
  animation: `${fade} 0.25s forwards`,
  animationDelay: '0.75s',
});

const Alert = (props: IAlertProps) => {
  useEffect(() => {
    props.autoDestruct();
  }, [props]);
  return <StyledAlert>{props.message}</StyledAlert>;
};

export default Alert;
