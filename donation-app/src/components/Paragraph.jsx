import styled from "styled-components";

const Wrapper = styled.p `
    margin: ${30 / 16}rem 0 ${46 / 16}rem 0;
    color: hsla(0, 0%, 56%, 1);
`;

function Paragraph( { children }) {
    return <Wrapper>{ children }</Wrapper>
}

export default Paragraph;