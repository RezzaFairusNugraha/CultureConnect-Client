const toTitleCase = (text) =>
    text
      .toLowerCase()
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

const toUpperCase = (text) => text.toUpperCase();


export { toTitleCase, toUpperCase };