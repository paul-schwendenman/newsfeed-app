const dayjs = jest.fn().mockImplementation(() => ({
	fromNow: () => {
		return "2 days ago"
	},
}));

dayjs.extend = jest.fn()

export default dayjs;
