Here’s an improved English version of your `README.md` for the Knester project:

---

# Knester

**Knester** is a NestJS web application for database management using _Knex.js_. This project is configured to work with PostgreSQL (pg) by default, but you can switch to other databases by updating environment variables and configurations in the _knexfile.js_ file.

## Requirements

- **pnpm** (for package management)
- **Node.js** version 14 or higher
- A properly configured `.env` file with your database connection details

## Setup and Launch

### 1. Install Dependencies

Run the following command to install all required packages:

```bash
pnpm install
```

### 2. Configure the `.env` File

Create a `.env` file from the provided sample:

```bash
cp .env.sample .env
```

Update the `.env` file with your environment variables, particularly `DATABASE_URL` or individual database connection details.

### 3. Run Initial Migrations

Run the initial migrations to set up all necessary tables in the database:

```bash
pnpm knex migrate:latest
```

> **Note:** Ensure that the `uuid-ossp` extension is enabled in your PostgreSQL database to support the `uuid_generate_v4()` function. If it’s not enabled, you can add it with:
> ```sql
> CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
> ```

### 4. Launch the Application

Start the application in development mode:

```bash
pnpm start:dev
```

The application should now be running at `http://localhost:<PORT>`, where `<PORT>` is the port specified in your `.env` file (default is `3000`).

## Switching Databases

Knester is set up to use PostgreSQL by default. If you want to use another database, update the environment variables in `.env` and modify the connection configuration in _knexfile.js_ to fit your desired database. Refer to the official [Knex.js documentation](http://knexjs.org/) for connection settings specific to your database.

## Migration Commands

Use the following commands to manage your database schema with Knex:

- **Run all migrations**:
  ```bash
  pnpm knex migrate:latest
  ```

- **Rollback the latest migration**:
  ```bash
  pnpm knex migrate:rollback
  ```

- **Create a new migration file**:
  ```bash
  pnpm knex migrate:make <migration_name>
  ```

## Additional Information

For more details on using Knex.js and its capabilities, refer to the official [Knex.js documentation](http://knexjs.org/). For NestJS documentation, visit [NestJS](https://docs.nestjs.com/).
