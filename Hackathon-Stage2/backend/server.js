const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const questionRoutes = require("./routes/questionRoute");
app.use("/api", questionRoutes);

const PORT = 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;