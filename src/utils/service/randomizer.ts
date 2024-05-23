type ArgsT = {
	min: number;
	max: number;
};

export const randomizer = ({ min, max }: ArgsT) => {
	return Math.round(Math.random() * (max - min) + min);
};
