# poleComboCreator
Select from beginner, intermediate and advanced moves, and spinny or static, to help create inspiration for training

## Setup Instructions

1. Clone the repo to your local machine
1. cd in to /server and run `npm install`
1. Download and install mongodb and mongodb compass
1. If you haven't installed mongodb as a windows service, start mongodb
1. Open mongodb compass and create a database called `polemoves` and a collection called `polemoves`
1. Download and install Postman
1. Run 'nodemon index.js' to start the server

## Add To The Database

1. Open Postman
1. Create a new request:
1. Create a POST request to `http://localhost:3000/api/polemove`
1. In the Body, in JSON, set: 
```
{
    "name": "Butterfly",
    "isStatic": true,
    "isSpinny": true,
    "difficultyLevel": "Beginner"
}
```
1. Press Send
1. You should get a response like this:

```
{
    "success": true,
    "id": "<generatedID>",
    "message": "Pole move added to DB!"
}
```
1. Open MongoDB Compass
1. Open up the database and collection polemoves
1. There should now be one document with the information from above stored.
1. See `server/models/polemove-model.js` to see the database schema
1. See `server/routes/polemove-router.js` for more URLs
