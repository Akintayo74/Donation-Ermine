import styled from "styled-components";

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    gap: 10px;
    padding-inline: 10rem;
    padding-block: 1rem;
    
    @media (max-width: 550px) {
        padding-inline: 1rem;
    }
`

function PageWrapper({ children }) {

    return <Wrapper>{ children }</Wrapper>
}

export default PageWrapper;