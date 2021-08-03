import {React} from "react"
import {HashRouter as Router, Route, Switch, Redirect, BrowserRouter} from "react-router-dom";

import Main from "../containers/main";
import Pizza from "../containers/pizza";
import NotFound from "../components/NotFound";
import PizzaDetail from "../containers/pizzaDetail";
import Checkout from "../containers/checkout";
import Thankyou from "../containers/Thankyou";
function Routes(){
return(
    <BrowserRouter>
        <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/pizzas" component={Pizza}/>
                        <Route exact path="/pizza/:slug" component={PizzaDetail}/>
                        <Route exact path="/checkout" component={Checkout}/>
                        <Route exact path="/thankyou" component={Thankyou}/>
                        <Route component={NotFound}/>




        </Switch>
    </BrowserRouter>
)
}
export default Routes
