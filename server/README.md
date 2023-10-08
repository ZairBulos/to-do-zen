# ToDo App Server

Welcome to the ToDo App Server documentation. This guide will help you get started with setting up and running the server for the ToDo App project.

## Getting Started

To use the ToDo App Server, you'll need to follow these steps:

1. Clone the repository

```bash
git clone https://github.com/ZairBulos/to-do-app.git
```

2. Navigate to the Server Folder

```bash
cd to-do-app/server
```

## Instalation

Before you can run the server, you need to install the required packages and dependencies. We recommend using pnpm as the package manager, but you can also use npm or yarn if you prefer.

```bash
pnpm install
```

### Environment Configuration

Create a `.env` file in the root of the server directory and add the following configuration:

```env
PORT=3000
JWT_SECRET='YOUR_SECRET'
MONGODB_URI='MONGODB_URI'
```

## Usage

Now that you have cloned the repository, installed the necessary dependencies, and configured the environment, you can start the server:

```bash
pnpm start
```

## Technologies

<p style="text-align: left;"> 
  <p> 
    <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="65" height="65" />
  </p>
  <p>
    <img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg" alt="express" width="65" height="65" />
  </p>
  <p>
    <img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="65" height="65" />
  </p>
  <p>
    <img src="https://seeklogo.com/images/J/jwt-logo-65D86B4640-seeklogo.com.png" alt="jwt" width="65" height="65" />
  </p>
</p>