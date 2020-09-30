import React, { useState, useEffect } from "react";
import useTableData from "./hooks";
import "./tableData.css";

export default function TableData() {
  const { data } = useTableData();

  const [pageStartPosition, setPageStartPosition] = useState(0);
  const [pageEndPosition, setPageEndPosition] = useState(20);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  useEffect(() => {}, []);

  function sortAscBy(key) {
    return;
  }

  function sortDescBy(key) {
    return;
  }

  function searchBy(key, value) {
    return;
  }

  function onNext() {
    const endPosition =
      pageEndPosition + itemsPerPage > data.length
        ? data.length
        : pageEndPosition + itemsPerPage;
    const startPosition =
      endPosition === data.length
        ? data.length - itemsPerPage
        : pageEndPosition;
    setPageStartPosition(startPosition);
    setPageEndPosition(endPosition);
  }

  function onPrev() {
    const startPosition =
      pageStartPosition - itemsPerPage > 0
        ? pageStartPosition - itemsPerPage
        : 0;
    const endPosition = startPosition === 0 ? itemsPerPage : pageStartPosition;

    setPageStartPosition(startPosition);
    setPageEndPosition(endPosition);
  }

  return (
    <>
      <label>Items per page:</label>
      <select onChange={(e) => setItemsPerPage(Number(e.target.value))}>
        <option>20</option>
        <option>50</option>
        <option>150</option>
        <option>200</option>
      </select>
      <button disabled={pageStartPosition === 0} onClick={onPrev}>
        Previous
      </button>
      <button disabled={pageEndPosition === data.length} onClick={onNext}>
        Next
      </button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>
              Date of birth
              <span role='img' aria-label='sort ascending'>
                🔽
              </span>
              <span role='img' aria-label='sort desceding'>
                🔼
              </span>
            </th>
            <th>Email</th>
            <th>
              Salary
              <span role='img' aria-label='sort ascending'>
                🔽
              </span>
              <span role='img' aria-label='sort desceding'>
                🔼
              </span>
            </th>
            <th>Years of experience</th>
            <th>
              <span role='img' aria-label='sort ascending'>
                🔽
              </span>
              <span role='img' aria-label='sort desceding'>
                🔼
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.slice(pageStartPosition, pageEndPosition).map((d) => {
              return (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.first_name}</td>
                  <td>{d.last_name}</td>
                  <td>{d.date_of_birth} </td>
                  <td>{d.email}</td>
                  <td>{d.salary}</td>
                  <td>{d.years_of_experience}</td>
                  <td>{d.industry}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
