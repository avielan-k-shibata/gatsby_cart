const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(
        `
        query MyQuery {
          allDatoCmsArticle {
            totalCount
            nodes {
              category {
                title
              }
              tag {
                title
              }
              slug
            }
          }
          allDatoCmsCategory {
            nodes {
              title
            }
          }
          allDatoCmsTag {
            nodes {
              title
            }
          }
          allStripePrice {
            nodes {
              id
              product {
                metadata {
                  id
                }
              }
            }
          }
          allDatoCmsProduct {
            nodes {
              id
              productCategory {
                title
              }
              productId
            }
            totalCount
          }
        }
          `
      );
      if (result.errors) {
        throw result.errors;
      }

  const products = result.data.allStripePrice.nodes
  const products2 = result.data.allDatoCmsProduct.nodes


  products.forEach((product, index) => {
    createPage({
      path: `products/${product.product.metadata.id}`,
      component: path.resolve('./src/templates/product.js'),
      context: {
        id: product.product.metadata.id,
      },
    });
  });

  paginate({
    createPage, // The Gatsby `createPage` function
    items: products2, // An array of objects
    itemsPerPage: 12, // How many items you want per page
    pathPrefix: '/products', // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve('./src/templates/productList.js'), // Just like `createPage()`
  })
}