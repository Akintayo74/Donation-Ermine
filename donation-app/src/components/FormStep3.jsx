import Input from "./Input";
import Button from "./Button";
import Form from "./Form";
import PageWrapper from "./PageWrapper";
import BoldLabel from "./BoldLabel";

function FormStep3({ formData, onNext, onChange }) {


    return (
        <>
            <PageWrapper>
                <Form onSubmit={() => onNext()}>
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

export default FormStep3;