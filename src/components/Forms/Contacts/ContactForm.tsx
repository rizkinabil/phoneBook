import React from "react";
import { css } from "@emotion/react";

const ContactForm = () => {
	return (
		<>
			<h3>State.action Contact</h3>
			<div
				css={{
					display: "grid",
					gridColumn: "1",
				}}
			>
				<label htmlFor="name">Name</label>
				<input type="text" />
				<label htmlFor="phoneNumber">Phone Number</label>
				<input type="number" />
			</div>
		</>
	);
};

export default ContactForm;
