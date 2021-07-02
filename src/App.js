import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import Navbar from './components/navbar';

function App() {
	return (
		<div className="App">
			<Router>
				{/* Navbar component handles routes */}
				<Navbar />
				{/* Switch statement that renders specific components based on routes chosen via Navbar */}
				<Switch>
					<Route path="/">
						Home
					</Route>
					<Route path="/analytics">
						Analytics
					</Route>
					<Route path="/import-data">
						Import Data
					</Route>
					<Route path="/about">
						About
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;