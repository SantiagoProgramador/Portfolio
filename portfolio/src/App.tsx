import Header from "./components/Header";
import About from "./components/About";
import Slogan from "./components/Slogan";
import Profile from "./components/Profile";
import ListGroup from "./components/ListGroup";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const languages = ["Java", "Html - CSS", "JavaScript"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  }
  return <>
          <About/>
          <Header/>
          <Slogan/>
          <Profile/>
          <div className="mt-5">
           <ListGroup items={languages} heading="Languages: Projects and skills" onSelectItem={handleSelectedItem}/>
          </div>
          <Projects/>
          <Footer/>
        </>
}

export default App;