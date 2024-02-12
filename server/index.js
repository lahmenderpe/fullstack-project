const { PORT } = require("./config.js");
const app = require("./app.js");
const createConnection = require("./db/connection.js");

createConnection()
  .then(() => {
    console.log("Connected to Mongodb");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => console.log(error));
