import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RecipeList from './components/RecipeList.jsx';
import SortableMultivalue from './components/SortableMultiValue';


function App() {
  return (
    <div className="App">
     <RecipeList />
     <SortableMultivalue></SortableMultivalue>
    </div>
  );
}

export default App;
