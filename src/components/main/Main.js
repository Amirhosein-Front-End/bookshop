import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../../GraphQL/queries';

//Actions
import { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure } from '../../redux/books/booksActions';
import { fetchDiscountedBooks, fetchBestsellerBooks, fetchSuggestionBooks } from '../../redux/books/booksActions'

//Functions
import { discountedBooks, bestSellerBooks, suggestionBooks, organizedBooks } from '../../functions/filteredBooks';

//Components
import DiscountedBooks from './DiscountedBooks';
import LiteratureBanner from './LiteratureBanner';
import SuggestionBanner from './SuggestionBanner';
import Footer from '../footer/Footer';

const Main = () => {

  const {loading, data, errors} = useQuery(GET_BOOKS);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      dispatch(fetchBooksRequest());
    }
    if (data) {
      dispatch(fetchBooksSuccess(organizedBooks(data)));
      dispatch(fetchDiscountedBooks(discountedBooks(data)));
      dispatch(fetchBestsellerBooks(bestSellerBooks(data)));
      dispatch(fetchSuggestionBooks(suggestionBooks(data)));
    }
    if (errors) {
      dispatch(fetchBooksFailure(errors.message));
    }
  }, [data, errors]);

  return (
    <main>
      <DiscountedBooks />
      <SuggestionBanner />
      <LiteratureBanner />
      <Footer />
    </main>
  );
}
 
export default Main;