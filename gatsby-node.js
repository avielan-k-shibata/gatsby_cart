const path = require(`path`)

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
        }
          `
      );
      if (result.errors) {
        throw result.errors;
      }

  const products = result.data.allStripePrice.nodes

  products.forEach((product, index) => {
    createPage({
      path: `products/${product.product.metadata.id}`,
      component: path.resolve('./src/templates/product.js'),
      context: {
        id: product.product.metadata.id,
      },
    });
  });
}