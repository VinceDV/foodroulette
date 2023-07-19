import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CreateRecipe from './components/CreateRecipe';
import Header from './components/Header';
import Home from './components/Home.jsx';
import LoginPage from './components/LoginPage';
import ModRecipe from './components/ModRec';
import RecipeList from './components/RecipeList.jsx';
import RegisterPage from './components/RegisterPage';
import SingleRecipe from './components/SingleRecipe';
import SpecRec from './components/SpecRec';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/recipe-list" element={<RecipeList />} />
          <Route path="/single-recipe" element={<SingleRecipe />} />
          <Route path="/specrec/:id" element={<SpecRec />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/modify-recipe/:id" element={<ModRecipe />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
