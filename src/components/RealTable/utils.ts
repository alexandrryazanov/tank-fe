export const getValueByPath = (obj: any, path: string) =>
  path.split(".").reduce((acc, key) => acc?.[key], obj);
