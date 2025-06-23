import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/Button';
import Input from '../components/Input';

const Container = styled.div `
    padding: 2rem;
`;


function Home() {
    return (
        <>
            <Container>
                <h1>Welcome to the Donation Platform</h1>
                <p>Make a small difference today!</p>
                <Input />
                <Button to='/donate'>Start donating!</Button>
            </Container>
        </>
    )
}

export default Home