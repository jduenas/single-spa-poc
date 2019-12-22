import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import RootComponent from './App'
import { setPublicPath } from 'systemjs-webpack-interop'

setPublicPath("react");

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootComponent as any,
  domElementGetter,
})

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];

export const unload = [reactLifecycles.unmount];

function domElementGetter() {
  let el = document.getElementById("react");
  if (!el) {
    el = document.createElement('react');
    el.id = 'react';
    document.body.appendChild(el);
  }

  return el;
}
