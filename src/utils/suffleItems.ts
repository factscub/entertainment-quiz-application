/**
 * Shuffles the elements of an array randomly.
 */

const suffleItems = (array: string[]) => {
	return array.sort(() => Math.random() - 0.5);
};

export default suffleItems;
