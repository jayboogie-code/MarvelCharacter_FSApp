Shield Homebase
Welcome to the Marvel Shield Homebase project! This is a full-stack web application that allows users to explore, create, edit, and delete Marvel characters. The project is built using React for the frontend and Flask for the backend, with a MySQL database to store character data.

Features
Frontend
Home Page:
A cinematic hero banner with a typing effect that welcomes users to the Marvel Universe.
A floating Marvel logo and a glowing text animation for a futuristic look.

Character List:
Displays all characters in a responsive grid layout.
Includes a carousel at the top to highlight featured characters.

Character Details:
View detailed information about a specific character, including their alias, alignment, powers, and image.
Options to edit or delete the character.

Create Character:
A form to add new characters with validation for required fields.

Edit Character:
A form to update existing character details with validation.

404 Page:
A custom "Page Not Found" screen with a fun design and navigation options.

Backend
Flask API:
RESTful endpoints to manage characters (GET, POST, PUT, DELETE).

Input validation using Marshmallow.
Database:
MySQL database to store character details, including name, alias, alignment, powers, and image URL.

Automatic database creation if it doesn’t exist.
Tech Stack
Frontend
React: For building the user interface.
React Router: For navigation between pages.
React Bootstrap: For responsive and modern UI components.
Typewriter Effect: For the typing animation on the home page.
Backend
Flask: For building the RESTful API.
SQLAlchemy: For database ORM.
Marshmallow: For input validation and serialization.
Flask-CORS: To enable cross-origin requests.
Database
MySQL: To store character data.

Setup Instructions
Backend Setup
Install Python dependencies:
Update the MySQL connection string in server.py:
Run the Flask server:
The backend will be available at http://127.0.0.1:5000.
Frontend Setup
Install Node.js dependencies:
Start the React development server:
The frontend will be available at http://localhost:3000.
API Endpoints
Characters
GET /characters: Fetch all characters.
GET /characters/<id>: Fetch a specific character by ID.
POST /characters: Create a new character.
PUT /characters/<id>: Update an existing character.
DELETE /characters/<id>: Delete a character.

Project Structure
Frontend
src/
├── components/
│   ├── Navbar.jsx
│   ├── CharacterCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Characters.jsx
│   ├── CreateCharacter.jsx
│   ├── EditCharacter.jsx
│   ├── CharacterDetail.jsx
│   ├── NotFound.jsx
├── assets/
│   ├── marvelLogo.png
│   ├── marvelBackground.png
│   ├── wrongpage.png
├── App.jsx
├── index.jsx
├── index.css

Backend
server.py

Key Features in Code
Frontend
Home Page:
Typing effect implemented using the typewriter-effect library.
Floating Marvel logo with CSS animations.
Character List:
Carousel for featured characters using react-bootstrap.
Responsive grid layout for character cards.
Forms:
Validation for required fields and proper URL format for the image.
Backend
Database:
MySQL database with a characters table.
Automatic database creation if it doesn’t exist.
Validation:
Input validation using Marshmallow schemas.
Endpoints:
RESTful API with CRUD operations for characters.

Screenshots
Home Page![Screenshot 2025-05-18 at 6 00 52 PM](https://github.com/user-attachments/assets/437edf92-66f7-4d33-b70e-7637e474a049)

Character List![Screenshot 2025-05-18 at 6 01 31 PM](https://github.com/user-attachments/assets/a5534830-5d00-4ae0-bf84-61044730ceea)

Character Details![Screenshot 2025-05-18 at 6 02 07 PM](https://github.com/user-attachments/assets/0173414d-9a30-4e12-ad28-52d54ea566c7)


Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.
