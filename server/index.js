const express = require('express');
const app = express();

app.use(express.json());
app.use(
   cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
   })
);

app.listen('3000', () => {
   console.log("server run port 3000");
});