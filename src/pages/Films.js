import StarwarsAPI from '../services/SWAPI'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'


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
        <div className="contentWrapper">
			<h1>Films</h1>
			<div className="cardWrapper">

            {films && films.results.map((films) => (
                <Card className="card"> 
                    <Card.Header>{films.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            Eposode id: {films.episode_id}
                        </Card.Title>          
                        <Card.Text>
                            {films.opening_crawl}
                        </Card.Text>
                    </Card.Body>
				</Card>
            ))}

			</div>
		</div>
  )
}

export default Films;