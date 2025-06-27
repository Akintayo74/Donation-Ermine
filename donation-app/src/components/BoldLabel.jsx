import styled from "styled-components";

const Label = styled.label `
    font-weight: var(--font-weight-semiBold);
`

function BoldLabel ({ children }) {

    return <Label>{ children }</Label>
}

export default BoldLabel;