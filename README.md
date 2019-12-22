# Microfront End Notes (Angular 8+)
* Once the single-spa-angular schematic is installed, you lose the dev workflow of **npm run serve**.  This prevents the app from running as a **standalone**.

* The following changes need to be done:
    * Create an **environtment.plugin.ts** that's only used when building the single-spa plugin. This allows you to choose the proper route to load depending on what you're building.
    * Modify the **angular.json** to recognize the **plugin** configuration (replaces environment.ts with environment.plugin.ts).
    * Modify **extra-webpack.config.json** to not do anything if building for **standalone**.  For plugin, make it change the webpack **entry** property to build the **main.single-spa.tsx** instead.
    * For PROD build, enable sourcemaps inside angular.json

# Microfront End Notes (React 16+)
* Needed to add **plugin.tsx** which would be the entry point for building the single-spa plugin.
* Need to use **webpack.config.json** in order to build react project as a loadable SystemJS module.

# Consideration
* For React, In order to load chunks, the **systemjs-webpack-interop** lib is required to define the __WEBPACK__PUBLIC__PATH.  This forces the portal to load chunks of the loaded app from the host it originated from.
* For Angular, this is handled by the **single-spa-angular** lib.
* CORS has to be enabled on the hosting servers of the assets

