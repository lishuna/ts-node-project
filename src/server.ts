import app from './app'
import errorHandler from "errorhandler";

app.use(errorHandler());

app.listen(3001, function () {
  console.log('app is listening at port 3001');
});
