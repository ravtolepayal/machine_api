# Create an API endpoint to fetch data from database

## Requirements
    - npm
    - Nodejs
    - Postgresql
    
**steps:**

1. Install

    git clone https://github.com/ravtolepayal/machine_api 
    cd machine_api/
    npm install
  
2.Create table machine with same name of attributes which we used in db.js for database connenction.   
3.open another terminal and run below commands on each terminal.
 
    node db.js
    node index.js
  
 db.js -> It fetch data from API endpoint every 5 seconds and store it in a database
 index.js -> It create an API endpoint to fetch aggregated data from database for specified interval.
 
4.open the browser and run

   http://localhost:8000/api/
   http://localhost:3000/api/pressure 
    
