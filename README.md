<h1 align="center"> Alchemy </h1> <br>

## Introduction
Alchemy is full-stack MERN project which allows users to add , delete and like posts. It is provided with authentication system along with Google Sign In.

<p align="center">
  <img src = "https://github.com/faiz-hasan11/Alchemy/blob/main/screenshot/home.png" width=350>
</p>

## Features

A few of the things you can do with Alchemy:

* Add and Delete Posts
* Add Title,Message and Tags to your Post
* Edit uploaded Posts
* Like Posts
* Dashboard to view only logged-in user's posts
* Create an Account along with Google Sign In facility

<p align="center">
  <img src = "http://i.imgur.com/IkSnFRL.png" width=700>
</p>

<p align="center">
  <img src = "http://i.imgur.com/0iorG20.png" width=700>
</p>

## Links

- Frontend Hosted on Netifly. [Link](https://alchemy-project.netlify.app/)
- Backend Hosted on Heroku. [Link](https://alchemy-project.herokuapp.com/)

## Built With
* [MongoDb](https://www.mongodb.com/) - The Database used for storing data for posts and users
* [ExpressJs](https://expressjs.com/) - The NodeJs web framework to handle multiple different http requests and handle API calls.
* [NodeJs](https://nodejs.org/en/) - JavaScript runtime environment to build and run an application
* [ReactJs](https://reactjs.org/) - Library used to create interactive UIs
* [Material-UI](https://material-ui.com/) - React Framework used for designing and adding styles to components
* [Sass](https://sass-lang.com/) - Extension of CSS used for designing cards
* [BcryptJs](https://www.npmjs.com/package/bcryptjs) - Used for hashing passwords
* [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken) - Used for securely passing information for authentication
* [Netifly](https://www.netlify.com/) - To host the frontend
* [Heroku](https://www.heroku.com/) - To host the backend

## Build Process

- Clone or download the repo
- `npm install` to install dependencies for backend
- `cd frotend and npm install` to install dependencies for frontend
- Run `nodemon server.js` to start the server
- Run `npm start` inside frontend to start the client host 

**Development Keys**: 
- The `CONNECTION_URL` in `server.js` is for development purposes and do not represent the actual application keys. Feel free to use them or use a new set of keys by creating your own [MongoDB connection](https://www.mongodb.com/).
- The `CLIENT_ID` in `frontend/src/components/Auth/Auth.js` is for development purposes and do not represent the actual application keys. Feel free to use them or use a new set of keys by creating your own [OAuth Consent Screen](https://console.developers.google.com/).

##### Made by Syed Faiz Hasan :wave:
