import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  query {
    literatures {
      id
      name
      subject
      image {
        url
      }
      author
      publisher
      publishedYear
      pageNumber
      weight
      price
      discount
      soldNumber
      shabak
      slug
    }
    histories {
      id
      name
      subject
      image {
        url
      }
      author
      publisher
      publishedYear
      pageNumber
      weight
      price
      discount
      soldNumber
      shabak
      slug
    }
    childAndTeenagers {
      id
      name
      subject
      image {
        url
      }
      author
      publisher
      publishedYear
      pageNumber
      weight
      price
      discount
      soldNumber
      shabak
      slug
    }
    arts {
      id
      name
      subject
      image {
        url
      }
      author
      publisher
      publishedYear
      pageNumber
      weight
      price
      discount
      soldNumber
      shabak
      slug
    }
  }
`;

export { GET_BOOKS };
