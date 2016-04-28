import { Meteor } from 'meteor/meteor';
import { Guests } from '../imports/api/guests';

Meteor.startup(() =>  {
    if (Guests.find().count() === 0 ){
      const guests = [
              {
                'name': 'Yeramin',
                'allowedGuests': 3,
                'contact': '543-345-2342',
                'isConfirmed': false,
                'table': 4
              },
              {
                'name': 'Mark',
                'allowedGuests': 3,
                'contact': '543-345-2342',
                'isConfirmed': false,
                'table': 4
              },
              {
                'name': 'Michael',
                'allowedGuests': 2,
                'contact': '543-345-2342',
                'isConfirmed': false,
                'table': 8
              }
    ];

      guests.forEach((guest) => {
          Guests.insert(guest);
      });
    }
  });
