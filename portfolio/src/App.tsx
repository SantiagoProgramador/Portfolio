import Header from "./components/Header";
import About from "./components/About";
import Slogan from "./components/Slogan";
import Profile from "./components/Profile";
import ListGroup from "./components/ListGroup";
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
          <div className="mt-3">
           <ListGroup items={languages} heading="Languages: Projects and skills" onSelectItem={handleSelectedItem}/>
          </div>
          <Footer/>
        </>
}

export default App;