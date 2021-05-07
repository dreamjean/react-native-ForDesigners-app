import React from 'react';

import Text from '../styles/Text';

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <Text danger>{error}</Text>;
};

export default ErrorMessage;
