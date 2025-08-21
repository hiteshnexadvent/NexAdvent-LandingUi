import './App.css';
import Main from './components/Main';
import FooterMarquee from './slides/FooterMarquee';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">

      <ToastContainer position="top-right" autoClose={3000} />
      
      <Main></Main>
      <FooterMarquee></FooterMarquee>
      
    </div>
  );
}

export default App;
