import './App.css';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import ProductPage from './Components/ProductPage';
import RatingStars from './Components/RatingStars';
import Register from './Components/Register';
import ReviewDialogBox from './Components/ReviewDialogBox';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <ProductPage/>
     {/* <Register/> */}
     {/* <ReviewDialogBox/> */}
     {/* <RatingStars/> */}
    </div>
  );
}

export default App;



