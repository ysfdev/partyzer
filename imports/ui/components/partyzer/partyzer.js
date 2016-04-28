import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './partyzer.html';
import { name as GuestsList } from '../guestsList/guestsList';


class Partyzer {}

const name = 'partyzer';

// create a module
export default angular.module(name, [
  angularMeteor,
  GuestsList
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Partyzer
});
