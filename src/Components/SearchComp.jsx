import React from "react";
import styled from "styled-components";

const SearchComp = ({ setAddress }) => {
	return (
		<div>
			<Hold>
				<Tit>Make a Search Now?</Tit>
				<Desc>
					<input
						onChange={(e) => {
							setAddress(e.target.value);
						}}
						searchText={(text) => setAddress(text)}
						placeholder='Enter Wallet Address...eg.0x757'
					/>
				</Desc>
			</Hold>
		</div>
	);
};

export default SearchComp;

const Hold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
	margin-bottom: 30px;
`;

const Tit = styled.div`
	font-size: 40px;
	font-weight: bold;
	color: white;
	margin-bottom: 10px;

	@media screen and (max-width: 600px) {
		font-size: 25px;
	}
`;
const Desc = styled.div`
	color: white;

	@media screen and (min-width: 300px) and (max-width: 500px) {
		width: 97%;
	}

	input {
		width: 500px;
		height: 40px;
		background-color: transparent;
		border: 1px solid silver;
		outline: none;
		padding-left: 10px;
		border-radius: 30px;
		color: white;

		@media screen and (min-width: 300px) and (max-width: 500px) {
			width: 97%;
		}
	}
`;
