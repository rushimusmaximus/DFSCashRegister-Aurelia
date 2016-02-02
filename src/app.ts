import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'DFS Cash Register';
    config.map([
      { route: '', redirect: 'order-form' },
      { route: ['order-form'], moduleId: 'src/cash-register-main', nav: true, title:'Order Form' }
    ]);

    this.router = router;
  }
}
