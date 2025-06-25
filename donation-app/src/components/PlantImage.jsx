import styled from "styled-components";
import plant from '../assets/plant.png';

const Wrapper = styled.div `
    display: none;
    @media (min-width: 1200px) {
        display: revert;
        position: fixed;
        top: 80px;
        right: 100px;
        z-index: 1;
        width: 450px;
    }  
`;

function PlantImage() {

    return (
        <>
            <Wrapper>
                <img 
                    src={plant}
                    alt='decorative plant'
                />
            </Wrapper>
        </>
        
    )
}

export default PlantImage;