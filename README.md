# Trippy

### Authors: Bernie (Shu Cheng) Chen, Sunny (Xiaohan) Wang
Comp 426 - Spring 2024

See our project on [Youtube!]([https://youtube.com/](https://youtu.be/IRuNZdXw6VY))

Welcome to Trippy! A home for all your trip planning needs. We wanted to create this because we've realized that during our own trip planning, we've often resorted to Notion, or even Google Docs, to be able to store all of the information when trip planning. From flight confirmation #s to accommodation addresses, we wanted to build a place where users can securely store and access to all of this important information. 

### Flow
Users are guided to log in to access a secure dashboard, where they can view their previously created trips, create a new trip, or edit an existing trip. If they choose to view an existing trip, we efficiently display all of the saved information and use OpenWeatherMap API to retrieve the current weather status for their chosen destination. 


**Tools/Technologies Used:** React, Node.js, Bootstrap, Express.js, OpenWeatherMap API


### Project Features
**Interactive Front-End:** Utilizes modern web technologies such as Bootstrap Elements and Selectors to provide a responsive and interactive user experience.

**Backend with RESTful CRUD API:** The backend of this project provides RESTful CRUD APIs for two main resources: Users and Trips. Users can register, log in, and manage trips—including adding, updating, deleting trips, and managing trip-specific activities—all secured through JWT authentication. (/api/login GET, /api/register POST; /api/trips GET, POST, PUT, DELETE; /api/.../activities GET, POST, DELETE)

**Integration with Third-Party API:** Enhances functionality by incorporating data from OpenWeatherMap API.

**Session-Persistent State:** Authenticated the user and then display user-specific data using Express.js

**User Experience Design:** Focuses on a clean and intuitive interface, ensuring ease of use and accessibility.

**Presentation Video:** Demonstrates the features and usability of the application, providing a clear showcase of its value and functionality.
