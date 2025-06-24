import Input from "./Input";
import Button from "./Button";
import PageWrapper from "./PageWrapper";
import styled from "styled-components";

function FormStep2({ formData, onNext, onChange }) {

    function handleSubmit(event) {
        event.preventDefault();
        onNext();
    }

    return (
        <>
            <PageWrapper>
                <Form onSubmit={handleSubmit}>
                    <h2>Almost There!</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and writing industry</p>
                    <Input 
                        name = "orgName"
                        placeholder = 'Organization name here'
                        value = {formData.orgName}
                        type = 'text'
                        onChange = {(event) => onChange('orgName', event.target.value)}
                    />

                    <Button>Next Step</Button>
                </Form>
            </PageWrapper>
        </>
    )
}

const Form = styled.form `
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export default FormStep2;