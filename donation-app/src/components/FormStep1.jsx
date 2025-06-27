import Input from "./Input";
import Button from "./Button";
import PageWrapper from "./PageWrapper";
import Form from "./Form";
import { Link } from 'react-router-dom';
import BoldLabel from "./BoldLabel";
import styled from "styled-components";
import Paragraph from "./Paragraph";

function FormStep1({ formData, onNext, onChange }) {


    return (
        <>
            <PageWrapper>
                <Form onSubmit={() => onNext()}>
                    <h1>New here?</h1>
                    <p>Lorem ipsum is simply dummy text of the printing and writing industry</p>
                    <Paragraph>Already have an account? <Link to='/auth/login'>Login</Link></Paragraph>
                    <BoldLabel htmlFor="orgName">Organization Name</BoldLabel>
                    <Input 
                        name = "orgName"
                        placeholder = 'Organization name here'
                        value = {formData.orgName}
                        type = 'text'
                        onChange = {(e) => onChange('orgName', e.target.value)}
                    />

                    <BoldLabel htmlFor="orgEmail">Organization Email</BoldLabel>
                    <Input 
                        name="orgEmail"
                        placeholder="Organization email here"
                        value={formData.orgEmail}
                        type = "email"
                        onChange = {(e) => onChange('orgEmail', e.target.value)}
                    />

                    <BoldLabel htmlFor="password">Password</BoldLabel>
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