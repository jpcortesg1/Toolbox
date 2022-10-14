const organizeLine = (line) => {
  const [file, text, number, hex] = line.split(",");
  if (file && text && number && hex) {
    return { text, number, hex };
  }
};

const getDataOfCsv = (csv) => {
  const lines = csv.split("\n");
  const data = lines.map((line) => organizeLine(line));
  return data.filter((d) => d);
};

module.exports = {
  getDataOfCsv,
};
