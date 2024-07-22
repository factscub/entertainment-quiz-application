import { Pool } from "pg";

const createQuizScoresTable = async (pool: Pool) => {
	const client = await pool.connect();

	try {
		const createTableQuery = `
      	CREATE TABLE IF NOT EXISTS quiz_scores (
    	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        total_questions INT NOT NULL,
        correct_answers INT NOT NULL,
        message TEXT,
        grade VARCHAR(50),
        status VARCHAR(50),
		created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

		await client.query(createTableQuery);
		console.log("Quiz scores table created or already exists.");
	} catch (error) {
		console.error("Error creating table:", error);
		throw error;
	} finally {
		client.release();
	}
};

export default createQuizScoresTable;
