import StarwarsAPI from '../services/SWAPI'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

const Films = () => {
    const [films, setFilms] = useState([])

    // Get films from API
	const getFilms = async () => {
		const data = await StarwarsAPI.getFilms()
		setFilms(data)
      
	}

    // Get films from API when component is first mounted
	useEffect(() => {
		getFilms()
	}, [])

    console.log(films)

    return (
        <div className="contentWrapper">
			<h1>Films</h1>
			<div className="cardWrapper">

                {films.length > 0 && (
                    <Card className="card">
					    {films.map(film => 
                            <Card.Body>
                                <Card.Title 
                                    action
                                    key={film.id}
                                >
                                    {film.title}
                                </Card.Title>

                                <Card.Text>
                                    <p className="small mb-0">{film.episode_id}</p>
                                </Card.Text>
                            </Card.Body>
                        )}
				    </Card>
                )}

                {films.length === 0 && (
				    <p className="status">No films</p>
			    )}
			</div>
		</div>
  )
}

export default Films;