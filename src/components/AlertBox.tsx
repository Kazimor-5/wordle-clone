// ! COMPONENT
import Alert from './Alert';
// ! FILES
import { styled } from '@stitches/react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface IAlertBoxProps {}

const StyledAlertBox = styled('div', {
  position: 'absolute',
  width: 'fit-content',
  height: '600px',
  gap: '20px',
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'flex-end',
});

type TAlert = {
  id: string;
  message: string;
};

const AlertBox = () => {
  const [alerts, setAlerts] = useState<TAlert[]>([]);

  useEffect(() => {
    const handlePressEnter = (event: KeyboardEvent) => {
      if (event.key === 'Enter')
        setAlerts((prevAlerts) => [
          ...prevAlerts,
          { message: 'test', id: uuidv4() },
        ]);
    };

    document.addEventListener('keydown', handlePressEnter);

    return () => document.removeEventListener('keydown', handlePressEnter);
  }, []);

  return (
    <StyledAlertBox>
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          message={alert.message}
          autoDestruct={() =>
            setTimeout(() => {
              setAlerts((prevAlerts) =>
                prevAlerts.filter((thisAlert) => thisAlert.id !== alert.id)
              );
            }, 1000)
          }
        />
      ))}
    </StyledAlertBox>
  );
};

export default AlertBox;
