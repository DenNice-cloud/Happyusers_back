

# Technologies on the backend:
 - Express: A web framework for building a server-side application. Used for request processing and route management.
 - CORS (Cross-Origin Resource Sharing): Allows servers to control which sources have access to their resources. Used for security when accessing APIs from different domains.
 - Module Alias: Simplifies module import by creating aliases for paths.

# Project structure:
 - Server main file: src/server.js
 - Static files: Located in the static folder, accessible via express.static.
 - Data: Stored in the src/data folder, where JSON data for textures, filters and brands are located.

**Link to frontend part** - https://github.com/DenNice-cloud/Happyusers

# API Routes:
 - https://happyusersback-production.up.railway.app/textures/tiles: Returns tile data, including textures, filters, and brands.
 - https://happyusersback-production.up.railway.app/textures/paint: Returns paint data, including textures, filters, and brands.

## Setup Instructions
To run this project locally, follow these steps:

Node.js Version
- v18.20.2

Clone the repository:
```sh
git clone https://github.com/DenNice-cloud/Happyusers_back.git
cd Happyusers_back
```

Install dependencies:
```sh
npm install
```
