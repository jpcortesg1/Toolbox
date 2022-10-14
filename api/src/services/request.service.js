const https = require("https");

function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

const request = async (options) => {
  return new Promise((resolve) => {
    https.get(options, (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });
      resp.on("end", () => {
        if (isJsonString(data)) {
          return resolve(JSON.parse(data));
        }
        return resolve(data);
      });
    });
  });
};

module.exports = {
  request,
};
