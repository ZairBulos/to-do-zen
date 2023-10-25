# ToDoZen (CLIENT)

Welcome to the **ToDoZen** client documentation. This guide will help you get started with setting up and running the client for the ToDo App project.

## Getting Started

Before you start using the client, ensure you have completed the server-side setup as outlined in the [server documentation](/server/README.md).

1. Navigate to the client folder:

```bash
cd to-do-zen/client
```

## Instalation

To install the necessary dependencies, run the following command:

```bash
npx expo install
```

### Environment Configuration

Create a `.env` file in the root of the client directory to configure the client-side environment:

```env
ENV=development
API_URL=http://localhost:3000/api
```

## Usage

Now that you have cloned the repository, installed the necessary dependencies, and configured the environment, you can start the client:

```bash
npx expo start
```