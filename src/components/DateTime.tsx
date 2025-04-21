import { useEffect, useState } from 'react';
import { formatCustomDateTime } from '../utils/dateUtils';

export const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <span className='text-white text-sm font-light cursor-default'>{formatCustomDateTime(currentDateTime)}</span>;
};
