import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setvalue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setvalue(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setLocalStorage];
};

export default useLocalStorage;
