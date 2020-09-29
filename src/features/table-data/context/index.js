import React, { createContext, useReducer } from "react";
import { TableDataReducer } from "../reducer";
import data from "../../../MOCK_DATA.json";

const TableDataContext = createContext();

const TableDataProvider = (props) => {
  const [state, dispatch] = useReducer(TableDataReducer, {
    data,
  });

  return (
    <TableDataContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TableDataContext.Provider>
  );
};

export { TableDataContext, TableDataProvider };
