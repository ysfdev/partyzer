import { name as GuestDetails } from '../guestDetails';
import { Guests } from '../../../../api/guests';
import 'angular-mocks';

describe('GuestDetails', () => {
  beforeEach(() => {
    window.module(GuestDetails);
  });

  describe('controller', () => {
    let controller;
    const guest = {
      _id: 'guestId',
      name: 'Michael',
      allowedGuests: 2,
      contact: '543-345-2342',
      isConfirmed: false,
      table: 8
    };

  beforeEach(() => {
    inject(($rootScope, $componentController) => {
      controller = $componentController(GuestDetails, {
        $scope: $rootScope.$new(true)
      });
    });
  });

  describe('save()', () => {
    beforeEach(() => {
      spyOn(Guests, 'update');
      controller.guest = guest;
      controller.save();
  });

    it('should update a guest', () => {
      expect(Guests.save.calls.mostRecent().args[0]).toEqual({
        _id: guest._id
      });
    });

    it('should update with proper modifier', () => {
      expect(Guests.update.calls.mostRecent().args[1]).toEqual({
          $set:{
            name: guest.name,
            contact: guest.contact,
            allowedGuests: guest.allowedGuests,
            table: guest.table,
            isConfirmed: false
          }
        });
      });
    });
  });
});
