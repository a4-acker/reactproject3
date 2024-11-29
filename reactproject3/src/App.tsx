import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import A from './pages/A';

function App() {
    const repositoryName = 'reactproject3/v1';
    return (
        <Router basename={`/${repositoryName}`}>
            <nav>
                <Link to="/A">
                    <button>Go to A</button>
                </Link>
            </nav>
            <Routes>
                <Route path="/A" element={<A />} />
            </Routes>
        </Router>
    );
}

export default App;
