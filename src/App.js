import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Analytics from './components/Analytics';
import ImportData from './components/ImportData';

function App() {
	return (
		<div className="App">
			<Router>
				{/* Navbar component handles routes */}
				<Navbar />
				{/* Switch statement that renders specific components based on routes chosen via Navbar */}
				<Switch>
					<Route exact path="/">
						Home
					</Route>
					<Route exact path="/analytics">
						<Analytics />
					</Route>
					<Route exact path="/import-data">
						<ImportData />
					</Route>
					<Route exact path="/about">
						About
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;