import { useContext } from "react";
import { TableDataContext } from "../context";

const useTableData = () => {
  const { state, dispatch } = useContext(TableDataContext);
  return {
    data: state.data,
  };
};

export default useTableData;
