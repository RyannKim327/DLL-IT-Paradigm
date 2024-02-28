import logo from './logo.svg'
import './App.css'
import Header from './parts/header.js'
import Footer from './parts/footer.js'

import Index from './main/index.js'

function App() {
	return (
		<div className="App">
			<Header />
			<Index />
			<Footer />
		</div>
	);
}

export default App;
