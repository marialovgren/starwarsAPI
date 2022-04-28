import StarwarsAPI from '../services/SWAPI'
import { useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getIdFromUrl } from "../helpers/index"


const Characters = () => {
    const [characters, setCharacters] = useState("")

    // Get characters from API
	const getCharacters = async () => {
		const data = await StarwarsAPI.getCharacters()
		setCharacters(data)
	}

    // Get characters from API when component is first mounted
	useEffect(() => {
		getCharacters()
	}, [])

    if (!characters) {
        return <p>Loading... </p>
    }


    return (
        <>
			<h2>Characters</h2>
			<Row xs={1} md={2} lg={3}>

            {characters && characters.results.map((characters) => (
                <Col>
                    <div className="card"> 
                        <div className="cardHeader">
                            <h3>{characters.name}</h3>
                        </div>

                        <div className="cardBody">
                            <Row>
                                Gender {characters.gender}
                            </Row>
                            <Row>
                                Born {characters.birth_year}
                            </Row>
                            <Row>
                                In {characters.films.length} films
                            </Row>
                        </div>
                        <div className='buttonWrapper'>
                           <Button className="btn" as={Link} to={`/people/${getIdFromUrl(characters.url)}`}>Read more</Button>
                        </div>
                    </div>
                </Col>
            ))}

			</Row>
		</>
  )
}

export default Characters;