import { gql } from '@apollo/client';

const GET_CARDS_ITEMS = gql`
  query GetCardsItems {
    cardsCollection {
      items {
        id
        heading
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        title
        caption
        content
      }
    }
  }
`;

export default GET_CARDS_ITEMS;
