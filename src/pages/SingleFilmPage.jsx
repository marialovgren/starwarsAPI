import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SWAPI from '../services/SWAPI'
import { getIdFromUrl } from "../helpers/index"
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const SingleFilmPage = () => {
    const [film, setFilm] = useState()
    const { id } = useParams()
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const getFilm = async () => {
            const data = await SWAPI.getFilm(id)
            setFilm(data)
            setCharacters(data.characters)
        }
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
                    <div className="cardHeader"><h2>{film.title}</h2></div>
                    <div className="cardBody">
                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Episode</p>
							</Col>
							<Col className="cardColRight">
								<p>{film.episode_id}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Director</p>
							</Col>
							<Col className="cardColRight">
								<p>{film.director}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Producer</p>
							</Col>
							<Col className="cardColRight">
								<p>{film.producer}</p>
							</Col>
						</Row>

                        <Row className="cardRow"  md={3}>
                            <Col className="cardColLeft">
								<p>Release date</p>
							</Col>
							<Col className="cardColRight">
								<p>{film.release_date}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={1}>
                            <Col>
                                <h2>Characters in this film:</h2>
                            </Col>
                        </Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
                                <p>Characters</p>
                            </Col>

                            <Col className="cardColRight">
                                {characters.map(character => (
                                    <Link to={`/people/${getIdFromUrl(character)}`} key={character}>
                                        <li>Character {getIdFromUrl(character)}</li>
                                    </Link>
                                ))} 
                            </Col>
                        </Row>
                    </div>
                        
                    <div className='buttonWrapper'>
                        <Button className="btn" as={Link} to={'/films'}>Back</Button>
                    </div>
                </div>
            </Col>
        </Row>  
    </>
  )
}

export default SingleFilmPage;