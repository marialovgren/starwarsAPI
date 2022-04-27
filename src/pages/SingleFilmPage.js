import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SWAPI from '../services/SWAPI'
import { getIdFromUrl } from "../helpers/index"
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const SingleFilmPage = () => {
    const [film, setFilm] = useState()
    const { id } = useParams()
    const [characters, setCharacters] = useState([])

    const getFilm = async () => {
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
                <div className="card">
                    <div className="cardHeader">{film.title}</div>
                    <div className="cardBody">
                        <Row className="mb-3">Attributes</Row>
                        <Row>
                            <Col md={4}>
								<h3>Episode</h3>
							</Col>
							<Col md={8}>
								<p>{film.episode_id}</p>
							</Col>
						</Row>

                        <Row>
                            <Col md={4}>
								<h3>Director</h3>
							</Col>
							<Col md={8}>
								<p>{film.director}</p>
							</Col>
						</Row>

                        <Row>
							<Col md={4}>
								<h3>Producer</h3>
							</Col>
							<Col md={8}>
								<p>{film.producer}</p>
							</Col>
						</Row>

                        <Row>
							<Col md={4}>
								<h3>Release date</h3>
							</Col>
							<Col md={8}>
								<p>{film.release_date}</p>
							</Col>
						</Row>
                    </div>

                    <Row className="mb-3">Links</Row>
                        <Row>
							<Col md={4}>
								<h3>Characters</h3>
							</Col>

							<Col md={8}>
                                {characters.map(character => (
                                    <Link to={`/people/${getIdFromUrl(character)}`} key={character}>
                                        <li>Character {getIdFromUrl(character)}</li>
                                    </Link>
                                ))} 
							</Col>
						</Row>
                        
                    <div className='buttonWrapper'>
                        <Button variant="success" to={'/films'}>Back</Button>
                    </div>
                </div>
            </Col>
        </Row>  
    </>
  )
}

export default SingleFilmPage;