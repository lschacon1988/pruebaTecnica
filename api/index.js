const app = require('./src/app.js');



app.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });


  module.exports = app;