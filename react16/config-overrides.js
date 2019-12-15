module.exports = function override(config, env) {
    //do stuff with the webpack config...    
    // console.log(`Plugins: `, JSON.stringify(config.plugins, null, 2));
    config.output = { ...config.output, ...{ libraryTarget: "system" }};
    config.entry = [`${process.cwd()}/src/plugin.ts`]
    console.log(`Output: `, JSON.stringify(config.output, null, 2));    
    return config;
}