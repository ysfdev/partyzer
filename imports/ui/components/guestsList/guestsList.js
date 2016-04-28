import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './guestsList.html';
import { Guests } from '../../../api/guests';
import { name as GuestAdd } from '../guestAdd/guestAdd';
import { name as GuestRemove } from '../guestRemove/guestRemove';

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
  GuestAdd,
  GuestRemove
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: GuestsList
});
