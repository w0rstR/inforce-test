
import './App.css';
import Loyout from "./components/Loyout/Loyout";
import ProductList from "./components/ProductList/ProductList";
import {Route,Routes} from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Loyout/>}>
                    <Route path={'/'} element={<ProductList/>}/>
                    <Route path={'/details/:id'} element={<ProductDetails/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
