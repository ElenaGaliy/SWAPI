import { formatData } from "./utils.js";

const app = document.querySelector("#app");

export const renderInfoSection = (data) => {
  let sectionHTML = "";

  for (const key in data) {
    if (key !== "url") {
      const formatedData = formatData({ key, value: data[key], data });
      sectionHTML += `<div class='section-row'><div class='section-title'>${key}: </div><div>${formatedData}</div></div>`;
    }
  }
  app.innerHTML = sectionHTML;
};
