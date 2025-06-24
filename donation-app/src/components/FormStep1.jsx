import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";

function FormStep1({ formData, onNext, onChange }) {

    function handleSubmit(event) {
        event.preventDefault();
        onNext();
    }

    return (
        <>
            <Wrapper onSubmit={handleSubmit}>
                <label for="orgName">Organization Name</label>
                <Input 
                    name = "orgName"
                    placeholder = 'Organization name here'
                    value = {formData.orgName}
                    type = 'text'
                    onChange = {(e) => onChange('orgName', e.target.value)}
                />

                <label for="orgEmail">Organization Email</label>
                <Input 
                    name="orgEmail"
                    placeholder="Organization email here"
                    value={formData.orgEmail}
                    type = "email"
                    onChange = {(e) => onChange('orgEmail', e.target.value)}
                />

                <label>Password</label>
                <Input 
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    type="password"
                    onChange={(e) => onChange('password', e.target.value)}
                />

                <Button>Next Step</Button>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.form `
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;

    & > Input {
        margin-bottom: 10px;
    }
`;



export default FormStep1;