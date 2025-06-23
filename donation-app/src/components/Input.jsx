import styled from "styled-components";

const InputSection = styled.input `
    max-width: 400px;
    width: 100%;
    border-radius: 6px;
    padding: 21px 16px;
    background-color: hsla(0, 0%, 100%, 1);
    font-size: var(--font-size-normal);
    border: 0.6px solid hsla(0, 0%, 56%, 1);
    color: hsla(0, 0%, 56%, 1);
`;

function Input({ placeholder, }) {
    
    return ( 
        <>
            <InputSection 
                placeholder={placeholder}

            />
        </>
    )
}

export default Input;