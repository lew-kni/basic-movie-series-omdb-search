export const determineType = (categoryUrl: String) => {
	if (!categoryUrl) {
		return 'movie';
	}

	switch (categoryUrl) {
		case 'movie':
			return 'movie';
		case 'series':
			return 'series';
		default:
			return 'movie';
	}
};
export const determineCategory = (category: string) => {
	if (!category) {
		return;
	}

	const cat = category;

	return {
		url: cat,
		friendly: cat.replace(/-/g, ' '),
	};
};

export const isEven = (num: number) => {
	return num % 2 === 0;
};
