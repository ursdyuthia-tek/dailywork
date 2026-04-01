const express = require('express');
const app = express();
const notesRoutes = require('./routes/notesRoutes');
// console.log('errrrrrrr##', notesRoutes);

app.use(express.json());
app.use('/notes', notesRoutes);

if (require.main === module) {
    app.listen(3000, () => {
        console.log('server started');
    });
}

module.exports = app;





