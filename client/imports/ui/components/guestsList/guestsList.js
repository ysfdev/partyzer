import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './guestsList.html';
//import { Guests } from '../../../api/guests';
import { name as AddGuest } from '../addGuest/addGuest';
//import { Guests } from '../../../../../collections/guests';

class GuestsList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

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
  AddGuest
]).component(name, {
  templateUrl: `client/imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: GuestsList
});
