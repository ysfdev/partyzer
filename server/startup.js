import { Meteor } from 'meteor/meteor';
//import { Guests } from '../collections/guests';

Meteor.startup(() =>  {
    if (Guests.find().count() === 0 ){
      const guests = [
              {
                'name': 'Yeramin',
                'allowedGuests': 3,
                'contact': '543-345-2342',
                'confirmationStatus': 'not confirmed',
                'table': 4
              },
              {
                'name': 'Mark',
                'allowedGuests': 3,
                'contact': '543-345-2342',
                'confirmationStatus': 'not confirmed',
                'table': 4
              },
              {
                'name': 'Michael',
                'allowedGuests': 2,
                'contact': '543-345-2342',
                'confirmationStatus': 'not confirmed',
                'table': 8
              }
    ];

      guests.forEach((guest) => {
          Guests.insert(guest);
      });
    }
  });
