import Input from "./Input";
import Button from "./Button";
import PageWrapper from "./PageWrapper";
import styled from "styled-components";
import Form from "./Form";
import BoldLabel from "./BoldLabel";
import Paragraph from "./Paragraph";

function FormStep2({ formData, onNext, onChange }) {

    return (
        <>
            <PageWrapper>
                <Form onSubmit={() => onNext()}>
                    <h2>Almost There!</h2>
                    <Paragraph>Lorem ipsum is simply dummy text of the printing and writing industry</Paragraph>

                    <BoldLabel htmlFor="id">CAC or Local Government registration ID</BoldLabel>
                    <Input 
                        name = "id"
                        placeholder = 'Organization ID here'
                        value = {formData.id}
                        type = 'text'
                        onChange = {(event) => onChange('id', event.target.value)}
                    />

                    <BoldLabel>Organization Mobile Number</BoldLabel>
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



export default FormStep2;