import { useState, useEffect } from 'react';
import useCounter from '../hook/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter(count => count + 1)

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
