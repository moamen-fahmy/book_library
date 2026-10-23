const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const booksRoutes = require("./routes/booksRoutes");

const app = express();
app.use(cors({ origin: "*" }));
const PORT = 3000;

app.use(express.json());
app.use(booksRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
