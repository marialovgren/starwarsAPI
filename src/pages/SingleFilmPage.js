import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SWAPI from '../services/SWAPI'
import { getIdFromUrl } from "../helpers"
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap'


const SingleFilmPage = () => {
    const [film, setFilm] = useState()
    const { id } = useParams()
    const [characters, setCharacters] = useState([])

    const getFilm = async (id) => {
        const data = await SWAPI.getFilm(id)
        setFilm(data)
        setCharacters(data.characters)
    }

    useEffect(() => {
        getFilm(id)
      }, [id])

    if (!film) {
        return <p>Loading... </p>
    }

return (
    <>
        <Row>
            <Col>
                <Card className="card">
                    <Card.Header>{film.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>Attributes</Card.Title>
                        <Row className="mb-3">
                            <Col md={4}>
								<Card.Text>Episode</Card.Text>
							</Col>
							<Col md={8}>
								<Card.Text>{film.episode_id}</Card.Text>
							</Col>
						</Row>

                        <Row className="mb-3">
                            <Col md={4}>
								<Card.Text>Director</Card.Text>
							</Col>
							<Col md={8}>
								<Card.Text>{film.director}</Card.Text>
							</Col>
						</Row>

                        <Row className="mb-3">
							<Col md={4}>
								<Card.Text>Producer</Card.Text>
							</Col>
							<Col md={8}>
								<Card.Text>{film.producer}</Card.Text>
							</Col>
						</Row>

                        <Row className="mb-3">
							<Col md={4}>
								<Card.Text>Release date</Card.Text>
							</Col>
							<Col md={8}>
								<Card.Text>{film.release_date}</Card.Text>
							</Col>
						</Row>
                    </Card.Body>

                    <Card.Body>
                        <Card.Title>Links</Card.Title>
                        <Row className="mb-3">
							<Col md={4}>
								<Card.Text>Characters</Card.Text>
							</Col>

							<Col md={8}>
                                {characters.map((characters, index) => (
                                    <ListGroup key={index}>
                                        <ListGroup.Item
                                           
                                            variant="link"
                                            key={characters.id}
                                            to={`/people/${characters.id}`}>
                                                Character {getIdFromUrl(characters)}
                                        </ListGroup.Item>
                    
                                    </ListGroup>
                                ))} 
							</Col>
						</Row>

                        <Button variant="success" to={'/films'}>Back</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>  
    </>
  )
}

export default SingleFilmPage;