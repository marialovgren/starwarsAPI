import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'

// imported pages
import HomePage from './pages/HomePage'
import SearchStarwars from './pages/SearchStarwars'
import NotFound from './pages/NotFound'

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
					<Route path="/search" element={<SearchStarwars />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
    	</div>
  	);
}

export default App;
