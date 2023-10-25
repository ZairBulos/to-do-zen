# ToDoZen (SERVER)

Welcome to the **ToDoZen** server documentation. This guide will help you get started with setting up and running the server for the ToDo App project.

## Getting Started

1. Clone the Repository:

```bash
git clone https://github.com/ZairBulos/to-do-zen.git
```

2. Navigate to the server folder:

```bash
cd to-do-zen/server
```

## Instalation

To install the necessary dependencies, run the following command:

**Using npm:**

```bash
npm install
```

**Using pnpm:**

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

**Using npm:**

```bash
npm run dev
```

**Using pnpm:**

```bash
npm run dev
```