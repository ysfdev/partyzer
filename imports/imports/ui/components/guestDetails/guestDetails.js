import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import './guestDetails.html';
import { Guests } from '../../../api/guests/index';

class GuestDetails {
  constructor($stateParams, $scope, $reactive){
    'ngInject';
    this.status = "";
    $reactive(this).attach($scope);

    //attach the current allow user's list to the view
    this.subscribe('guests');

    this.guestId = $stateParams.guestId;

    this.helpers({
      guest(){
        return Guests.findOne({
          _id: $stateParams.guestId
        });
      }
    });
  }

  save(){
    Guests.update({
      _id: this.guest._id
    }, {
      $set:{
        name: this.guest.name,
        contact: this.guest.contact,
        allowedGuests: this.guest.allowedGuests,
        table: this.guest.table,
        isConfirmed: false
    }
  },(error) => {
      if(error){
        console.log("Error. Unable to save the guest...");
      }else{
        console.log('Guest Updated');
        this.status = "Guest Succesfully Updated";
      }
    });
  }
}

const name = 'guestDetails';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  templateUrl: `imports/ui/components/${name}/${name}.html`,
  controllerAs: name,
  controller: GuestDetails
})
  .config(config);

function config($stateProvider){
  'ngInject';
  $stateProvider
    .state('guestDetails',{
      url: '/guests/:guestId',
      template: '<guest-details></guest-details>',
      resolve: {
        currentUser($q) {
          if(Meteor.userId() === null){
            return $q.reject('AUTH_REQUIRED');
          }else{
            return $q.resolve();
          }
        }
      }
  });
}
