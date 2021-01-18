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
          allDatoCmsRecipe(filter: {recipeStatus: {eq: true}}) {
            nodes {
              id
              title
              slug
              tag {
                title
              }
              category {
                title
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
  const products2 = result.data.allDatoCmsProduct.nodes
  const recipes = result.data.allDatoCmsRecipe.nodes

  // PRODUCTS
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
    createPage,
    items: products2,
    itemsPerPage: 12,
    pathPrefix: '/products',
    component: path.resolve('./src/templates/productList.js'), // Just like `createPage()`
  })

  // RECIPES
  paginate({
    createPage,
    items: recipes,
    itemsPerPage: 12, 
    pathPrefix: '/recipes', 
    component: path.resolve('./src/templates/recipeList.js'), // Just like `createPage()`
  })

  // DETAIL RECIPE
  recipes.forEach((recipe, index) => {
    createPage({
      path: `recipe/${recipe.slug}`,
      component: path.resolve('./src/templates/recipe.js'),
      context: {
        id: recipe.slug,
      },
    });
  });
}