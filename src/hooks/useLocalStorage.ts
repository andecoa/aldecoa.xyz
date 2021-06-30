import { useState, useEffect } from "react";

const getItem = <T>(key: string, initialValue: T): T => {
  if (typeof window === "undefined") {
    return initialValue;
  }
  try {
    const dataStr = window.localStorage[key];
    if (dataStr === null) {
      return initialValue;
    }
    return JSON.parse(dataStr);
  } catch (e) {
    return initialValue;
  }
};

const setItem = <T>(key: string, value: T): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, _setValue] = useState<T | null>(null);

  useEffect(() => {
    _setValue(getItem(key, initialValue));
  }, [key, initialValue]);

  const setValue = (val: T | ((v: T) => T)) => {
    const newValue = val instanceof Function ? val(value) : val;
    _setValue(newValue);
    setItem(key, newValue);
  };

  return [value, setValue] as const;
};

export default useLocalStorage;
