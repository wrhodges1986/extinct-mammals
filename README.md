extinct-mammals
===============

Simple NodeJS/mongoDB API

##Objective
This will help solidify your understanding of mongoDB alongside of NodeJS using a popular ORM for mongo called mongoose
You'll build a public API of extinct mammals

##Day One
###Step 1: Build your project
* Create your package.json file with mongoose and express as dependencies
* Make sure mongod is running in your terminal
* Create a server.js file that will hold all of your API's logic
* Be sure to require and initialize express (including the bodyParser)

###Step 2: Setup the mongoDB connection (reference: http://mongoosejs.com/docs/)
* In your server.js require the mongoose library and create a connection to your database server
* Create your mammalSchema with three fields: `name`, `type`, and `year_extinct`
* Use express to create two endpoints on `/`, one a GET and one a POST

#### `GET /`
  * returns a JSON array of all extinct mammals, ordered by name
  
#### `POST /`
  * saves a new Mammal model based on the fields given in the JSON request

##Day Two
###Step 3: Break up your project into multiple modules
* (You can use https://gist.github.com/fwielstra/1025038 as a good example)
* Create an api.js to hold your `get` and `post` calls
* Create a mammal.js that contains the schema and model creation for `Mammal`
* Create an app.js file that brings everything together:
  * it should require the express and mongoose modules
  * it should instantiate express and connect to the mongo server
  * it should require the api module and connect the endoints to their appropriate functions in api.js
  * it should start the server listening on a desired port

###Step 4: Routing and fetching
* Use a more complicated routing structure for your `GET /` call:
  * change the route to point to `/mammals` rather than just `/`
  * make it so that if someone requests `/mammals/marsupials` or `mammals/rodents` the call will return only mammals of that type
  * include an `order_by` query param that instructs the API to order the results by the given field

###Step 5 (Black Diamond): Query by id
* Use regex to determine whether someone is asking for `/mammals/:id` or `/mammals/:type` and return the appropriate response
