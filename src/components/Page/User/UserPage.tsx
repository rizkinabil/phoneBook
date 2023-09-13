import { UserLogo } from "assets/svg/UserLogo";
import React from "react";
import { UserPageStyle } from "./UserPage.style";

type Props = {};

const UserPage = (props: Props) => {
	const userPageStyle = UserPageStyle;
	return (
		<>
			<div className="topSectionUser" css={userPageStyle.top}>
				<UserLogo />
				<h1>Nama User</h1>
			</div>

			<div className="bodySectionUser">
				<ul>
					<li>
						<h3>Primary number</h3>
					</li>
					<li>
						<h3>Additional number</h3>
					</li>
				</ul>
			</div>
		</>
	);
};

export default UserPage;
