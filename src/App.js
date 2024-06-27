import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
// import About from './components/About.js';


function App() {
  return (
    <>
   <Navbar title= "textutils" about= "about us"/>
   <div className="container  my=3">
      <Textform heading= "Enter the text for anaylze"/>
      {/* <About/> */}
   </div>
   </>
  );
}

export default App;
