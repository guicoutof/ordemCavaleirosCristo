export const TOKEN_KEY = "@OCC";
export const NOME = "@nome";
export const ADM = "@adm";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getNome = () => localStorage.getItem(NOME);
export const login = (token,nome) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(NOME, nome);
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