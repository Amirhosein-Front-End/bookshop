import React from "react";

import { useParams } from "react-router-dom";

//GraphQL
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../GraphQL/queries";

//Functions
import { addSpace, searchedBook } from "../../functions/searchInput";

//Components
import SearchedBook from "./SearchedBook";
import Loading from "../loading/Loading";

//Styles
import styles from "./Search.module.css";

const Search = () => {
  const { slug } = useParams();
  const addedSpaceSlug = addSpace(slug);

  const { loading, data, errors } = useQuery(GET_BOOKS);
  const foundBook = searchedBook(data, addedSpaceSlug);

  if (loading) return <Loading />;
  if (errors) return <h3 style={{ margin: "35px" }}>باعرض پوزش خطایی رخ داده است. لطفا مجددا تلاش فرمایید.</h3>;

  return (
    <div className={styles.container}>
      <h2 className={styles.searchresult}>نتیجه جستجو : {addedSpaceSlug}</h2>
      {foundBook.length < 1 ? (
        <div className={styles.container}>
          <h3 className={styles.notfound}>
            با عرض پوزش ، کتاب مورد نظر یافت نشد.
          </h3>
        </div>
      ) : (
        foundBook.map((book) => (
          <SearchedBook
            key={book.id}
            image={book.image.url}
            name={book.name}
            author={book.author}
            publisher={book.publisher}
            slug={book.slug}
          />
        ))
      )}
    </div>
  );
};

export default Search;
