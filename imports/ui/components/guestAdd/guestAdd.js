import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import './guestAdd.html';
import { Guests } from '../../../api/guests/index';

class GuestAdd {
  constructor() {
    this.guest = {};
  }

  submit() {
    this.guest.owner = Meteor.user()._id;
    if(this.areValidInputs()) {
        Guests.insert(this.guest);
        this.reset();
    }
  }

  areValidInputs() {
     this.formatInputs();
     return (this.guest.name && this.guest.allowedGuests && this.guest.table) !== undefined
  }

  formatInputs() {
      this.guest.name = this.guest.name[0].toUpperCase() + this.guest.name.substring(1);
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
