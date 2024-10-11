export const get = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)!)
    : null;
};

export const set = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const remove = (key: string) => {
  localStorage.removeItem(key);
};
