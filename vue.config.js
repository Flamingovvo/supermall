module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views',
        }
      }
    }
  }
// module.exports = {
//     chainWebpack: config => {
//       config.resolve.alias
//         .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
//         .set('assets', resolve('src/assets'))
//         .set('common', resolve('src/common'))
//         .set('components', resolve('src/components'))
//         .set('network', resolve('src/network'))
//         .set('views', resolve('src/views'))
//     }
// }
