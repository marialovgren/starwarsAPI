import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleFilmPage = () => {
    const [film, setFilm] = useState()
    const { id } = useParams()



  return (
    <div>SingleFilmPage</div>
  )
}

export default SingleFilmPage