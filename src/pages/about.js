import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout/layout'


export default function About({ data, location }) {
    const about = data.datoCmsHome
    
    return (
      <>
        <Layout pathname={location.pathname} >
            <div className="title"><h1>ABOUT</h1></div>
            <div className="pnkz">
                <p><Link to="/">TOP</Link></p>
                <p>ABOUT</p>
            </div>
            <div className="contents">
                <div className="contents_about">
                <div className="post"
                          dangerouslySetInnerHTML={{
                            __html: about.aboutNode.childMarkdownRemark.html,
                          }}
                        ></div>
                </div>
            </div>
        </Layout>
        
      </>
    )
  }



export const query = graphql`
query {
  datoCmsHome {
    copyright
    seo {
      description
      title
    }
    aboutNode {
      childMarkdownRemark {
        html
      }
    }
  }
}

`