import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout/layout'

import Img from "gatsby-image"

export default function ProductList({ data }) {
    const product = data.allDatoCmsRecipe.nodes

    return (
      <>
        <Layout pagestyle="list">
            <div className="title"><h1>レシピ一覧</h1></div>
            <div className="pnkz">
                <p><Link to="/">TOP</Link></p>
                <p>レシピ一覧</p>
            </div>
            <div className="contents">
                <div className="productlist">
                  {product.map( (e, index )=>{
                    const tolink = `/recipe/${e.slug}`
                    return(
                      <Link key={index} className="itembloc" to={tolink}>
                        <span><Img fluid={e.image.fluid} /></span>
                        <span>{e.title}</span>
                        <span>{e.category.title}</span>
                      </Link>
                    )
                  })}

                </div>
            </div>
        </Layout>
        
      </>
    )
  }



export const query = graphql`
query ($skip: Int!, $limit: Int!)  {
  allDatoCmsRecipe(
      filter: {recipeStatus: {eq: true}}
      skip: $skip 
      limit: $limit 
      ) {
    nodes {
      id
      category {
        title
      }
      title
      tag{
        title
      }
      slug
      image{
        fluid(maxWidth: 600, forceBlurhash: false, imgixParams: { fm: "jpg", auto: "compress", fit: "crop" ,w: "600", h: "424"}) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
}

`