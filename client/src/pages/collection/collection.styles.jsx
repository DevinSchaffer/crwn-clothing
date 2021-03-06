import styled from "styled-components";

export const CollectionPageContainer = styled.div`
    display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CollectionTitle = styled.h2`
    font-size: 28px;
	margin: 0 10px 30px;
`;

export const CollectionItemsContainer = styled.div`
    display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;

	& > div {
		margin-bottom: 20px;
	}

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`;