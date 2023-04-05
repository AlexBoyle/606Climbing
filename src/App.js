import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Payment from './Pages/Payment';
import Events from './Pages/Events';
import Social from './Pages/Social';
import ExamplePage from './Pages/ExamplePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<Router>
			<Header/>
			<Routes>
				<Route path='/' exact element={<Home/>} />
				<Route path='/payment' element={<Payment/>} />
				<Route path='/events' element={<Events/>} />
			</Routes>
		</Router>
    </div>
  );
}

export default App;
