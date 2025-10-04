# Full-Stack To-Do List Application

This is a to-do application built with a **React.js** frontend, an **Express.js** backend, and a **MySQL** database, fully containerized with Docker.

## Tech Stack

* **Frontend:** React.js (JavaScript), Axios, CSS
* **Backend:** Node.js, Express.js (JavaScript)
* **Database:** MySQL
* **Containerization:** Docker & Docker Compose

## How to Run

1.  **Clone the Repository.**
2.  **Build and Run with Docker Compose:**
    ```bash
    docker-compose up --build
    ```
3.  **Access the App:**
    * **Frontend:** `http://localhost:3000`
    * **Backend API:** `http://localhost:4000/api/tasks`

## Stopping the Application

```bash
docker-compose down