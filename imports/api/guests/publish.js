import { Meteor } from 'meteor/meteor';
import { Guests } from './collection';

if (Meteor.isServer) {
  Meteor.publish('guests', function(options, searchString) {
    const selector = {
      $or: [{
        // the public guests
        $and: [{
          public: true
        }, {
          public: {
            $exists: true
          }
        }]
      }, {
        // when logged in user is the owner
        $and: [{
          owner: this.userId
        }, {
          owner: {
            $exists: true
          }
        }]
      }]
    };

    if (typeof searchString === 'string' && searchString.length) {
        selector.name = {
            $regex: `.*${searchString}.*`,
            $options : 'i'
        }
    }

    return Guests.find(selector, options);

  });
}
