import { PORT } from "./config.js";
import app from "./app.js";
import createConnection from "./db/connection.js";

createConnection()
  .then(() => {
    console.log("Connected to Mongodb");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => console.log(error));
