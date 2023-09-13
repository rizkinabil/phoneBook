import React from "react";

import { useSearchParams } from "next/navigation";
import Header from "components/Header/Header";
import UserPage from "components/Page/User/UserPage";
import { Container } from "cherry-components";

// type Props = {}

const contact = () => {
	const searchParams = useSearchParams();
	return (
		<Container>
			<Header />
			<UserPage />
			<h1>{searchParams.get("id")}</h1>
		</Container>
	);
};

export default contact;
