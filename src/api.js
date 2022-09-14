export const apiURI = "https://swapi.dev/api/people";

export const fetchTData = (uri = apiURI) =>
  fetch(uri)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
