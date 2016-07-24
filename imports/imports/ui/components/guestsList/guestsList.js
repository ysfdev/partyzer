import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import './guestsList.html';
import { Guests } from '../../../api/guests/index';
//import { Parties } from '../../../api/guests/index';
//import { SMS } from '../../../api/nexmo/messaging';
import { name as GuestAdd } from '../guestAdd/guestAdd';
import { name as GuestRemove } from '../guestRemove/guestRemove';

class GuestsList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.sentStatus = "";
    this.totalGuestsCount = 0 ;
    this.perPage = 3;
    this.page = 1;
    this.sort = {
      name: 1
    }
    //alert(this.totalAllowedGuests());
    //this.totalAllowedGuests();
    //attach the current user's list allowed to the view
    this.subscribe('guests', () => [{
      limit: parseInt(this.perPage),
      skip: parseInt((this.getReactively('page') - 1) * this.perPage),
      sort: this.getReactively('sort')}
  ]);
  
    this.helpers({
      guests() {
        return Guests.find({}, {
          sort : this.getReactively('sort')
        });
      }
    });
  }

  totalAllowedGuests() {
    let query = [ {$group: {_id: null, totalOfGuests: {$sum: "$allowedGuests"}}} ];
    let result = Guests.aggregate(query);
    this.totalGuestsCount = result;
    alert(result);
    return result;
      //return Guests.find({});
    //return Meteor.call('getTotalAllowedGuests');
    }

/*
  sendInvitations() {
    this.sentStatus = "Sending invitation to Guests";
    for(let guest of this.guests){
      if(!(guest.isConfirmed)){
        let invitation_message =
        `Hello, ${guest.name} below is the information for the upcoming event:\n
        Allowed Guests: ${guest.allowedGuests},\n
        Reserved Table: ${guest.table}.\n
        Reply with 'accept' to confirm your invitation.`;

        try{
          Meteor.call('sendMessage',guest.contact, invitation_message);
          console.log(`Invitation sent for delivery to ${guest.contact}`);
        }catch (exception){
          console.log(`Found error while sending invitations. Error: ${exception}`);
        }
      }
    }
  }
  */
}

const name = 'guestsList';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  GuestAdd,
  GuestRemove,
  utilsPagination
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
