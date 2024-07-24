const app = require("./app");
const dbConnection = require("./db");

require("dotenv").config();
const port = process.env.PORT || 8080;


app.listen(port,async ()=>{
    console.log(`Server run successfully at http://localhost:${port}`);
    await dbConnection();
});