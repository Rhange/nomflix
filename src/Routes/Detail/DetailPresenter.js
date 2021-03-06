import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";

const Container = styled.div`
	height: calc(100vh - 50px);
	width: 100%;
	position: relative;
	padding: 50px;
`;

const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	filter: blur(2px);
	opacity: 0.5;
	z-index: 0;
`;

const Content = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 1;
	@media only screen and (min-width: 320px) and (max-width: 600px) {
		flex-direction: column;
	}
`;

const Cover = styled.div`
	width: 30%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	border-radius: 10px;
	@media only screen and (min-width: 320px) and (max-width: 600px) {
		width: 100%;
		margin-bottom: 30px;
	}
`;

const Data = styled.div`
	width: 70%;
	margin-left: 20px;
	@media only screen and (min-width: 320px) and (max-width: 600px) {
		width: 100%;
	}
`;

const Title = styled.h2`
	font-size: 32px;
	margin-bottom: 20px;
`;

const ItemContainer = styled.div`
	margin: 20px 0px;
`;

const Item = styled.span``;

const Divider = styled.span`
	margin: 0 10px;
`;

const Overview = styled.p`
	font-size: 16px;
	opacity: 0.7;
	line-height: 1.5;
	width: 60vw;
	@media only screen and (min-width: 320px) and (max-width: 600px) {
		width: 90%;
	}
`;

const DetailPresenter = ({ result, loading, error }) =>
	loading ? (
		<>
			<Helmet>
				<title>Loading | Nomflix</title>
			</Helmet>
			<Loader />
		</>
	) : (
		<Container>
			<Helmet>
				<title>{result.title ? result.title : result.name} | Nomflix</title>
			</Helmet>
			<Backdrop
				bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
			/>
			<Content>
				<Cover
					bgImage={
						result.poster_path
							? `https://image.tmdb.org/t/p/original${result.poster_path}`
							: require("../../assets/noPosterSmall.png")
					}
				/>
				<Data>
					<Title>{result.title ? result.title : result.name}</Title>
					<ItemContainer>
						<Item>
							{result.release_date
								? result.release_date.substring(0, 4)
								: result.first_air_date.substring(0, 4)}
						</Item>
						<Divider>
							<span role="img" aria-label="divider">
								{" "}
								🔹{" "}
							</span>
						</Divider>
						<Item>
							{result.runtime ? result.runtime : result.episode_run_time[0]} min
						</Item>
						<Divider>
							<span role="img" aria-label="divider">
								{" "}
								🔹{" "}
							</span>
						</Divider>
						<Item>
							{result.genres &&
								result.genres.map((genre, index) =>
									index === result.genres.length - 1
										? genre.name
										: `${genre.name} / `
								)}
						</Item>
					</ItemContainer>
					<Overview>{result.overview}</Overview>
				</Data>
			</Content>
		</Container>
	);

DetailPresenter.propTypes = {
	result: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default DetailPresenter;
