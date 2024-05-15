const useLocalStorage = (key: string) => {
  const setItem = (value: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = () => {
    try {
      if (key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = () => {
    try {
      if (key) {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;
