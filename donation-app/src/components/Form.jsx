import styled from "styled-components";

const FormWrapper = styled.form `
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;

    & > Input {
        margin-bottom: 10px;
    }
`


function Form({ children, onSubmit}) {

    function handleSubmit(event) {
        event.preventDefault();
        if(onSubmit){
            onSubmit(event)
        }
    }

    return <FormWrapper onSubmit={handleSubmit}>{ children }</FormWrapper>
}


export default Form;