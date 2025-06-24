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

                    <Label htmlFor="id">CAC or Local Government registration ID</Label>
                    <Input 
                        name = "id"
                        placeholder = 'Organization ID here'
                        value = {formData.id}
                        type = 'text'
                        onChange = {(event) => onChange('id', event.target.value)}
                    />

                    <Label>Organization Mobile Number</Label>
                    <Input 
                        name = "orgNumber"
                        placeholder = "Organization Mobile Number here"
                        value = {formData.orgNumber}
                        type = 'tel'
                        onChange={(e) => onChange('orgNumber', e.target.value)}
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