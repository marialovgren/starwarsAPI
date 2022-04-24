import StarwarsAPI from '../services/SWAPI'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'react-bootstrap/Link'
import Button from 'react-bootstrap/Button'

const Films = () => {
    const [films, setFilms] = useState("")

    // Get films from API
	const getFilms = async () => {
		const data = await StarwarsAPI.getFilms()
		setFilms(data)
        console.log(data.results)
        console.log(data)
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
                                Eposode {films.episode_id}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Released {films.release_date}
                            </ListGroup.Item>
                        </ListGroup>

                        <Card.Body>
                        <Button className="btn" as={Link} to="/films/:id">Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

			</Row>
		</>
  )
}

export default Films;