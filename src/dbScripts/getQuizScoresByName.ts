import pool from "@/config/db";
import { QuizScore } from "@/types/types";

const getQuizScoresByName = async (name: string) => {
	const client = await pool.connect();
	try {
		const query = "SELECT * FROM quiz_scores WHERE name ILIKE $1 ORDER BY created_at DESC;";
		const { rows } = await client.query(query, [`%${name}%`]);
		return rows as QuizScore[];
	} catch (error) {
		throw error;
	} finally {
		client.release();
	}
};

export default getQuizScoresByName;
