import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './guestsList.html';
import { Guests } from '../../../api/guests/index';
import { name as GuestAdd } from '../guestAdd/guestAdd';
import { name as GuestRemove } from '../guestRemove/guestRemove';

class GuestsList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    //attach the current allow user's list to the view
    this.subscribe('guests');

    this.helpers({
      guests() {
        return Guests.find({});
      }
    });
  }
}

const name = 'guestsList';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  GuestAdd,
  GuestRemove
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: GuestsList
})
  .config(config);

  function config($stateProvider){
    'ngInject';
    $stateProvider
      .state('guests',{
        url: '/guests',
        template: '<guests-list></guests-list>'
      });
  }
