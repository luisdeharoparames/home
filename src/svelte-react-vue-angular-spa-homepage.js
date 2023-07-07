import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";
// import 'tailwindcss/dist/tailwind.css';
import './styles.css';

const svelteLifecycles = singleSpaSvelte({
  component: App,
});

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
