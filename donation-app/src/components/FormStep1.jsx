import Input from "./Input";
import Button from "./Button";
import PageWrapper from "./PageWrapper";
import Form from "./Form";
import { Link } from 'react-router-dom';

function FormStep1({ formData, onNext, onChange }) {


    return (
        <>
            <PageWrapper>
                <Form onSubmit={() => onNext()}>
                    <h1>New here?</h1>
                    <p>Lorem ipsum is simply dummy text of the printing and writing industry</p>
                    <p>Already have an account? <Link to='/auth/login'>Login</Link></p>
                    <label htmlFor="orgName">Organization Name</label>
                    <Input 
                        name = "orgName"
                        placeholder = 'Organization name here'
                        value = {formData.orgName}
                        type = 'text'
                        onChange = {(e) => onChange('orgName', e.target.value)}
                    />

                    <label htmlFor="orgEmail">Organization Email</label>
                    <Input 
                        name="orgEmail"
                        placeholder="Organization email here"
                        value={formData.orgEmail}
                        type = "email"
                        onChange = {(e) => onChange('orgEmail', e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <Input 
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        type="password"
                        onChange={(e) => onChange('password', e.target.value)}
                    />

                    <Button>Next Step</Button>
                </Form>
                
            </PageWrapper>
        </>
    )
}


export default FormStep1;