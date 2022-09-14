import { renderTable } from "./table.js";
import { fetchTData } from "./api.js";
import { renderInfoSection } from "./section.js";

const body = document.body;
body.addEventListener("click", function (e) {
  e.preventDefault();
  const uri = e.target.attributes["data-url"]?.nodeValue;
  if (uri) {
    fetchTData(uri).then((data) => {
      renderData(data);
    });
  }
});

fetchTData().then((data) => {
  renderData(data);
});

const renderData = (data) => {
  data.results ? renderTable(data) : renderInfoSection(data);
};
