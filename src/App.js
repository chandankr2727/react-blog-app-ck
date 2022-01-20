import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import BlogContextProvider from './Components/BlogContext';

function App() {
  return (
    <div className="App">
      <Header />
      <BlogContextProvider>
        <Navbar />
      </BlogContextProvider>
    </div>
  );
}

export default App;
