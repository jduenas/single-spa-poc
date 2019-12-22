const path = require('path');
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

module.exports = (angularWebpackConfig, options) => {
  if (!process.env.SINGLE_SPA) {
    console.log(`===== Building for Dev Workflow ======`)
    // console.log(JSON.stringify(angularWebpackConfig.entry, null, 2));
    return angularWebpackConfig;
  }
  

  console.log(`===== Building for Single SPA Plugin ======`);
  angularWebpackConfig.entry = [path.resolve(__dirname, 'src/main.single-spa.ts')];  
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig
}