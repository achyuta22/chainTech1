  1. front end code is uploaded in repoistory ----> https://github.com/achyuta22/chainTech-frontend.git

  2. backend code is divided into 5 major files
  3.  1. app.js --->where server is initiated at port 5000
      2. routes folder => routes.js (which contain the routes to specified request)
      3. controllers.js  ----> wherre logic for each route is written
      4. config  folder => database.js ----->connection to database is here
      5. models => List.js ------>has the schema of the databse
    
 4.  cors  axios is used to connect between frontend and backend.
 5.  install express by npm i express  ==> framework to write backend/node.js
 6.  install cors by npm i cors ==> used to connect frontend with backend
 7. to start server use nodemon ==> npm i nodemon  
 8. nodemon app.js =>command used to start server and automatically update the changes.
