# Mern - Todo
A to-do app made with React, Hooks, Context, MongoDB, Node, Express, Jest, JWT

## React
About React, I used Context and Hooks.

## MongoDB and Mongoose
I used MongoDB as a database and Mongoose to make to-do and user schemas. Each to-do has an owner (user) and each user has to have an auth (JWT tokens) to view their own to-dos or manage their accounts.

## Node, Express
I created a REST API with Node and Express, hosting separately than the front end.

## Jest
I have added tests to API to perform the same operations as the client/user would do. After learning to test React, I will add it as well.

## Some Functionality
- Even if you don't have account, you can add/delete/update todos. They will be saved to localstorage. If you would decide to sign up/sign in after adding todos, those todos will be added to database.
- For most of the operations, I have added notifications, for better user experience. 
- Users can sign in/sign up/update and delete the account. The same goes for todos. 

## Homepage
![Mern-Todo homepage](https://i.paste.pics/09dce5a287f7aea60a1f633a7f1b2302.png)

## Todo update
![Mern-Todo to-do update](https://i.paste.pics/46fd30e28bf98f9cc70e81c979d53abb.png)

## User profile
![Mern-Todo todo user profile](https://i.paste.pics/ef65477c52daa42b2dea50a85f0d86a4.png)

## Update account
![Mern-Todo todo update profile](https://i.paste.pics/595cf184e1855821a9179d622be129bf.png)

## Delete account
![Mern-Todo todo update profile](https://i.paste.pics/69aec593c97e1d2c71bbada5b69e24ae.png)
