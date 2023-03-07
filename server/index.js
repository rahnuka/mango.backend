const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// ade1918cb83c43aa82d93124230703

fetch("http://api.weatherapi.com/v1/forecast.json?key=ade1918cb83c43aa82d93124230703&q=London&days=1&aqi=no&alerts=no")
  .then((response) => response.json())
  .then((data) => console.log(data));

// tepowa9333@maazios.com  api account tepowa9333@maazios.coM

// 8dccdb066ab21d476b0269e97eb2e91dceebe8ad60e819c41c80e50c4192792d air quality