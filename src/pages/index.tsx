import React from "react";
import { css } from "@emotion/react";
import { Container } from "cherry-components";
import { Page } from "../components/Page";
import List from "components/List/List";
import Header from "components/Header/Header";
import Button from "components/Elements/Button/Button";
import { AddIcon } from "assets/svg/AddIcon";
import { theme } from "assets/styles/theme";
import { userData } from "constants/user.const";

function Index({ data }: any) {
	data = userData;
	return (
		<Page title="Home">
			<Container>
				<Header />
				<div
					css={(theme: any) => css`
						padding: 32px;
						background-color: ${theme.colors.primary};
						color: ${theme.colors.light};
						font-size: ${theme.sizes.h4.size.desktop};
						border-radius: 12px;
						transition: all 0.3s ease;
						min-height: 15rem;
						box-shadow: 0 4px 8px 0 ${theme.colors.primaryDark}},
							0 6px 20px 0 rgba(0, 0, 0, 0.30);
					`}
				>
					Find your beloved one from this PhoneBook
				</div>

				<div
					className="div"
					css={{ position: "relative", border: "solid black" }}
				>
					<List listTitle="List Contact" datas={data} />
					<div
						css={{
							position: "absolute",
							bottom: "1rem",
							right: "1rem",
						}}
					>
						<Button
							children={<AddIcon />}
							color={theme.colors.primaryLight}
							radius="50%"
							width="3.275rem"
							height="3.275rem"
							border="solid 1px blue"
						/>
					</div>
				</div>
			</Container>
		</Page>
	);
}

export default Index;
