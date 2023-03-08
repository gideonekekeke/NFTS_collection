import React from "react";
import styled from "styled-components";

const Cards = ({ props, handleShowModal, i }) => {
	return (
		<Container
			onClick={() => {
				handleShowModal(i);
			}}>
			<Wrapper>
				<Card>
					<IconHold>
						<Icon src={props?.imageUrl} />
					</IconHold>
					<Title>{props?.collectionName}</Title>
					<Cont>{props?.description}</Cont>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default Cards;

const Wrapper = styled.div`
	display: flex;
`;

const Icon = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;

	/* margin-top: 70px; */
`;

const IconHold = styled.div`
	height: 50px;
	width: 50px;

	border-radius: 50%;
	background-color: #eceeff;
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
		rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	margin-bottom: 20px;

	padding: 20px;
`;
const Cont = styled.div`
	color: #949494;
`;
const Title = styled.div`
	margin-bottom: 5px;
	color: #f7b83d;
	font-weight: bold;
`;
const Card = styled.div`
	height: 200px;
	width: 180px;
	padding: 20px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
	transition: all 350ms;
	margin: 10px;
	overflow: hidden;

	border-radius: 10px;
	background-color: white;
	border: 1px solid black;
	:hover {
		transform: scale(0.99);
	}

	@media screen and (max-width: 600px) {
		width: 99%;
	}
`;

const Container = styled.div`
	display: flex;
`;
