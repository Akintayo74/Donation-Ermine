import styled from "styled-components";

const StyledButton = styled.button`
    max-width: 400px;
    width: 100%;
    background-color: hsla(238, 50%, 22%, 1);
    border: none;
    padding: 20px 0;
    color: hsla(0, 0%, 100%, 1);
    font-size: var(--font-size-medium);

`

function Button({children}) {
    return (
        <>
            <StyledButton>{children}</StyledButton>
        </>
    )
}

export default Button