import { createContext, useEffect, useState } from "react";
const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const login = () => {
    setUser({ name: "Terry", username: 'terry@1234' })
  }

  const logout = () => {
    setUser(null);
  }

  const isLoggedIn = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
  }

  useEffect(() => {
    setIsLoading(true);
    isLoggedIn()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false))
  }, []);

  console.log(isLoading);

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {isLoading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  )
}

export default AuthContext;