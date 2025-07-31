const express=require("express")
const app = express()
const Routes = require('./routes/appRoutes')
// Set up middleware to parse JSON.
app.use(express.json())


app.use('/api/dbtasks',Routes)


//Handle 404 errors with a JSON message 
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

//exporting
module.exports = app