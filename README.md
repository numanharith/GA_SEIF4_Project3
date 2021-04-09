# Hotels App

## Collaborators
* [Nu'man Harith](https://github.com/numanharith)
* [Cynthia Teo](https://github.com/cynthiajteo)
* [Jason Chng](https://github.com/mathslover74)

## Application link
[Hotels App](https://ga-seif4-project3.herokuapp.com/signin)

## Table of Contents

* [Introduction](#Introduction)
* [Objective/MVP](#Objective/MVP)
* [Project Approach](#project-approach)
* [Technologies Used](#Technologies-used)
* [Main Features](#Main-features)
* [Approach Taken](#Approach-taken)
* [Accomplishments](#Accomplishments)
* [RESTful Routes](#RESTful-Routes)
* [Challenges](#Challenges)
* [Future Developments](#Future-Developments)

## Introduction
The Hotel Booking app to help user checkout the hotel price and photos before booking. This can also use to compare different in demand hotels in Singapore.

## Objective/Minimum Viable Product (MVP)
A working full-stack application using MERN (MongoDB, Express, React and Node.js) and CRUD (Create, Read, Update and Delete) that adheres to MVC (Models, Views, and Controllers) file structure.

## Project Approach
* Set up a basic MVC structure with basic CRUD route in the backend
* Set up database with collections and schema in MongoDB
* Built authentication page in the frontend
* Host app on Heroku

## Technologies Used
* MongoDb / Mongoose
* React.js
* Authentication services (session)
* Express.js
* Node.js
* Axios
* React-nice-dates (Date Picker)
* React router
* Material-ui
* Bootstrap
* Moment.js
* Heroku deployment

## Main Features
* User is able to sign-up/ login to the app include authentication and encrypted password
* User is able to view list in demand hotels with price of rooms per night in Singapore
* User is able to book in demand hotels with check in/out date and total price
* User is able to view their booking page after they book using the app

## Approach Taken
* Discuss and agree on the project to create
* Set up a basic MVC structure with basic CRUD route in the backend
* Set up database with collections and schema validation 
* Build authentication page
* Able to view hotel/rooms
* Able to book hotel rooms and display check in/out dates with total nights and total price
* Host frontend and backend in Heroku

## Accomplishments
* Met mininum viable product (MVP)'s requirements
* Learnt and used React Hook for this project
* Learnt React Router
* Working in a team to create an app

## RESTful Routes
| No. | Route   | URL                                 | HTTP Verb | Description                                                                      |
| --- | ------- | ----------------------------------- | --------- | -------------------------------------------------------------------------------- |
| 1.  | Create  | /hotels                             | POST      | Create New Hotel                                                                 |
|     |         | /users/signnup                      | POST      | Create New User                                                                  |
|     |         | /users/signin                       | POST      | User Login                                                                       |
| 2.  | Read    | /hotels                             | GET       | Get All Hotels                                                                   |
|     |         | /hotels/:id                         | GET       | Get Selected Hotel                                                               |
|     |         | /users                              | GET       | Get All Users                                                                    |
|     |         | /users/profile                      | GET       | Retrieve Current User's Session                                                  |
|     |         | /users/profile/:id                  | GET       | Get Current User's Profile                                                       |
|     |         | /users/signout                      | GET       | Get Current User to Destroy Session                                              |
|     |         | /users/hassignned                   | GET       | Check User Has Signed In                                                         |
| 3.  | Update  | /hotels/:id                         | PUT       | Edit Hotel                                                                       |
|     |         | /hotels/:hotelid/:roomid            | PUT       | Creates New Hotel Booking                                                        |
| 4.  | Destroy | /hotels/:id                         | DELETE    | Delete Hotel                                                                     |
|     |         | /users/profile/:userid/:bookingid   | DELETE    | Delete User's Booking                                                            |

## Wireframe
* [Wireframe Link](https://miro.com/app/board/o9J_lNdhbVY=/)

## Challenges
* Had difficulties passing props down to component with React Hook
* Merging codes - can't blindly copy & paste 

## Future Developments
* Allow users to edit bookings
* Input Google Map for hotel locations
* Check dates in system to check hotel/room vacancy
