import StarwarsAPI from '../services/SWAPI'
import { useState, useEffect } from 'react'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'
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
                    <div className="card"> 
                        <div className="cardHeader">
                            <h2>{films.title}</h2>
                        </div>

                        <div className="cardBody">
                            <Row>
                                Episode {films.episode_id}
                            </Row>
                            <Row>
                                Released {films.release_date}
                            </Row>
                        </div>
                        <div className='buttonWrapper'>
                            <Button className="btn" as={Link} to={`/films/${films.episode_id}`}>Read more</Button>
                        </div>
                    </div>
                </Col>
            ))}

			</Row>
		</>
  )
}

export default Films;