const express = require('express');




const app = express();
const PORT = 9001;

app.get('/', (req, res) => {
    res.send('Working!');
});


app.listen(PORT, () => {
    console.log(`Server runs on PORT ${PORT}`);
})
