# Web-Based File Explorer

A simple web-based file explorer built with Docker, Node.js, and Nginx. This application allows users to upload, download, and delete files through a web interface.

## Features
- **Upload Files**: Upload files with their original names and extensions.
- **Download Files**: Download files directly from the browser.
- **Delete Files**: Remove files from the server.
- **Dockerized**: Easily deployable using Docker and Docker Compose.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: None (files are stored directly on the server)
- **Web Server**: Nginx
- **Containerization**: Docker, Docker Compose

---

## Prerequisites
- Docker installed on your machine.
- Docker Compose installed on your machine.

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/web-file-explorer.git
cd web-file-explorer
```
### 2. Build and Run the Application
Run the following command to build and start the Docker containers:

```bash
FROTEND_PORT="Port of your choosing" docker-compose up --build
```
### 3. Access the Application
Open your browser and navigate to http://localhost.

You should see the file explorer interface.
