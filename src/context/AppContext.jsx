import { createContext, useState } from 'react';
import { appData } from '../data/AppData';

const AppContext = createContext();

export const AppProvider = function ({ children }) {
  const [data, setData] = useState(appData);

  const deleteItem = function () {
    console.log('delete item');
  };

  const editItem = function () {
    console.log('edit item');
  };

  return (
    <AppContext.Provider
      value={{
        appData: appData,
        deleteItem: deleteItem,
        editItem: editItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
