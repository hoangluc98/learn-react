import React, { useState} from 'react';

const useLocalStorage = () => {
  const [value, setValue] = useState<string>('')

  return <div>useLocalStorage</div>;
};

export default useLocalStorage;
