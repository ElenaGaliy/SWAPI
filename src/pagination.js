export default (dataData) => {
  const pageCount = Math.ceil(dataData.count / 10);
  let currentPage = dataData.previous;
  currentPage = +currentPage?.match(/(?<=page=).+/) + 1 || 1;
  const leftArrow = dataData?.previous
    ? `<button data-url=${dataData.previous}><</button>`
    : "";
  const rightArrow = dataData?.next
    ? `<button data-url=${dataData.next}>></button>`
    : "";
  return `<div id='pagination-container'>
                    ${leftArrow}
                    <div id='count'>${currentPage} of ${pageCount}</div>
                    ${rightArrow}
                  <div>`;
};
