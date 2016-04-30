import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import './guestAdd.html';
import { Guests } from '../../../api/guests/index';

class GuestAdd {
  constructor(){
    this.guest = {};
  }

  submit(){
    this.guest.owner = Meteor.user()._id;
    Guests.insert(this.guest);
    this.reset();
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
