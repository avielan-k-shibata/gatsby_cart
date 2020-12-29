import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Footer = () => (
  <StaticQuery
    query={graphql`
    {
      datoCmsHome {
        seo {
          title
          description
          twitterCard
        }
        copyright
      }
    }
    `}
    render={data=> {
      return (
        <footer>
          <p>{data.datoCmsHome.copyright}@copyright</p>
        </footer>
      );
    }}
  />
);

export default Footer