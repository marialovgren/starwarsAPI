import StarwarsAPI from '../services/SWAPI'
import { useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getIdFromUrl } from "../helpers/index"


const Characters = () => {
    const [characters, setCharacters] = useState("")
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false) 

    // Get characters from API when component is first mounted
	useEffect(() => {
        const getCharacters = async () => {
            setLoading(true)
            const data = await StarwarsAPI.getCharacters(page)
            setCharacters(data)
            setLoading(false)
        }
		getCharacters(page)
	}, [page])

    return (
        <>
			<h2>Characters</h2>
			<Row xs={1} md={2} lg={3}>

            {loading && <h3>Loading ...</h3>}

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
                           <Button 
                                className="btn" 
                                as={Link} 
                                to={`/people/${getIdFromUrl(characters.url)}`}>
                                Read more
                            </Button>
                        </div>
                    </div>
                    
                </Col>
            ))}

			</Row>

            <Row>
                <div className="d-flex justify-content-between align-items-center mt-4 bg-dark">
                    <div className="prev">
                        <Button
                            disabled={page === 0}
                            variant="primary"
                            onClick={() => setPage(prevValue => prevValue - 1)}
                            >
                            Previous Page
                        </Button>
                    </div>  

                    {loading && <h3>Loading...</h3>}

                    <div className="page">{page + 1}</div>
                    <div className="next">
                        <Button
                            disabled={!characters.next}
                            onClick={() => setPage(prevValue => prevValue + 1)}
                            variant="primary"
                            >Next Page
                        </Button>
                    </div>
                </div>
                </Row>
		</>
  )
}

export default Characters;