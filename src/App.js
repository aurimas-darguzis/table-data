import React from "react";
import "./App.css";
import TableData from "./features/table-data";
import { TableDataProvider } from "./features/table-data/context";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Table Data</header>
      <main>
        <TableDataProvider>
          <TableData />
        </TableDataProvider>
      </main>
      <footer>
        <span role='img' aria-label='cactus'>
          🌵
        </span>
        Developed by Aurimas
        <span role='img' aria-label='cactus'>
          🌵
        </span>
      </footer>
    </div>
  );
}

export default App;
