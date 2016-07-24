import { name as GuestRemove } from '../guestRemove';
import { Guests } from '../../../../api/guests';
import 'angular-mocks';

describe('GuestRemove', () => {
  beforeEach(() => {
    window.module(GuestRemove);
  });

  describe('controller', () => {
    let controller;
    const guest = {
    _id: 'guestId'
    };

  beforeEach(() => {
    inject(($rootScope, $componentController) => {
      controller = $componentController(GuestRemove, {
        $scope: $rootScope.$new(true)
      }, {
        guest
      });
    });
  });

  describe('remove()', () => {
    beforeEach(() => {
      spyOn(Guests, 'remove');
      controller.remove();
    });

    it('should remove a guest', () => {
      expect(Guests.remove).toHaveBeenCalledWith(guest._id);
      });
    });
  });
});
