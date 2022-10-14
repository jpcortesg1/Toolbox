// Required modules
const express = require("express");
const cors = require("cors");

// Config
const port = process.env.PORT || 4000;
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

// Routes
const fileRoutes = require("./routes/fileRoutes.routes");

// Create app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Routes
app.use("/", fileRoutes);

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
