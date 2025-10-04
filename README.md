# Full-Stack To-Do List Application

This is a simple to-do task web application built to fulfill the requirements of the CoverageX LLC technical assessment. It consists of a React frontend, a Node.js/Express backend, and a MySQL database. The entire application is containerized and managed by Docker Compose for easy setup and execution.

## Tech Stack

* **Frontend:** React.js (JavaScript)
* **Backend:** Node.js, Express.js (JavaScript)
* **Database:** MySQL 8.0
* **Containerization:** Docker & Docker Compose

## Features

* **Create Tasks:** Add new tasks with a title and an optional description.
* **View Recent Tasks:** The UI displays the 5 most recent, uncompleted tasks.
* **Complete Tasks:** Mark tasks as "Done" to remove them from the list.
* **Responsive UI:** A clean and modern user interface that matches the provided mockup.

## Prerequisites

The only prerequisite to run this project is **Docker Desktop**. The evaluator is assumed to have a Linux-based development environment, but these instructions are platform-agnostic.

### Docker Installation Guide

If you do not have Docker installed, please follow these steps:

1.  **Download Docker Desktop** for your operating system from the official website:
    * [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/)
    * [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/)
    * [Docker Desktop for Linux](https://www.docker.com/products/docker-desktop/)

2.  **Install the Application:** Run the downloaded installer and follow the on-screen instructions. The installation may require a system restart.

3.  **Verify the Installation:** Once installed, open your terminal (PowerShell, CMD, or a Linux terminal) and run the following command:
    ```bash
    docker --version
    ```
    If the installation was successful, you will see the Docker version number printed.

---

## How to Build and Run the Project

Follow these steps to get the entire application running with a single command.

1.  **Clone the Repository**
    Open your terminal, navigate to the directory where you want to store the project, and run:
    ```bash
    git clone https://github.com/GHDBASHEN/To-do-app-Assessment-CoverageX-LLC.git
    cd To-do-app-Assessment-CoverageX-LLC
    ```

2.  **Build and Run with Docker Compose**
    From the root directory of the project, run the following command. This will build the Docker images from the Dockerfiles, download the MySQL image, and start the frontend, backend, and database containers in the correct order.
    ```bash
    docker compose up --build
    ```

3.  **Access the Application**
    Once the containers are up and running (this may take a minute on the first launch), the application will be available at:
    * **Frontend UI:** `http://localhost:3000`
    * **Backend API:** `http://localhost:4000/api/tasks`

---

## Database Configuration

The MySQL database is configured using environment variables within the `docker-compose.yml` file. This setup automatically creates the database and a dedicated user for the application.

* **Database Name:** `tododb`
* **Application User:** `myuser`
* **Application Password:** `mypassword`
* **Root User Password:** `myrootpassword` (This is for administrative access to the database if needed, but the application itself uses the more secure `myuser`).

The backend service connects to the database using these credentials, which are securely passed via Docker's internal network. The data is persisted in a Docker volume named `mysql_data` to ensure it is not lost when the containers are stopped.

---

## Stopping the Application

To stop and remove all running containers and the associated network, open your terminal in the project's root directory and press `Ctrl + C`, then run:
```bash
docker compose down
```
To also remove the database data, run `docker compose down -v`.
