import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import RootComponent from './App'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootComponent as any,
  domElementGetter,
})

export const bootstrap = reactLifecycles.bootstrap;

export const mount = reactLifecycles.mount;

export const unmount = reactLifecycles.unmount;

export const unload = reactLifecycles.unmount;

function domElementGetter() {
  let el = document.getElementById("navbar");
  if (!el) {
    el = document.createElement('div');
    el.id = 'navbar';
    document.body.appendChild(el);
  }

  return el;
}
