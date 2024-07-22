import pool from "@/config/db";
import { QuizScore } from "@/types/types";

const getAllUsersQuizzes = async () => {
	const client = await pool.connect();
	try {
		const query =
			"SELECT * FROM quiz_scores ORDER BY created_at DESC LIMIT 10;";
		const { rows } = await client.query(query);
		return rows as QuizScore[];
	} catch (error) {
		throw error;
	} finally {
		client.release();
	}
};

export default getAllUsersQuizzes;
