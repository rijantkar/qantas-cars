import gql from 'graphql-tag';

export const GET_HOME_PAGE_CMS = gql`
  {
    home {
      heading
      subheading
      heroImageUrl
    }
  }
`;

export const GET_FAQS_CMS = gql`
  {
    faqs {
      title
      body
    }
  }
`;
