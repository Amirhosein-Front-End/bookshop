import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

//GraphQL
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../GraphQL/queries";

//Components
import BookCard from "./BookCard";
import Loading from "../loading/Loading";
import Footer from '../footer/Footer';

//Functions
import { discountedBooks, bestSellerBooks, suggestionBooks } from "../../functions/filteredBooks";

//Styles
import styles from "./BooksPage.module.css";

const BooksPage = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);

  const { loading, data, errors } = useQuery(GET_BOOKS);

  useEffect(() => {
    if (data) {
      if (category === "literature") {
        setBooks(data.literatures);
      }
      if (category === "history") {
        setBooks(data.histories);
      }
      if (category === "child-and-teenager") {
        setBooks(data.childAndTeenagers);
      }
      if (category === "art") {
        setBooks(data.arts);
      }
      if (category === "discounted") {
        setBooks(discountedBooks(data));
      }
      if (category === "bestSeller") {
        setBooks(bestSellerBooks(data));
      }
      if (category === "suggestion") {
        setBooks(suggestionBooks(data));
      }
    }
  }, [data, category]);

  if (loading) return <Loading />;
  if (errors)
    return (
      <h3 style={{ margin: "35px" }}>
        باعرض پوزش خطایی رخ داده است. لطفا مجددا تلاش فرمایید.
      </h3>
    );

  return (
    <>
      <div className={styles.bookspagecontainer}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            image={book.image.url}
            name={book.name}
            author={book.author}
            publisher={book.publisher}
            price={book.price}
            discount={book.discount}
            slug={book.slug}
            type={book.__typename}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BooksPage;
