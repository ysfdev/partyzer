/*
import { Meteor } from 'meteor/meteor';
import { Guests } from './index.js';

if(Meteor.isServer){
  Meteor.methods({
    getTotalAllowedGuests: () => {
      alert('totalGuest Called');
        let query = [ {$group: {_id: null, totalOfGuests: {$sum: "$allowedGuests"}}} ];
        let result = Guests.aggregate(query);
        return result;
      }
  });
}

*/
