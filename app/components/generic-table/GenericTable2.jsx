import React from "react";
import './GenericTable.css';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { capitalizeWords } from "@/app/utils/utils-functions";

const GenericTable = ({ tableData, styleLeftColumnLikeHeader, headerColor }) => {
    // Check if tableData is available and correctly structured
    if (!tableData || !Array.isArray(tableData.rows) || tableData.rows.length === 0) {
      return <p>No data available</p>;
    }

    // Extract the column names from the first row for the table header
    const columnHeaders = Object.keys(tableData.rows[0]);

    return (
      <div className="table-container"> 
        <h2 className="table-title">{tableData.tableTitle}</h2>
        <br></br>
        <br></br>
        <table className={`my-table ${styleLeftColumnLikeHeader ? 'style-left-column' : ''}`}>
          <thead>
            <tr>
              {columnHeaders.map((header, index) => (
                <th key={index} style={{ backgroundColor: headerColor }}>
                  {capitalizeWords(header.replace(/_/g, ' '))}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columnHeaders.map((col, colIndex) => {
                  const cellStyle = colIndex === 0 && styleLeftColumnLikeHeader 
                                    ? { backgroundColor: headerColor } 
                                    : {};
                  return (
                    <td key={colIndex} style={cellStyle}>
                      {col === 'formula' 
                        ? <InlineMath math={row[col]} />
                        : row[col]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default GenericTable;
