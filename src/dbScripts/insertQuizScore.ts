import pool from "@/config/db";
import { QuizScore } from "@/types/types";

type QuizScoreWithOutID = Omit<QuizScore, "id">;

const insertQuizScore = async ({
	name,
	total_questions,
	correct_answers,
	message,
	grade,
	status,
}: QuizScoreWithOutID) => {
	const client = await pool.connect();
	try {
		const query = `
        INSERT INTO quiz_scores (name, total_questions, correct_answers, message, grade, status)
        VALUES ($1, $2, $3, $4, $5, $6)
		RETURNING id
      `;
		const values = [
			name,
			total_questions,
			correct_answers,
			message,
			grade,
			status,
		];
		const updatedData = await client.query(query, values);
		return updatedData.rows[0].id;
	} catch (error) {
		throw error;
	} finally {
		client.release();
	}
};

export default insertQuizScore;
