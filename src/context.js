import React, { useContext, useState, useEffect } from 'react';
const AppContext = React.createContext();
const movieDbUrl = 'https://api.themoviedb.org/3/';
const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
