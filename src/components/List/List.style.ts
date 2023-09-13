import { css } from "@emotion/react";
import { Breakpoints, mq } from "assets/styles/mq";

const listStyle = {
	wrapper: css({
		marginTop: "1rem",
		maxHeight: "17rem",
		overflowY: "scroll",

		[mq(Breakpoints.md)]: {
			maxHeight: "10rem",
		},

		[mq(Breakpoints.lg)]: {
			maxHeight: "15rem",
		},
	}),
	elementList: css({
		display: "grid",
		gridColumn: "1",
		marginBottom: "0.75rem",
	}),
	topSection: css({
		position: "relative",
		display: "flex",
		alignItems: "center",
		marginTop: "2rem",
	}),
	content: css({
		marginBottom: "1rem",
		display: "grid",
		gridTemplateRows: "2",
	}),
	pagination: css({
		textAlign: "center",
		marginTop: "2rem",
	}),
};

export { listStyle };
