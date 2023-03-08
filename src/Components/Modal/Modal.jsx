import React from "react";
import styled from "styled-components";

const Modal = ({ indexes, nfts, closeModal }) => {
	const readData = nfts[indexes];

	return (
		<Container onClick={closeModal}>
			<Card>
				<First>
					<img src={readData?.imageUrl} />
				</First>

				<Second>
					<h3>
						{readData?.collectionName} <span>{readData?.chain}</span>
					</h3>
					<Add>{readData?.collectionAddress}</Add>
					<p>{readData?.description}</p>
					<h4>Traits</h4>

					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
						}}>
						{readData?.traits?.map((props) => (
							<div style={{ margin: "7px" }}>
								<div>{props?.value}</div>
								<div>{props?.trait_type}</div>
							</div>
						))}
					</div>
					<a href='https://opensea.io/assets'>
						<MyButton2>Purchase NFT</MyButton2>
					</a>
				</Second>
			</Card>
		</Container>
	);
};

export default Modal;

const MyButton2 = styled.button`
	width: 180px;
	height: 40px;
	border: none;
	outline: none;
	color: white;

	border-radius: 5px;
	transition: all 350ms;
	font-family: "Montserrat", sans-serif;
	font-weight: 500;
	cursor: pointer;
	margin-right: 20px;
	background-color: transparent;
	margin-top: 10px;
	background-color: #2975c4;
	@media screen and (max-width: 600px) {
		width: 150px;
	}

	:hover {
		transform: scale(0.98);
	}
`;

const Add = styled.div`
	height: 30px;
	display: flex;
	align-items: center;
	// justify-content: center;
	border-radius: 30px;
	font-size: 13px;
`;

const Second = styled.div`
	flex: 1;

	padding-left: 20px;
	color: black;

	span {
		height: 30px;
		width: 100px;
		background-color: #f7b83d;
		font-size: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30px;
		margin-left: 5px;
		color: white;
	}

	h3 {
		display: flex;
		align-items: center;
		margin-bottom: 5px;
	}
`;

const First = styled.div`
	height: 100%;
	width: 300px;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
`;

const Card = styled.div`
	height: 400px;
	width: 700px;
	background-color: white;
	border-radius: 5px;
	z-index: 999;
	display: flex;
`;

const Container = styled.div`
	width: calc(100vw);
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(116, 46, 157, 0.3);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
	/* border-radius: 10px; */
	border: 1px solid rgba(255, 255, 255, 0.18);
	z-index: 20;
	position: fixed;
	top: 0;
	right: 0;
`;
