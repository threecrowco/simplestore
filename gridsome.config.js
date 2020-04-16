// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  outputDir: 'public',

  templates: {
    ShopifyProduct: '/product/:handle'
  },

  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: 'gridsome-source-shopify',
      options: {
        storeUrl: 'https://three-crow-creative.myshopify.com',
        storefrontToken: '72d6787112bb76a7e4aabc3ec7b17299',
        types: ['Product', 'Collection', 'Page']
      }
    }
  ]
}
