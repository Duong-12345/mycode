// import Login from "./page/login/Login";
// import Shop from "./page/shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Cart from "./page/cart/Cart";
// import Detail from "./page/productDetail/ProductDetail";
// import Profile from "./page/profile/Profile";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("./page/login/Login"));
const Shop1 = lazy(() => import("./page/shop/Shop1"));
const Cart = lazy(() => import("./page/cart/Cart"));
const Detail = lazy(() => import("./page/productDetail/ProductDetail"));
const Profile = lazy(() => import("./page/profile/Profile"));

function App() {
  // const state = useSelector((state : RootStateOrAny) => state.login);
  //     function Con(){
  //       if ( state === true) {
  //      return  <Shop/>}
  //      else{
  //        return <Login/>
  //      }
  //    }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <div className="App">
            {/* {Con()} */}

            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/shop" component={Shop1} />
            <Route path="/cart" component={Cart} />
            <Route path="/detail" component={Detail} />
            <Route path="/profile" component={Profile} />
          </div>
        </Switch>
      </Suspense>
    </Router>
  );
}
export default App;
