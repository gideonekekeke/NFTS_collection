import { useEffect, useState } from "react";
import { JsonRpcProvider } from "ethers";
import Hero from "./Components/Hero";
import Header from "./Components/Header/Header";
import SearchComp from "./Components/SearchComp";
import Cards from "./Components/Cards/Cards";
import styled from "styled-components";
import Modal from "./Components/Modal/Modal";

function App() {
	//State variables
	const [nfts, setNFTs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [show, setShow] = useState(false);
	const [indexes, setIndexes] = useState(-1);
	const [address, setAddress] = useState(
		"0xaAdBA140Ae5e4c8a9eF0Cc86EA3124b446e3E46A",
	);

	//function to fetch nfts by collection
	const fetchCollection = async () => {
		const provider = new JsonRpcProvider(
			"https://icy-tame-log.discover.quiknode.pro/a18763d684c23b226c2b39c752d761fdb6102b55/",
		);
		const collection = await provider.send("qn_fetchNFTsByCollection", {
			collection: address,
			page: 1,
			perPage: 10,
		});
		return collection;
	};

	const handleShowModal = (i) => {
		setShow(!show, i);
		setIndexes(i);
	};

	const closeModal = () => {
		setShow(!show);
	};

	//useEffect renders every time address is set
	useEffect(() => {
		fetchCollection()
			.then((data) => {
				setNFTs(data.tokens);
				setIsLoading(false);
				// console.log(data);
			})
			.catch((err) => setNFTs([]));
	}, [address]);

	//jsx containing our conditional rendering
	return (
		<div className='container mx-auto'>
			<Header />
			<Hero />
			<SearchComp setAddress={setAddress} />
			<DivStyle>
				{nfts.map((props, i) => (
					<Cards
						handleShowModal={handleShowModal}
						key={props.id}
						i={i}
						props={props}
					/>
				))}
			</DivStyle>

			{show ? (
				<Modal closeModal={closeModal} indexes={indexes} nfts={nfts} />
			) : null}

			{!isLoading && nfts.length === 0 && (
				<h1
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					No Collection Found
				</h1>
			)}

			{isLoading && (
				<h1
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					Loading...
				</h1>
			)}
		</div>
	);
}

export default App;

const DivStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
