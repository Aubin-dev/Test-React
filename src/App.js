import './App.css';
import './index.css';
import BlogCard from './Blogcard';
import Card from './Card';


function App() {

  return (
    <div className="App">
      
      <h3>Welcome</h3>
      <div className="NavBar">
          <a href="#">Acceuil</a>
          <a href="#">Abouts</a>
          <a href="#">Contact</a>
      </div>
          
      <BlogCard/>
      <Card/>
      <h1>SHOP</h1>
      <Card/>
    </div>


  );
}

export default App;

