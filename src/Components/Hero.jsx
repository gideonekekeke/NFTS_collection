import styled from "styled-components";
import pic from "./img/hero.png";

const Hero = () => {
	return (
		<Container>
			<Wrapper>
				<First>
					<Title>
						Buy and Sell
						<br />
						Digital art, NFT <br /> Collection.
					</Title>
					<Cont>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn't anything embarrassing hidden
					</Cont>
					<ButtonHold>
						<MyButton>Get Started</MyButton>

						<MyButton2>Contact Us</MyButton2>
					</ButtonHold>
				</First>
				<Second>
					<HeroImage src={pic} />
				</Second>
			</Wrapper>

			<br />
			<br />
		</Container>
	);
};

export default Hero;

const SupImage = styled.img`
	width: 120px;

	margin-right: 30px;
	margin-left: 30px;

	@media screen and (max-width: 960px) {
		width: 70px;
	}
`;
const Supporers = styled.div`
	/* margin-top: 50px; */
	display: flex;
	overflow-x: scroll;
	justify-content: center;
	align-items: center;
	width: 100%;
	::-webkit-scrollbar {
		width: 0;
	}
	@media screen and (max-width: 980px) {
		justify-content: flex-start;
		align-items: flex-start;
		margin-top: 30px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
	color: white;
	/* align-items: center; */
	/* background-color: #f8f8ff; */

	@media screen and (max-width: 1300px) {
		flex-wrap: wrap;
		flex-direction: column-reverse;
	}
`;

const HeroImage = styled.img``;

const First = styled.div`
	margin-left: 70px;

	@media screen and (max-width: 960px) {
		margin-left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		width: 100%;
	}
`;
const Second = styled.div`
	margin-right: 70px;
	width: 500px;

	@media screen and (max-width: 1300px) {
		width: 100%;
		margin-right: 0;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
`;
const Cont = styled.div`
	width: 500px;
	color: white;

	@media screen and (max-width: 960px) {
		width: 90%;
	}
`;
const Title = styled.h1`
	font-size: 45px;
	color: white;
	font-weight: bolder;
	min-height: 70px;
	margin-bottom: 7px;
	max-width: 500px;

	@media screen and (max-width: 790px) {
		font-size: 35px;
		max-width: 95%;
	}
`;

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
const MyButton = styled.button`
	width: 180px;
	height: 40px;
	border: none;
	outline: none;
	color: black;
	background-color: white;
	border-radius: 5px;
	transition: all 350ms;
	font-family: "Montserrat", sans-serif;
	font-weight: 500;
	cursor: pointer;
	margin-right: 20px;

	:hover {
		transform: scale(0.98);
	}

	@media screen and (max-width: 600px) {
		width: 150px;
	}
`;
const ButtonHold = styled.div`
	width: 100%;
	margin-top: 20px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10px;
	/* background-color: #f8f8ff; */
	flex-direction: column;
	color: white;

	@media screen and (max-width: 1300px) {
	}
	/* align-items: center; */
`;
