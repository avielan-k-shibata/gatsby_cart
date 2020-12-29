import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';


function Instagram({account}) {
  let link = 'https://www.instagram.com/'+ account
  return (
    <Link to={link} target="_blank" rel="noopener">
      <img src="https://www.datocms-assets.com/38232/1608530017-instagram.svg" alt="twitter"/>
    </Link>
  )
}
function Twitter({account}) {
  let link = 'https://twitter.com/'+ account
  return (
    <Link to={link} target="_blank" rel="noopener">
      <img src="https://www.datocms-assets.com/38232/1608530021-twitter.svg" alt="twitter"/>
    </Link>
  )
}
function Facebook({account}) {
  let link = 'https://www.facebook.com/'+ account
  return (
    <Link to={link} target="_blank" rel="noopener">
      <img src="https://www.datocms-assets.com/38232/1608530012-facebook.svg" alt="twitter"/>
    </Link>
  )
}
function Youtube({account}) {
  let link = 'www.youtube.com/'+ account
  return (
    <Link to={link} target="_blank" rel="noopener">
      <img src="https://www.datocms-assets.com/38232/1608530024-youtube.svg" alt="twitter"/>
    </Link>
  )
}
const Sns = ({ tag, title }) => (
    <StaticQuery
      query={graphql`
      {
        datoCmsSnsid{
            instagram
            twitter
            facebook
            youtube
        }
      }
      `}
      render={data=> {
        const snsdata = data.datoCmsSnsid
        return (
          <>
              {snsdata.instagram ? <Instagram account={snsdata.instagram} /> : null}
              {snsdata.twitter ? <Twitter account={snsdata.twitter} /> : null}
              {snsdata.facebook ? <Facebook account={snsdata.facebook} /> : null}
              {snsdata.youtube ? <Youtube account={snsdata.youtube} /> : null}
          </>
        );
      }}
    />
  );

export default Sns;