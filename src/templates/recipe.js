import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout/layout'
import Img from "gatsby-image"


export default function Product({ data }) {
    const recipe = data.datoCmsRecipe
    return (
      <>
        <Layout pagestyle="productpage">
            <div className="title"></div>
            <div className="pnkz">
                <p><Link to="/">TOP</Link></p>
                <p><Link to="/">{recipe.category.title}</Link></p>
                <p>{recipe.title}</p>
            </div>
            <div className="contents">
                <div className="product_detail">
                    <div className="img">
                        <Img fluid={recipe.image.fluid} />
                    </div>
                    <div className="cart">
                        <div className="cart_sticky">
                            <h3>{recipe.title}</h3>
 
                        </div>
                    </div>
                    <div className="post"
                          dangerouslySetInnerHTML={{
                            __html: recipe.methodNode.childMarkdownRemark.html,
                          }}
                        ></div>
                </div>
            </div>
        </Layout>
        
      </>
    )
  }



export const query = graphql`
query ($id: String!)  {
  datoCmsRecipe(slug: {eq: $id}) {
    title
    time
    slug
    tag {
      title
    }
    category {
      title
    }
    methodNode {
      childMarkdownRemark {
        html
      }
    }
    image{
      fluid(maxWidth: 600, forceBlurhash: false, imgixParams: { fm: "jpg", auto: "compress", fit: "crop" ,w: "600", h: "424"}) {
        ...GatsbyDatoCmsFluid
      }
    }
  }
}

`