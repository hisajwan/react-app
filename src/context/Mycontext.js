import React, { useState, createContext } from "react";

export const MyContext = createContext();

const MyContextProvider = props => {
  const [values, setValues] = useState([
    {
      name: "a",
      place: "b"
    },
    {
      name: "a",
      place: "b"
    }
  ]);

  return (
    <MyContext.Provider value={[values, setValues]}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;

// In ohter compo

// {
//   /* <MyContextProvider>
//   <Nav></Nav>
// </MyContextProvider> */
// }

// In NavigationPreloadManager
// useContext MyContext
// const [values, setValues] = useContext(MyContext)
