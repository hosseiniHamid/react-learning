import FirstProject from "./firstProject";
import SecondProject from "./secondProject";
import ThirdProject from "./thirdProject";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import './home.css';
import thirdImg from "./thirdProjectImg.png";
import secondImg from "./secondImg.png";
import firstImg from "./firstImg.JPG";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/react-learning" exact={false} element={<Home/>}/>
                    <Route path="/react-learning/first-project" element={<FirstProject/>}/>
                    <Route path="/react-learning/second-Project" element={<SecondProject/>}/>
                    <Route path="/react-learning/third-Project" element={<ThirdProject/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;

function Home() {
    return (
        <div className="homePageApp">
            <h1 className="homePage">Select the relevant project</h1>
            <div className="firstProject">
                <Link to="/react-learning/first-project">
                    <img className="thirdProject--img" src={firstImg} alt="not loaded"/></Link><br/>
            </div>
            <div className="secondProject">
                <Link to="/react-learning/second-Project">
                    <img className="thirdProject--img" src={secondImg} alt="not loaded"/></Link><br/>
            </div>
            <div className="thirdProject">
                <Link to="/react-learning/third-Project">
                    <img className="thirdProject--img" src={thirdImg} alt="not loaded"/>
                </Link>
            </div>
        </div>
    );
}


