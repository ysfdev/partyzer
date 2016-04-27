import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './addGuest.html';
//import { Guests } from '../../../api/guests';
import { Guests } from '../../../../../collections/guests';



class AddGuest {
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

const name = 'addGuest';

// create a module
export default angular.module(name, [
  angularMeteor,
]).component(name, {
  templateUrl: `client/imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: AddGuest
});
