
// token related operations
export const defaultKeyName = "accessToken";
export const setToken = (token: string) => localStorage.setItem(defaultKeyName, token);
export const getToken = () => localStorage.getItem(defaultKeyName);
export const hasToken = () => !!getToken();
export const removeToken = () => localStorage.removeItem(defaultKeyName);

