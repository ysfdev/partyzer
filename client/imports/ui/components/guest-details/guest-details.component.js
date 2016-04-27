angular.module('party-manager').directive('guestDetails', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/guests/guests-details/guest-details.html',
    controllerAs: 'guestDetails',
    controller: function ($scope, $stateParams, $reactive){
      $reactive(this).attach($scope);

      this.helpers({
        guest: () => {
          return Guests.findOne({ _id: $stateParams.guestId });
        }
      });
      this.save = () => {
        Guests.update({ _id: $stateParams.guestId}, {
          $set:{
            name: this.guest.name,
            allowedGuests: this.guest.allowedGuests,
            contact: this.guest.contact
          }
        }, (error) => {
          if(error){
            console.log("Error while updating guest");
          }else{
            console.log("Guest Updated");
          }
        });
      };
    }
  }
});
