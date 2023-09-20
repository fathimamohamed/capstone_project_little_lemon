import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routing from './components/Routing';
import { AlertProvider } from "./components/context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <>
    <AlertProvider>
      <Navbar />
      <Routing />
      <Footer />
      <Alert />
    </AlertProvider>
    </>
  );
}

export default App;
