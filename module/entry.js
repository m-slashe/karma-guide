import { config } from './js/config';
import { MainCtrl } from './js/controller.main';

angular.module('module',['ui.router'])
    .config(config)
    .controller('MainCtrl', MainCtrl);
