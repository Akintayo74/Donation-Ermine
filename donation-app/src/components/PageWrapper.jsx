import styled from "styled-components";
import PlantImage from './PlantImage';

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

    @media (min-width: 1000px) {
        background: linear-gradient(to right, white 66%, hsla(238, 50%, 22%, 1) 33%);
    }
`

function PageWrapper({ children }) {

    return (
        <Wrapper>
            <PlantImage />
            { children }
        </Wrapper>
    )
}

export default PageWrapper;