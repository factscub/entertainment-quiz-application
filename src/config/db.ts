import createQuizScoresTable from "@/dbScripts/initDB";
import { Pool } from "pg";

const postgresConfig = {
	database: process.env.PG_DATABASE_NAME, // Database name fetched from environment variables
	host: process.env.PG_DATABASE_HOST, // PostgreSQL host address fetched from environment variables
	port: process.env.PG_DATABASE_PORT as unknown as number, // PostgreSQL port number fetched from environment variables and casted to number
	user: process.env.PG_DATABASE_USERNAME, // PostgreSQL username fetched from environment variables
	password: process.env.PG_DATABASE_PASSWORD, // PostgreSQL password fetched from environment variables
	ssl: {
		rejectUnauthorized: false, // Option to reject unauthorized SSL certificates, set to false for development/testing
	},
};

const pool = new Pool(postgresConfig);

pool
	.on("connect", async () => {
		console.log("Postgres connected...");
		await createQuizScoresTable(pool);
	})
	.on("error", async () => {
		console.log("Postgres connection error");
	});

export default pool;
