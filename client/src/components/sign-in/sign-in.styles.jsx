import styled from "styled-components";

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    .title {
        margin: 10px 0;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;