import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './partyzer.html';
import { name as GuestsList } from '../guestsList/guestsList';
import { name as GuestDetails } from '../guestDetails/guestDetails';
import { name as Navigation } from '../navigation/navigation';

class Partyzer {}

const name = 'partyzer';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  GuestsList,
  GuestDetails,
  Navigation,
  'accounts.ui'
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Partyzer
})
  .config(config)
  .run(run);

function config($locationProvider, $urlRouterProvider){
  'ngInject';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/guests');
}

function run($rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('guests');
      }
    }
  );
}
