'use strict';
/*接着需要注册其核心模块，
作为主模块phonecatApp的依赖。*/
// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);
