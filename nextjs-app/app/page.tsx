import { gql, useQuery } from '@apollo/client';

// const GET_HOMEPAGE_DATA = gql`
//   {
//     pages(where: { name: "Homepage" }) {
//       nodes {
//         homepage {
//           banners {
//             bannerImage {
//               node {
//                 sourceUrl
//               }
//             }
//             bannersTitle
//             bannerDescription
//             bannerButton {
//               title
//               url
//               target
//             }
//           }
//           homeAboutTitle
//           homeAboutSubtitle
//           homeAboutButton {
//             target
//             title
//             url
//           }
//           homeAboutVideoImage {
//             node {
//               sourceUrl
//             }
//           }
//           homeAboutVideoUrl
//           homeAboutDescription
//           homeCategoryTitle
//           homeCategorySubtitle
//           homeServicesTitle
//           homeServicesSubtitle
//           homeColoursTitle
//           homeColoursSubtitle
//           homeColoursButton {
//             target
//             title
//             url
//           }
//           homeJoinBackgroundImage {
//             node {
//               sourceUrl
//             }
//           }
//           homeJoinTitle
//           homeJoinSubtitle
//           homeJoinButton {
//             target
//             title
//             url
//           }
//           homeJoinDescription
//           blogTitle
//           blogSubtitle
//           categories {
//             link
//             title
//             image {
//               node {
//                 sourceUrl
//               }
//             }
//           }
//         }
//         seo {
//           canonical
//           metaKeywords
//           metaDesc
//           title
//           opengraphType
//           opengraphSiteName
//           opengraphTitle
//           opengraphDescription
//           opengraphUrl
//           schema {
//             raw
//           }
//           opengraphImage {
//             mediaItemUrl
//           }
//         }
//       }
//     }
//   }
// `;

export default function Home() {
  // const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // const { Home } = data.pages.nodes[0];

  return (
      <div>
        {/* <h1>{Home.homeAboutTitle}</h1> */}
        <h1>home</h1>
      </div>
  );
}

