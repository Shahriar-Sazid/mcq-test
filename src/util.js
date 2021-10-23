export const secondToHhMmSs = (second) =>
  new Date(second * 1000).toISOString().substr(11, 8);
