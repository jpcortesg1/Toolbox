const { request } = require("./../services/request.service.js");
const { getDataOfCsv } = require("./../controllers/data.controller.js");

let options = {
  protocol: "https:",
  hostname: "echo-serv.tbxnet.com",
  path: "",
  headers: {
    Authorization: "Bearer aSuperSecretKey",
  },
};

const getFile = async (fileName) => {
  try {
    const option = { ...options, path: `/v1/secret/file/${fileName}` };
    const csv = await request(option);
    if (typeof csv === "string") return getDataOfCsv(csv);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllFiles = async () => {
  try {
    const option = { ...options, path: "/v1/secret/files" };
    return await request(option);
  } catch (error) {
    console.log(error.message);
  }
};

const getFiles = async (req, res) => {
  try {
    const { files } = await getAllFiles(res);
    res.status(200).json({
      files,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getData = async (req, res) => {
  try {
    const { files } = await getAllFiles(res);
    const { fileName } = req.query;

    // Map async
    const data = await Promise.all(
      files.map(async (file) => {
        const data = await getFile(file);
        if (fileName && file.includes(fileName))
          return { file: file, lines: data };
        if (!fileName && data) return { file: file, lines: data };
      })
    );
    const dataFiltered = data.filter((d) => d);
    res.status(200).json(dataFiltered);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getData,
  getFiles,
};
