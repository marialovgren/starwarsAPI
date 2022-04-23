import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<>
			<h1>Welcome to Starwars Encyklopedi!</h1>

			<Button variant="primary" as={Link} to="/search">Click here to enter</Button>
		</>
	)
}

export default HomePage