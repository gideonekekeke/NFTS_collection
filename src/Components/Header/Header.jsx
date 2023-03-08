import React, { useEffect } from "react";
import styled from "styled-components";
import pic from "../img/log.png";
const Header = () => {
	return (
		<Container>
			<Logo src={pic} />
			<NavHolder>
				<Nav>Home</Nav>
				<Nav>About Us</Nav>
				<Nav>Services</Nav>
				<Nav>Contact Us</Nav>
			</NavHolder>
			<ButtonHold>
				<MyButton2>Login</MyButton2>
			</ButtonHold>
		</Container>
	);
};

export default Header;

const MyButton2 = styled.button`
	width: 180px;
	height: 40px;
	border: none;
	outline: none;
	color: #f7b83d;
	border: 1px solid #f7b83d;
	border-radius: 5px;
	transition: all 350ms;
	font-family: "Montserrat", sans-serif;
	font-weight: 500;
	cursor: pointer;
	margin-right: 20px;
	background-color: transparent;

	@media screen and (max-width: 600px) {
		width: 150px;
	}

	:hover {
		transform: scale(0.98);
	}
`;

const ButtonHold = styled.div`
	margin-right: 70px;
	text-decoration: none;

	@media screen and (max-width: 790px) {
		display: none;
	}
`;

const Logo = styled.img`
	width: 130px;

	height: 40px;
	margin-left: 70px;
	object-fit: contain;
	/* background-color: red; */

	@media screen and (max-width: 790px) {
		margin-left: 30px;
	}
`;
const NavHolder = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 790px) {
		margin-right: 10px;
		display: none;
	}
`;
const Nav = styled.div`
	margin-right: 25px;
	margin-left: 25px;
	color: #f1f1f1;
	cursor: pointer;

	transition: all 350ms;
	:hover {
		transform: scale(0.98);
		text-decoration: underline;
	}
`;

const Container = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
`;
