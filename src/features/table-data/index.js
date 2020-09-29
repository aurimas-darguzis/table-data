import React, { useState } from "react";
import data from "../../MOCK_DATA.json";
import { TableDataProvider } from "./context";
import useTableData from "./hooks";

export default function TableData() {
  const [itemsPerPage, setItemsPerPage] = useState(null);

  const { data } = useTableData();
  console.log("data from state: ", data);

  function sortByKey(key) {
    return;
  }

  function searchBy(key, value) {
    return;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>labas</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
