<template>
  <Layout>
    <h1>The Store</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <div v-for="edge in $page.products.edges" :key="edge.node.id">
      <g-link class="nav__link" :to="'/product/' + edge.node.handle">{{ edge.node.title }}</g-link>
      <img :src="edge.node.images[0].transformedSrc" alt="">
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Company Store'
  }
}
</script>
<page-query>
query {
  products: allShopifyProduct {
    edges {
      node {
        id
        handle
        title
        descriptionHtml
        images {
          originalSrc
          transformedSrc(maxWidth:600, maxHeight: 600, crop:CENTER)
        }
        options {
          id
          name
          values
        }
        priceRange {
          minVariantPrice {
            amount(format:true)
          }
        }
      }
    }
  }
}
</page-query>
