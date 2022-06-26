import { render } from "react-dom";
import '@picocss/pico';
import './css/main.css';
import About from "./components/About";
import Index from "./components/Index";
import Header from "./components/Header";
import Educations from "./components/Educations";
import Footer from "./components/Footer";
const rootElement = document.getElementById("root");

const App = () => {
    return (
        <>
        <Header/>
        <About/>
        <Index/>
        <Educations/>
        <Footer/>
        </>
    )
}

export default App;

render (
    <App/>,
    rootElement
)