const date = new Date();

export const getFirstDayOfMonth = () => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getLastDayOfMonth = () => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};
