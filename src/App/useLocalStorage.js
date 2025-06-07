import { useState, useEffect } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [sincronizedItem, setSincronizedItem] = useState(true);
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const itemFromStorage = window.localStorage.getItem(itemName);

        let parsedItem;

        if (itemFromStorage) {
          parsedItem = JSON.parse(itemFromStorage);
          setItem(parsedItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }

        setLoading(false);
        setSincronizedItem(true)
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  }

  return { item, saveItem, loading, error, sincronizeItem };
};

export { useLocalStorage };
