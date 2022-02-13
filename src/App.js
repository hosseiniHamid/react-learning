import FirstProject from "./firstProject";
import SecondProject from "./secondProject";
import { BrowserRouter, Route ,Link ,Routes} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/react-learning" exact={false} element={<Home/>}/>
                    <Route path="/react-learning/first-project" element={<FirstProject/>}/>
                    <Route path="/react-learning/second-Project" element={<SecondProject/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;

function Home() {
    return (
        <div>
            <h1>This is the home page</h1>
            <Link to="/react-learning/first-project">Click to view My first project</Link><br/>
            <Link to="/react-learning/second-Project">Click to view My second project</Link>
        </div>
    );
}


