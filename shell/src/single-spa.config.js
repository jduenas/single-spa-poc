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
start();