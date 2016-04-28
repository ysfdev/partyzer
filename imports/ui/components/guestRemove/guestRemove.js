import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './guestRemove.html';
import { Guests } from '../../../api/guests';

class GuestRemove {
  constructor(){
    this.guest = {};
  }

  remove(){
    if (this.guest){
      Guests.remove(this.guest._id);
      console.log('guest deleted added');

    }
  }
}

const name = 'guestRemove';

// create a module
export default angular.module(name, [
  angularMeteor,
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  bindings:{
    guest: '<'
  },
  controllerAs: name,
  controller: GuestRemove
});
