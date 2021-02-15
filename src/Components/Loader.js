import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	font-size: 32px;
	margin-top: 35vh;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
	<Container>
		<span role="img" aria-label="Loading">
			⏰ Loading...
		</span>
	</Container>
);
