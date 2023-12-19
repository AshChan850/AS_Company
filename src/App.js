import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import ProductPage from './Components/ProductPage';
import RatingStars from './Components/RatingStars';
import Register from './Components/Register';
import ReviewDialogBox from './Components/ReviewDialogBox';
import AuthWrapper from './auth/AuthWrapper';



function App() {
  return (
    <div className="App">
     {/* <NavBar/> */}
     {/* <ProductPage/> */}
     {/* <Register/> */}
     {/* <ReviewDialogBox/> */}
     {/* <RatingStars/> */}

     <BrowserRouter>
     <AuthWrapper/>
     </BrowserRouter>
    </div>
  );
}

export default App;



