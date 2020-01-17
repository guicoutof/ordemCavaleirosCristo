export const TOKEN_KEY = "@OCC";
export const INFO = "";
export const ADM = "@adm";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getInfo = () => JSON.parse(localStorage.getItem(INFO));
export const login = (token,info) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(INFO, JSON.stringify(info));
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  window.location.reload();
};
//adm
export const isAdm = () => localStorage.getItem(ADM) !== null;
export const loginAdm = token => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(ADM,true);
}
export const logoutAdm = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ADM);
  window.location.reload();
}