import { registerApplication, start } from 'single-spa'
registerApplication(
  // Name of our single-spa application
  'home',
  // loadingFunction
  () => { 
    return System.import("navbar") 
  },
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/home')
);
start();