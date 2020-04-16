<template>
  <Layout>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 lg:px-0">
          <div><img :src="product.images[0].originalSrc" :alt="product.images[0].altText || product.title"></div>
          <div class="flex flex-col">
            <h1 class="font-bold text-2xl mb-2">{{ product.title }}</h1>
            <p class="text-sm mb-6">{{ product.description }}</p>
            <div class="font-bold mb-4">{{ product.priceRange.minVariantPrice.amount }}</div>
            <ClientOnly>
                <v-select class="mb-2" :label="product.options[0].name" :options="product.options[0].values"></v-select>
            </ClientOnly>
            <button class="block w-full px-4 py-2 bg-black text-white font-bold focus:outline-none">Add To Cart</button>
          </div>
      </div>
  </Layout>
</template>

<script>
export default {
    metaInfo () {
        return {
            title: this.$page.shopifyProduct.title
        }
    },
    data () {
        return {
            selectedOptions: {},
            quantity: 1
        }
    },
    computed: {
        product () { return this.$page.shopifyProduct },
        productOptions () { return this.product.options.filter(({ name }) => name !== 'Title') },
        currentVariant () {
            const matchedVariant = this.product.variants.find(variant => 
                variant.selectedOptions.every(({ name, value }) => value === this.selectedOptions[ name ])
            )
            return matchedVariant
        }
    }
}
</script>
<page-query>
query Product ($id: ID!) {
    shopifyProduct (id: $id) {
        id
        handle
        title
        description
        images {
            originalSrc
        }
        priceRange {
            minVariantPrice {
                amount(format: true)
            }
        }
        variants {
          price {
            amount
          }
          selectedOptions {
            name
            value
          }
        }
        options {
            id
            name
            values
        }
  }
}
</page-query>