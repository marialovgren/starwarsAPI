import StarwarsAPI from '../services/SWAPI'
import { useState, useEffect } from 'react'
import { Card, ListGroup, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Films = () => {
    const [films, setFilms] = useState("")

    // Get films from API
	const getFilms = async () => {
		const data = await StarwarsAPI.getFilms()
		setFilms(data)
	}

    // Get films from API when component is first mounted
	useEffect(() => {
		getFilms()
	}, [])


    return (
        <>
			<h1>Films</h1>
			<Row xs={1} md={2} lg={3}>

            {films && films.results.map((films) => (
                <Col>
                    <Card className="card"> 
                        <Card.Header>{films.title}</Card.Header>
                        <ListGroup>
                            <ListGroup.Item>
                                Episode {films.episode_id}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Released {films.release_date}
                            </ListGroup.Item>
                        </ListGroup>

                        <Card.Body>
                            <Button className="btn" as={Link} to={`/films/${films.episode_id}`}>Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

			</Row>
		</>
  )
}

export default Films;