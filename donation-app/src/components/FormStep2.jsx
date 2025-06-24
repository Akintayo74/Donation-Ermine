import Input from "./Input";
import Button from "./Button";
import PageWrapper from "./PageWrapper";
import styled from "styled-components";
import Form from "./Form";

function FormStep2({ formData, onNext, onChange }) {

    return (
        <>
            <PageWrapper>
                <Form onSubmit={() => onNext()}>
                    <h2>Almost There!</h2>
                    <p>Lorem ipsum is simply dummy text of the printing and writing industry</p>

                    <Label>CAC or Local Government registration ID</Label>
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

const Label = styled.label `
    font-weight: var(--font-weight-semiBold);
`

export default FormStep2;