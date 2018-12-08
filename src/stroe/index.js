import {
    observable,
    action,
    configure
  } from 'mobx';
  import Cookies from 'js-cookie'
  import DefaultStore from './DefaultStore'
  // 只允许 内部改变 state
  configure({
    enforceActions: true
  });
  
  class Store {
    constructor() {
      this.defaultStore = new DefaultStore(this);
    }
  }
  
  export default new Store();