export const getFromLocalStorage = (name: string, defaultValue: string) => {
  const value = localStorage.getItem(name);
  return value ? JSON.parse(value) : JSON.parse(defaultValue);
};
