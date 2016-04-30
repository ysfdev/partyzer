import { Mongo } from 'meteor/mongo';

export const Guests = new Mongo.Collection('guests');

Guests.allow({
  insert(userId, guest) {
    return userId && guest.owner === userId;
  },
  update(userId, guest, fields, modifier) {
    return userId && guest.owner === userId;
  },
  remove(userId, guest) {
    return userId && guest.owner === userId;
  }
});
