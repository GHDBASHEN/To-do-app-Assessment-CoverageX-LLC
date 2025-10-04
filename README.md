# Full-Stack To-Do List Application

This is a simple to-do task web application built as a full-stack project. It consists of a React frontend, a Node.js/Express backend, and a MySQL database. The entire application is containerized using Docker.

## Tech Stack

* **Frontend:** React.js (JavaScript)
* **Backend:** Node.js, Express.js (JavaScript)
* **Database:** MySQL
* **Containerization:** Docker & Docker Compose

## Prerequisites

* Docker Desktop installed and running.

## How to Build and Run the Project

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/GHDBASHEN/To-do-app-Assessment-CoverageX-LLC.git
    cd To-do-app-Assessment-CoverageX-LLC
    ```

2.  **Build and Run with Docker Compose**
    From the root directory of the project, run the following command. This will build the Docker images and start the frontend, backend, and database containers.
    ```bash
    docker compose up --build
    ```

3.  **Access the Application**
    Once the containers are running, the application will be available at:
    * **Frontend UI:** `http://localhost:3000`
    * **Backend API:** `http://localhost:4000/api/tasks`

## Stopping the Application

To stop and remove all running containers, use the command:
```bash
docker compose down
```