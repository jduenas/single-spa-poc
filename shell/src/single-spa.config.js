import { registerApplication, start } from 'single-spa'
registerApplication(
  // Name of our single-spa application
  'react',
  // loadingFunction
  () => { 
    return System.import("react") 
  },
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/react')
);

registerApplication(
  // Name of our single-spa application
  'angular',
  // loadingFunction
  () => { 
    return System.import("angular") 
  },
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/angular')
);
start();