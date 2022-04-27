import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<>
			<h1>Welcome to the Starwars Encyclopedia!</h1>
			<div className="card">
				<div className='cardHeader'>
					<h2>Join our galaxy, you will</h2>
				</div>
				<>	
					<Button className="btn" as={Link} to="/people">Characters</Button>
					<Button className="btn" as={Link} to="/films">Films</Button>
				</>
			</div>
		</>
	)
}

export default HomePage