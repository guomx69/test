import React, { createContext, useState, useContext,useEffect } from 'react';
import { toast } from 'react-toastify';

import { authService } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
      const initAuth=()=>{
        const aUser=authService.getCurrentUser();
        setUser(aUser);
        setIsAuth(!!aUser);
           
        }
       initAuth();
  }, []);

  const loginAsync = async (username, password) => {
    try{
          const result = await authService.loginAsync(username, password);
          setUser(result);
          setIsAuth(true);
          return true;
        
       }catch (error) {
          console.error('Login failed from context:', error.message);
          toast.error(error.message || 'Login failed. Please try again.');
          return false;
        }
  };
  const setResvRightsAsync = async (reservation) => {
    try{
          //console.log("start to get the right of reseveration",reservation,user);
          const result = await authService.setResvRightsAsync(user, reservation);
          console.log("end to get the right of reseveration",result)
          setUser(result);
          return true;
        
       }catch (error) {
          console.error(`The Right of Reservation${reservation}for ${user.name} failed`, error.message);
          toast.error(`The Right of Reservation${reservation}for ${user.name} failed::`+error.message);
          return false;
        }
  };

  const logout = async () => {
    setIsAuth(false);
    await authService.logout();
  };

  return (
    <AuthContext.Provider value={{ user,isAuth,setIsAuth,isLoading, setIsLoading,loginAsync, logout,setResvRightsAsync }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);