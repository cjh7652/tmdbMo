
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import QuickBtn from './components/QuickBtn'
import Home from './pages/Home'
import Drama from './pages/Drama'
import Comedy from './pages/Comedy'
import UpComming from './pages/UpComming'
import RecommendDetail from "./pages/RecommendDetail"
import DramaDetail from "./pages/DramaDetail"
import ComedyDetail from "./pages/ComedyDetail"
import Romance from './pages/Romance';
import Action from './pages/Action';
import Horror from './pages/Horror';
import RomanceDetail from './pages/RomanceDetail.jsx';
import ActionDetail from './pages/ActionDetail';
import HorrorDetail from './pages/HorrorDetail';
import './App.scss'

function App() {
  
  return (
    <>
      	<Header />
      
		<Routes>		
			<Route path="/" element={<Home />} /> 
			<Route path="/drama" element={<Drama />} />
			<Route path="/comedy" element={<Comedy />} />
			<Route path="/comedy/:id" element={<ComedyDetail />} />
			<Route path="/upcomming/:id" element={<UpComming />} />
			<Route path="/recommendDetail/:id" element={<RecommendDetail />} />
			<Route path="/drama/:id" element={<DramaDetail />} />
			<Route path="/Romance" element={<Romance />} />
			<Route path="/Action" element={<Action />} />
			<Route path="/Horror" element={<Horror />} />
			<Route path="/RomanceDetail/:id" element={<RomanceDetail />} />
			<Route path="/ActionDetail/:id" element={<ActionDetail />} />
			<Route path="/HorrorDetail/:id" element={<HorrorDetail />} />
		</Routes>
    
      	<Footer />
		<QuickBtn />
    </>
  )
}

export default App
