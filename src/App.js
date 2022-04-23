import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'

// imported pages
import HomePage from './pages/HomePage'
import Films from './pages/Films'
import People from './pages/People'

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
					<Route path="/people" element={<People />} />
				</Routes>
			</Container>
    	</div>
  	);
}

export default App;
