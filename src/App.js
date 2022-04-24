import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'

// imported pages
import HomePage from './pages/HomePage'
import Films from './pages/Films'
import SingleFilmPage from './pages/SingleFilmPage'
import People from './pages/People'
import SinglePerson from './pages/CharacterInfo'

// styles
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
	return (
		<div className="App">
      		<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/films" element={<Films />} />
					<Route path="/films/:id" element={<SingleFilmPage />} />
					<Route path="/people" element={<People />} />
					<Route path="/people/:id" element={<SinglePerson />} />
				</Routes>
			</Container>
    	</div>
  	);
}

export default App;
