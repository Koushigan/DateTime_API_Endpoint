const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  const folderPath = './datetime'; 

  const currentDate = new Date();
  const fileName = `date-time.txt`;
  fs.writeFile("./datetime/date-time.txt", fileName, (err) => {
    console.log("completed");
  })
  const filePath = path.join(folderPath, fileName);

  const fileContent = currentDate.toString();

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating file');
    } else {
      console.log(`File ${fileName} created successfully.`);
      res.send(`${currentDate}`);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});