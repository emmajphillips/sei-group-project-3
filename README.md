![General Assembly](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Project three: Accountable

## Overview

The third project for the course was to build a full stack application using **MongoDB**, **Express**, **React** and **Node.js**. Working in a small group, we wanted to create an expense sharing app similar to Splitwise, but with an improved and more social user experience. The key feature was enabling users to hold funds within the app, so they could easily transfer to friends that they owed.

The final result can be found at: https://splitexpenses.herokuapp.com/.

To install and run this app, make sure you have NPM and run  `npm install` to get started!

## Table of contents

* [Brief](#Brief)
* [Final product](#Final-product)
* [Wins and challenges](#Wins-and-challenges)
* [Bugs](#Bugs)

## Brief

### Technical requirements

* **Build a full stack application** 
* **Use an Express API** to serve data from a Mongo database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which means multiple relationships and CRUD functionality
* **Implement thoughtful user stories/wireframes** 
* **Be deployed online** and accessible to the public.

### Languages and technologies used

* Mongoose
* MongoDB
* Express
* React
* Node.js
* NPM
* Axios
* Bcrypt
* JSON web tokens
* Cloudinary - photo storage

## Final product

![Accountable](assets/accountable.jpg)

### App

For this project, we kept our models quite simple as the relationships between them were more complex. Since we had Splitwise as our starting point, we looked at the app, how it functioned, what we liked about it and what we thought could be improved to aid user experience. One of the points of improvement we determined was that the app does not allow users to pay other directly via the platform. If on mobile, users have to navigate to their bank app to set up payment, and they likely have to access messaging apps with the details of the person or persons that they owe - this constant juggling in order to make a single payment is easily remidied by enabling users to transfer and hold funds within Accountable. Then, when they wanted to settle a debt, it was as simple as clicking a button. 

Overview of the app:

* Users must create an account in order to use Accountable
* Once they join, they are able to add funds into their account balance. As this was part of an assignment, we used a simple increase and decrease functionality - the app mimics the experience were it to actually connected to a user's bank account
* Users may search other users to connect as friends
* Once friend requests hae been accepted, then users can start to raise expenses with their connections
* Accountable keeps a ledger of expenses owed by/to users as well as expenses settled by each user
* Expenses and friends can be accessed through their respective dashboards

### My contribution

I oversaw the user models within the back-end and how it connected to the friends and expenses models in order for the app to function properly. I carried this through to the front-end where I managed the account pages, allowing users to see their balance, 'top up' or 'transfer' funds between their bank, update their profile picture and information, and set their notification preferences (NB we were unable to implement notifications during development, so this an anticipated future feature).

I also took on the design concept along with quite a bit of its implementation with the front-end.

## Wins and challenges

### Wins

A personal win from this project was how it really soliified my understanding of React. We were still working with classical components, and there were a couple occassiona where informaiton needed to pass down from the state of a parent component through a couple child and grandchild components. One example that comes to mind is the text input option on the account and bank pages to decalre a unique amount to add or subtract from the user's Accountable balance. The input is it's own componenet which sits as a child wihtin one page and a grandchild on the other, therefore the logic for the input sits with the highest component in the tree. In the end, it was really rewarding to be able to understand and manipulate the data to carry out the various functions.

### Challenges 

Relfecting after the fact, the biggest challenge for this project was time management. We were meticulous in our planning at the beginning fo the project, but because this was our first full stack application, we were unsure how much time to dedicate between front and back-end development. We opted to split our time between them, so 3.5 days on the back-end and 3.5 days on the front end. While we were successful in the end, I think we would have benefitted from shifting our timelines a bit earlier and only spending two days creating the back-end, which would have given us more time to build the front of the application and to do a bit more robust testing. This is a lesson that I carried forward to the next group project, which was hugely beneficial to what we were able to produce in project four.

I also think that MongoDB was a bit of a hinderance in this project, and that it probably would have been better served by a SQL database in order to keep track of expenses between users.

### Future content

New features would include:

* Notifications to alert users when a new expense has been raised, outstanding expenses, etc. along with the option to customise the alerts users receive
* Groups so that expenses can be split beyond the current offering which is only between individuals
* Messaging to allow users to interact with each other more wihtin the app
* News feed to act as a landing page and show activity amongst users' friends
