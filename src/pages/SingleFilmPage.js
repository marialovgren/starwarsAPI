import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SWAPI from '../services/SWAPI'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const SingleFilmPage = () => {
    const [film, setFilm] = useState()
    const { id } = useParams()
    const [characters, setCharacters] = useState()

    const getFilm = async (id) => {
        const data = await SWAPI.getFilm(id)
        setFilm(data)
    }

    const getCharacters = acync () => {
        const data = await SWAPI.getCharacters(id)
        setCharacters(data)
    }

    useEffect(() => {
        getFilm(id)
      }, [id])

    useEffect(() => {
        getCharacters(id)
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
								<Card.Text><strong>Episode</strong></Card.Text>
							</Col>
							<Col md={8}>
								<Card.Text>{film.episode_id}</Card.Text>
							</Col>
						</Row>

                        <Row className="mb-3">
                            <Col md={4}>
								<Card.Text><strong>Director</strong></Card.Text>
							</Col>
							<Col md={8}>
								<Card.Text>{film.director}</Card.Text>
							</Col>
						</Row>

                        <Row className="mb-3">
							<Col md={4}>
								<Card.Text><strong>Producer</strong></Card.Text>
							</Col>
							<Col md={8}>
								<Card.Text>{film.producer}</Card.Text>
							</Col>
						</Row>

                        <Row className="mb-3">
							<Col md={4}>
								<Card.Text><strong>Release date</strong></Card.Text>
							</Col>
							<Col md={8}>
								<Card.Text>{film.release_date}</Card.Text>
							</Col>
						</Row>
                    </Card.Body>

                    <Card.Body>
                        <Card.Title>Links</Card.Title>
                        <ListGroup>
                            <ListGroup.Item>
                                
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>  
    </>
  )
}

export default SingleFilmPage;