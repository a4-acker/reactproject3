
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css'
import A from './pages/A';

function App() {
    const repositoryName = 'reactproject3';
    return (
        <Router basename={`/${repositoryName}`}>
            <nav>
                <button><Link to="/A">Go to A</Link></button>
            </nav>
            <Routes>
                <Route path="/A" element={<A />} />
            </Routes>
        </Router>

  )
}

export default App
