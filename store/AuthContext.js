import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  authenticate: () => {},
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();

    function authenticate() {
        setAuthToken(true);
    }
    
    const value = {
        isAuthenticated: authToken,
        authenticate: authenticate,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }
  
  export default AuthContextProvider;