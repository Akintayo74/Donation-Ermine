import Input from "./Input";
import Button from "./Button";

function FormStep1({ formData, onNext, onChange }) {

    function handleSubmit(event) {
        event.preventDefault();
        onNext();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input 
                    name = "orgName"
                    placeholder = 'Organization name here'
                    value = {formData.orgName}
                    type = 'text'
                    onChange = {(event) => onChange('orgName', event.target.value)}
                />

                <Button>Next Step</Button>
            </form>
        </>
    )
}

export default FormStep1;