import FirstProject from "./firstProject";
import { BrowserRouter, Route ,Link ,Routes} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact={false} element={<Home/>}/>
                    <Route path="/first-project" element={<FirstProject/>}/>
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
            <Link to="/first-project">Click to view My first project</Link>
        </div>
    );
}


