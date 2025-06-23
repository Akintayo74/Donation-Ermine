import styled from "styled-components";

const StyledButton = styled.button`
    background-color: hsla(238, 50%, 22%, 1);
    border: none;
    padding: 20px;
    color: hsla(0, 0%, 100%, 1);

`

function Button({children}) {
    return (
        <>
            <StyledButton>{children}</StyledButton>
        </>
    )
}

export default Button