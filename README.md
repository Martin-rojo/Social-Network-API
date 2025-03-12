# Social Network API

A RESTful API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. This application uses Express.js for routing, MongoDB as the NoSQL database, and the Mongoose ODM.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Demo](#demo)
- [License](#license)
- [Questions](#questions)

## Features

- Create, read, update, and delete users
- Add and remove friends from a user's friend list
- Create, read, update, and delete thoughts (posts)
- Create and delete reactions to thoughts
- Mongoose models with schema settings as specified in the requirements
- Formatted timestamps using custom methods

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JavaScript

## Installation

1. Clone the repository to your local machine:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd Social-Network-API
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Ensure MongoDB is installed and running on your local machine.

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The server will start and the Mongoose models will be synced to the MongoDB database.

3. Use an API client like Insomnia or Postman to test the API routes.

## API Routes

### User Routes

- **GET /api/users** - Get all users
- **GET /api/users/:userId** - Get a single user by ID
- **POST /api/users** - Create a new user
  ```json
  {
    "username": "johndoe",
    "email": "johndoe@gmail.com"
  }
  ```
- **PUT /api/users/:userId** - Update a user by ID
- **DELETE /api/users/:userId** - Delete a user by ID (Also removes user's associated thoughts)

### Friend Routes

- **POST /api/users/:userId/friends/:friendId** - Add a friend to a user's friend list
- **DELETE /api/users/:userId/friends/:friendId** - Remove a friend from a user's friend list

### Thought Routes

- **GET /api/thoughts** - Get all thoughts
- **GET /api/thoughts/:thoughtId** - Get a single thought by ID
- **POST /api/thoughts** - Create a new thought
  ```json
  {
    "thoughtText": "Here's a cool thought...",
    "username": "johndoe",
    "userId": "12345678990"
  }
  ```
- **PUT /api/thoughts/:thoughtId** - Update a thought by ID
- **DELETE /api/thoughts/:thoughtId** - Delete a thought by ID

### Reaction Routes

- **POST /api/thoughts/:thoughtId/reactions** - Create a reaction for a thought
  ```json
  {
    "reactionBody": "Wow, great thought!",
    "username": "janedoe"
  }
  ```
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId** - Remove a reaction from a thought

## Demo

[Watch the walkthrough video](your-video-link-here) demonstrating the functionality of the Social Network API.


## License

This project is licensed under the MIT License.

## Questions or concerns

If you have any questions about this project, please feel free to contact me:

- GitHub: https://github.com/Martin-rojo
- Email: Martin.rojo101@gmail.com
