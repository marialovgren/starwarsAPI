import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SWAPI from '../services/SWAPI'
import { getIdFromUrl } from "../helpers/index"
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const SingleCharacterPage = () => {
    const [character, setCharacter] = useState()
    const [films, setFilms] = useState([])
    const { id } = useParams()

    const getCharacter = async (id) => {
        const data = await SWAPI.getCharacter(id)
        setCharacter(data)
        setFilms(data.films)
    }

    useEffect(() => {
        getCharacter(id)
      }, [id])

    if (!character) {
        return <p>Loading... </p>
    }

return (
    <>
        <Row>
            <Col>
                <div className="card">
                    <div className="cardHeader"><h2>{character.name}</h2></div>
                    <div className="cardBody">
                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Gender</p>
							</Col>
							<Col className="cardColRight">
								<p>{character.gender}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Birth Year</p>
							</Col>
							<Col className="cardColRight">
								<p>{character.birth_year}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Height</p>
							</Col>
							<Col className="cardColRight">
								<p>{character.height} cm</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Mass</p>
							</Col>
							<Col className="cardColRight">
								<p>{character.mass} kg</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Hair color</p>
							</Col>
							<Col className="cardColRight">
								<p>{character.hair_color}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Skin color</p>
							</Col>
							<Col className="cardColRight">
								<p>{character.skin_color}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
								<p>Eye color</p>
							</Col>
							<Col className="cardColRight">
								<p>{character.eye_color}</p>
							</Col>
						</Row>

                        <Row className="cardRow" md={1}>
                            <Col>
                                <h2>Appears in films:</h2>
                            </Col>
                        </Row>

                        <Row className="cardRow" md={3}>
                            <Col className="cardColLeft">
                                <p>Films</p>
                            </Col>

                            <Col className="cardColRight">
                                {films.map(films => (
                                    <Link   
                                        to={`/films/${getIdFromUrl(films)}`} 
                                        key={getIdFromUrl(films)}>
                                        <li>Film {getIdFromUrl(films)}</li>
                                    </Link>
                                ))} 
                            </Col>
                        </Row>
                    </div>
                        
                    <div className='buttonWrapper'>
                        <Button className="btn" as={Link} to={'/people'}>Back</Button>
                    </div>
                </div>
            </Col>
        </Row>  
    </>
  )
}

export default SingleCharacterPage;