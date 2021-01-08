import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout/layout'

import Img from "gatsby-image"

export default function ProductList({ data }) {
    const product = data.allDatoCmsProduct.nodes

    return (
      <>
        <Layout pagestyle="list">
            <div className="title"><h1>レシピ一覧</h1></div>
            <div className="pnkz">
                <p><Link to="/">TOP</Link></p>
                <p>商品一覧</p>
            </div>
            <div className="contents">
                <div className="productlist">
                  {product.map( (e, index )=>{
                    const tolink = `/products/${e.productId}`
                    return(
                      <Link key={index} className="itembloc" to={tolink}>
                        <span><Img fluid={e.productImage[0].fluid} /></span>
                        <span>{e.productName}</span>
                        <span>&yen; {e.productPrice.toLocaleString()}</span>
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
    allDatoCmsProduct(
      filter: {productStatus: {eq: true}}
      skip: $skip 
      limit: $limit 
      ) {
    nodes {
      id
      productCategory {
        title
      }
      productId
      productName
      productPrice
      productImage{
        fluid(maxWidth: 600, forceBlurhash: false, imgixParams: { fm: "jpg", auto: "compress", fit: "crop" ,w: "600", h: "424"}) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }

}

`