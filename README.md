Fitness Tracking App - README
Project Overview

The Fitness Tracking App is a full-stack web application designed to help users monitor and manage their fitness routines. The app allows users to register, log workouts, set fitness goals, join groups for fitness challenges, and interact with other users by commenting on each other's workouts. It provides features to track progress and participate in a supportive fitness community.
Features

    User Authentication and Authorization: Users can securely register and log in to the app.
    Workout Logging: Users can log workouts with details like workout type, duration, and calories burned.
    Goal Setting and Progress Tracking: Users can set personal fitness goals and monitor their progress.
    Group Challenges: Users can join groups to participate in fitness challenges and motivate each other.
    Commenting System: Users can comment on each other's workouts for motivation and engagement.

Table of Contents

    Project Overview
    Features
    Technologies Used
    Requirements
    Project Structure
    Installation and Setup
    API Endpoints
    Client-Side Routes
    Forms and Validation
    Authentication and Authorization
    Resources
    Contributing
    License

Technologies Used
Backend:

    Flask: A lightweight web framework for building the API and handling backend logic.
    SQLAlchemy: An ORM used for database operations.
    PostgreSQL: The relational database used to store users, workouts, and group data.

Frontend:

    React: A JavaScript library for building dynamic user interfaces.
    React Router: For managing client-side routing and navigation.
    Formik: For form management and validation.

Requirements
Models:

    User:
        id: Primary Key
        name: String
        email: String (unique)
        password: String (hashed)
    Workout:
        id: Primary Key
        type: String (e.g., Running, Cycling)
        duration: Integer (minutes)
        calories_burned: Integer
        user_id: Foreign Key (references User)
    Group:
        id: Primary Key
        name: String
        description: String
    GroupMembership (Association Table):
        id: Primary Key
        user_id: Foreign Key (references User)
        group_id: Foreign Key (references Group)
        join_date: Date

Relationships:

    One-to-Many: A User can have multiple Workouts.
    Many-to-Many: Users can join multiple Groups, and each Group can have multiple Users (managed by the GroupMembership table).

Project Structure

The project is divided into two main parts:

    Backend (Flask API): Handles user registration, login, CRUD actions for workouts and groups, and authentication/authorization logic.
    Frontend (React): Manages the user interface, including forms for user actions, workout logging, group management, and progress tracking.

Key Folders:

    /backend: Contains Flask app, models, routes, and database logic.
    /frontend: Contains React components, routing, and state management.

Installation and Setup
Backend (Flask)

    Clone the repository:

    bash

git clone <github_link_here>

Navigate to the backend folder:

bash

cd backend

Create a virtual environment and activate it:

bash

python -m venv venv
source venv/bin/activate  # For Linux/macOS
venv\Scripts\activate     # For Windows

Install dependencies:

bash

pip install -r requirements.txt

Set up the database:

    Ensure PostgreSQL is installed and running.
    Create a PostgreSQL database.
    Update the database URL in your .env file with your database credentials.

Run database migrations:

bash

flask db upgrade

Start the backend server:

bash

    flask run

Frontend (React)

    Navigate to the frontend folder:

    bash

cd ../frontend

Install dependencies:

bash

npm install

Start the frontend server:

bash

    npm start

API Endpoints
Authentication

    POST /register: Register a new user.
    POST /login: Login and receive an authentication token.

Workouts

    GET /workouts: Get all workouts for the logged-in user.
    POST /workouts: Log a new workout.
    PUT /workouts/
    : Update a workout.
    DELETE /workouts/
    : Delete a workout.

Groups

    GET /groups: Get all available groups.
    POST /groups: Create a new group.
    POST /groups/
    /join: Join a group.
    POST /groups/
    /leave: Leave a group.

Comments

    POST /workouts/
    /comments: Comment on a workout.

Client-Side Routes
Key Routes

    /dashboard: Displays the user's workout history and progress summary.
    /workouts/new: A form to log a new workout.
    /groups: Browse and join available fitness groups.
    /workouts/
    : View a specific workout's details and comments.

Additional Routes:

    /register: User registration page.
    /login: User login page.
    /profile: View and edit user profile.

Forms and Validation

All forms will use Formik for form handling and validation.

    User Registration/Login: Validate email format and password strength.
    Workout Logging: Validate workout type, duration (integer), and calories burned (integer).
    Group Creation: Validate group name and description.

Validation Examples

    Email Format: Ensure the email address is properly formatted.
    Duration/Calories: Validate that duration and calories burned are numeric values.

Authentication and Authorization

The application uses JWT (JSON Web Tokens) to handle authentication and authorization.

    Login: Upon logging in, the server issues a JWT that must be included in all future requests for protected resources.
    Protected Routes: Routes like /dashboard, /workouts, and /groups require the user to be authenticated. Unauthorized users will be redirected to the login page.

Resources

    Trello Board: https://trello.com/b/geMHjO8f/fitness - Track project tasks and milestones.
    GitHub Repository: https://github.com/BLACKxs123/FItness - Access the source code and documentation.

Contributing

We welcome contributions to the Fitness Tracking App. To contribute:

    Fork the repository.
    Create a new branch for your feature or bug fix.
    Make your changes and test thoroughly.
    Submit a pull request with a detailed description of your changes.

License

This project is licensed under the MIT License.