// Store user information in local storage
export const storeUserInfo = (accessToken: string) => {
  console.log(accessToken, "token");
  if (typeof window !== "undefined") {
    localStorage.setItem("blockToken", accessToken);
  }
};

// Retrieve user information from local storage
export const getUserInfo = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("blockToken");
  }
  return null;
};

// Remove user information from local storage
export const removeFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("blockToken");
  }
};

// Check if the user is logged in
export const isLoggedIn = () => {
  const authToken = getUserInfo();
  return !!authToken;
};
