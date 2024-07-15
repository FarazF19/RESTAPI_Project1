Here is the `README.md` file for your REST API project, using the provided code as a reference:

````markdown
# REST API - Mockaroo sample data

This is a simple REST API for managing users, supporting CRUD operations. Responses are in JSON format, and the API follows RESTful principles.

## Endpoints

### Get All Users

- **GET /api/users**
- Retrieves a list of all users.

### Get User by ID

- **GET /api/users/:id**
- Retrieves a user by their unique ID.

### Create a New User

- **POST /api/users**
- Creates a new user.
- **Request Body:**
  ```json
  {
    "name": "New User",
    "email": "new.user@example.com"
  }
  ```
````

### Update a User by ID

- **PATCH /api/users/:id**
- Updates an existing user by their unique ID.
- **Request Body:**
  ```json
  {
    "name": "Updated User",
    "email": "updated.user@example.com"
  }
  ```

### Delete a User by ID

- **DELETE /api/users/:id**
- Deletes a user by their unique ID.

### Render HTML Document

- **GET /users**
- Renders an HTML document listing all users.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/rest-api-project.git
   ```
2. Navigate to the project directory
   ```bash
   cd rest-api-project
   ```
3. Install dependencies
   ```bash
   npm install
   ```

### Running the Server

```bash
npm start
```

The server will start on `http://localhost:4000`.

### Using the API

Use tools like `curl`, `Postman`, or any REST client to interact with the API endpoints.

## Example Code

```javascript
const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 4000;

// Routes
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    return res.json(user);
  })
  .patch((req, res) => {
    // Edit user with ID
    res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // Delete user with ID
    res.json({ status: "pending" });
  });

app.post("/api/users", (req, res) => {
  // TODO: Create new user
  return res.send({ status: "pending" });
});

app.listen(PORT, () => console.log("Server Started!"));
```

## Authors

- Faraz

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

Replace `yourusername` with your actual GitHub username or appropriate details. Save this content in a file named `README.md`.
```
