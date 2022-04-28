import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<>
			<h1>Welcome to the Starwars Encyclopedia!</h1>
			<div className="card">
				<div className='cardHeader'>
					<h3>Join our galaxy, you will</h3>
				</div>
				<div className='buttonWrapper'>
                    <Button className="btn" as={Link} to="/people">Characters</Button>
					<Button className="btn" as={Link} to="/films">Films</Button>
                </div>
			</div>
		</>
	)
}

export default HomePage