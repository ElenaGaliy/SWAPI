export const formatData = ({ key, value, data }) => {
  if (Array.isArray(value)) {
    return Array.isArray(value)
      ? value.reduce(
        (prev, cur, index) =>
          prev +
          `<a 
              data-url=${cur}
              href='#'>${key}_${index + 1}</a>\n`,
        ""
      )
      : `<a href=${value}>${key}</a>`;
  }

  switch (key) {
    case "created":
    case "edited":
      return new Date(value).toDateString();
    case "name":
      return `<a 
      data-url=${data.url}
      href='#'>${value}</a>`;
    case "homeworld":
      return `<a 
          data-url=${value}
          href='#'>planet</a>`;
    default:
      return value;
  }
};
