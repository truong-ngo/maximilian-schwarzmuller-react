import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hook/use-counter';

const BackwardCounter = () => {
  const counter = useCounter(count => count - 1)
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
