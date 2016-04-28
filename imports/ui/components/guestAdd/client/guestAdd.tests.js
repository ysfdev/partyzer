import { name as GuestAdd } from '../guestAdd';
import { Guests } from '../../../../api/guests';
import 'angular-mocks';

describe('GuestAdd', () => {
  beforeEach(() => {
    window.module(GuestAdd);
  });

  describe('controller', () => {
    let controller;
    const guest = {
      name: 'Michael',
      allowedGuests: 2,
      contact: '543-345-2342',
      isConfirmed: false,
      table: 8
    };
  beforeEach(() => {
    inject(($rootScope, $componentController) => {
      controller = $componentController(GuestAdd, {
        $scope: $rootScope.$new(true)
      });
    });
  });

  describe('reset()', () => {
    it('should clean up guest object', () => {
      controller.guest = guest;
      controller.reset();

      expect(controller.guest).toEqual({});
    });
  });

  describe('submit', () => {
    beforeEach(() => {
      spyOn(Guests, 'insert');
      spyOn(controller, 'reset').and.callThrough();

      controller.guest = guest;

      controller.submit();
    });

    it('should insert a new guest', () => {
      expect(Guests.insert).toHaveBeenCalledWith(guest);
    });

    it('should call reset()', () => {
      expect(controller.reset).toHaveBeenCalled();
      });
    });
  });
});
