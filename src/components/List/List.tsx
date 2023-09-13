import { css } from "@emotion/react";
import { Breakpoints, mq } from "assets/styles/mq";
import { theme } from "assets/styles/theme";
import Button from "components/Elements/Button/Button";
import Link from "next/link";
import React from "react";
import { listStyle } from "./List.style";

interface IProps {
	listTitle: string;
	datas: any;
}

const List = ({ listTitle, datas }: IProps) => {
	return (
		<>
			<div css={listStyle.topSection}>
				<h3>{listTitle}</h3>
				<div css={{ float: "right", position: "absolute", right: "0" }}>
					<form>
						<div className="searchIcon"></div>
						<input type="search" />
						<button type="submit">Search</button>
					</form>
				</div>
			</div>
			<div css={listStyle.wrapper}>
				{datas.map((item, index) => {
					return (
						<Link
							href={item.next}
							key={index}
							css={listStyle.elementList}
						>
							<Button
								height="50px"
								width="full-width"
								color={`${theme.colors.secondaryLight}`}
								border="solid"
								radius="10px"
							>
								<div css={listStyle.content}>
									<span>
										{item.firstName + " " + item.lastName}
									</span>
									<span
										css={{
											fontSize: "14px",
											color: "black",
											border: "solid 1px black",
										}}
									>
										{item.child.map((childItem) => {
											return (
												<span>{childItem.number}</span>
											);
										})}
									</span>
								</div>
							</Button>
						</Link>
					);
				})}
			</div>
			<div css={listStyle.pagination}>
				<span>
					Showing <span>1</span> to <span>10</span> of{" "}
					<span>Entries</span>
				</span>
				<div>
					<button>Prev</button>
					<button>Next</button>
				</div>
			</div>
		</>
	);
};

export default List;
