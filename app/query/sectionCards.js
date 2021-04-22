import { gql } from '@apollo/client';

const GET_CARDS_ITEMS = gql`
  query GetCardsItems {
    cardsCollection {
      items {
        id
        title
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
        subTitle
        caption
        content
      }
    }
  }
`;

export default GET_CARDS_ITEMS;
