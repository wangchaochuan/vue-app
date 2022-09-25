import { createApp } from 'vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import './style.css';
import App from './App.vue';

// createApp(App).mount('#app');

let instance: any = null;

type TMicroProps = {
  container?: HTMLElement;
};

function render({ container }: TMicroProps) {
  instance = createApp(App);
  instance.mount(container ? container.querySelector('#vue-app') ?? '#vue-app' : '#vue-app');
}

renderWithQiankun({
  bootstrap() {
    console.log('vue-app bootstrap');
  },
  mount(props: TMicroProps) {
    render(props);
  },
  unmount() {
    if (instance) {
      instance.unmount();
      instance._container.innerHTML = '';
      instance = null;
    }
  },
  update() {
    console.log('vue-app update');
  },
});
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
