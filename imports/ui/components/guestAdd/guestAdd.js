import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './guestAdd.html';
import { Guests } from '../../../api/guests';

class GuestAdd {
  constructor(){
    this.guest = {};
  }

  submit(){
    Guests.insert(this.guest);
    this.reset();
    console.log('new guest added');
  }

  reset() {
    this.guest = {};
  }
}

const name = 'guestAdd';

// create a module
export default angular.module(name, [
  angularMeteor,
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: GuestAdd
});
