import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div `
    padding: 2rem;
`;

const DonateButton = styled(Link)`
  background: #007bff;
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
  &:hover {
    color: yellow;
  }
`

function Home() {
    return (
        <>
            <Container>
                <h1>Welcome to the Donation Platform</h1>
                <p>Make a small difference today!</p>
                <DonateButton to='/donate'>Start donating!</DonateButton>
            </Container>
        </>
    )
}

export default Home