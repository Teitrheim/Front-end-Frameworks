import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/success" component={CheckoutSuccessPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
