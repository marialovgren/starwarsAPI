import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div className="contentWrapper">
			<h1>Welcome to the Starwars Encyclopedia!</h1>
			<div className="cardWrapper">
				<Card className="card">
					<Card.Header>Join our galaxy, you will</Card.Header>
					<Card.Body>	
						<Button className="btn" as={Link} to="/people">Characters</Button>
						<Button className="btn" as={Link} to="/films">Films</Button>
					</Card.Body>
				</Card>
			</div>
		</div>
	)
}

export default HomePage