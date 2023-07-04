import React from "react";

import { Route, Routes } from "react-router-dom";

//Components
import Header from "./components/header/Header";
import Landing from "./components/Landing";
import Books from "./components/bookspage/Books";
import BooksPage from "./components/bookspage/BooksPage";
import Login from "./components/loginpage/Login";
import Signup from "./components/loginpage/Signup";
import Details from "./components/details/Details";
import CartPage from "./components/cart/CartPage";
import Search from "./components/search/Search";
import Contact from "./components/contactus/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:category" element={<BooksPage />} />
        <Route path="/book/:category/:slug" element={<Details />} />
        <Route path="/book/:slug" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search/:slug" element={<Search />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
