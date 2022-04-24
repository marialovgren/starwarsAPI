/**
* Starwars API service
*
* <https://swapi.dev/api/>
*/

import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/'
 
/**
* * Get all films
*/
const getFilms = async () => {
	const res = await axios.get(`${BASE_URL}/films`)
	return res.data
}

/**
* * Get a single film
*/
const getFilm = async (id) => {
    const res = await axios.get(`${BASE_URL}/films/${id}`)
    return res.data
}

/**
* * Get all characters
*/
const getPeople = async () => {
    const res = await axios.get(`${BASE_URL}/people`)
    return res.data
}

/**
* * Get a single character
*/
const getCharacter = async (id) => {
    const res = await axios.get(`${BASE_URL}/people/${id}`)
    return res.data
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getFilms,
    getPeople,
    getFilm,
    getCharacter,
}