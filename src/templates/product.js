import React from "react"
import { graphql, Link } from "gatsby"
import SkuCard from '../components/Products/SkuCard'
import Layout from '../components/layout/layout'
import Img from "gatsby-image"
import Swiper from "react-id-swiper"

const sliderParams = {
  slidesPerView: "auto",
  centeredSlides: true,
  effect: 'fade',
  autoplay: true,
}

export default function Product({ data }) {
    const price = data.stripePrice
    const product = data.datoCmsProduct
    const newSku = {
        sku: price.id,
        name: price.product.name,
        price: price.unit_amount,
        currency: price.currency,
        id: price.id,

      }
    return (
      <>
        <Layout pagestyle="productpage">
            <div className="title">{product.productName}</div>
            <div className="pnkz">
                <p><Link to="/">TOP</Link></p>
                <p><Link to="/">{product.productCategory.title}</Link></p>
                <p>{product.productName}</p>
            </div>
            <div className="contents">
                <div className="product_detail">
                    <div className="img">
                      <Swiper {...sliderParams}>
                        {product.productImage.map( (e, index )=>{
                          return(
                            <div key={index}>
                              <Img fluid={e.fluid} />
                            </div>
                          )
                        })}
                      </Swiper>
                    </div>
                    <div className="cart">
                        <div className="cart_sticky">
                            <h3>{product.productName}</h3>
                            <p>&yen; {product.productPrice}</p>
                            <SkuCard sku={newSku} />
                        </div>
                    </div>
                    <div className="post"
                          dangerouslySetInnerHTML={{
                            __html: product.productDescriptionNode.childMarkdownRemark.html,
                          }}
                        ></div>
                    <Img fluid={product.productImage[0].fluid} />
                </div>
            </div>
        </Layout>
        
      </>
    )
  }



export const query = graphql`
query ($id: String!)  {
    stripePrice(product: {metadata: {id: {eq: $id}}}) {
        product {
            id
            name
            metadata {
              id
            }
          }
          active
          billing_scheme
          currency
          livemode
          object
          unit_amount
          id
    }
    datoCmsProduct(productId: {eq: $id}) {
      id
      productStatus
      productPrice
      productName
      productId
      productCategory {
        title
      }
      productDescription
      productDescriptionNode {
        childMarkdownRemark {
          html
        }
      }
      productImage{
        fluid(maxWidth: 600, forceBlurhash: false, imgixParams: { fm: "jpg", auto: "compress", fit: "crop" ,w: "600", h: "424"}) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
}

`