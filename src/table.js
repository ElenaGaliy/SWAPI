import { formatData } from "./utils.js";
import pagination from "./pagination.js";

const app = document.querySelector("#app");

const tableHeaderRowBuilder = (data) => {
  let tableHeadRow = "";
  for (const key in data) {
    let colName = key.replace(/_/gi, " ");
    if (key !== "url") {
      tableHeadRow += `<th>${colName}</th>`;
    }
  }
  return tableHeadRow;
};

const tableBodyRowBuilder = (data) => {
  let bodyRow = "";

  for (const key in data) {
    let rowVal = formatData({ key, value: data[key], data });
    if (key !== "url") {
      bodyRow += `<td>${rowVal}</td>`;
    }
  }
  return `<tr>${bodyRow}</tr>`;
};

export const renderTable = ({ results: data, ...dataData }) => {
  const tableHeaderRow = tableHeaderRowBuilder(data[0]);
  let tableBodyRows = "";
  for (const item of data) {
    tableBodyRows += tableBodyRowBuilder(item);
  }

  const paginationEl = pagination(dataData);

  app.innerHTML = `<table>
                    <thead>
                     ${tableHeaderRow}
                    </thead>
                    <tbody id="tableBody">${tableBodyRows}</tbody>
                  </table>
                  ${paginationEl}
                  `;
};
