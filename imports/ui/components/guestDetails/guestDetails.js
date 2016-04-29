import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './guestDetails.html';
import { Guests } from '../../../api/guests';

class GuestDetails {
  constructor($stateParams){
    'ngInject';

    this.guest = $stateParams.guestId;
  }
}

const name = 'guestDetails';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: GuestDetails
})
  .config(config);

function config($stateProvider){
  'ngInject';
  $stateProvider
    .state('guestDetails',{
      url: '/guests/:guestId',
      template: '<guest-details></guest-details>'
  });
}
