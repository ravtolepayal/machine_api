const app = require('express')()
const bodyParser = require('body-parser')
const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'payal',
    user: 'payal',
    password: '',
})

client.connect((err) => {
    if (err) {
        console.log(err)
    }

   // console.log("Connected")
});


app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/", (req, res) => {
    client.query(
      "SELECT name,avg(temperature)as temperature,avg(pressure)as pressure from machine where time < NOW() and time > NOW() - Interval '1 minute' group by name",
      [],
      (error, results) => {
        if (error) {
          throw error;
        }
  
        res.status(200).json(results.rows);
      }
    );
  });

  app.get("/api/temperature", (req, res) => {
    client.query(
      "SELECT name,avg(temperature)as value from machine where time < NOW() and time > NOW() - Interval '1 minute' group by name",
      [],
      (error, results) => {
        if (error) {
          throw error;
        }
  
        res.status(200).json(results.rows);
      }
    );
  });

  app.get("/api/pressure", (req, res) => {
    client.query(
      "SELECT name,avg(pressure)as value from machine where time < NOW() and time > NOW() - Interval '1 minute' group by name",
      [],
      (error, results) => {
        if (error) {
          throw error;
        }
  
        res.status(200).json(results.rows);
      }
    );
  });

app.listen(8000, () => {
    console.log(`Server is running.`);
});
  


