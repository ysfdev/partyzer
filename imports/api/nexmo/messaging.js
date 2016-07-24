import easynexmo from  'easynexmo';
import { Meteor } from 'meteor/meteor';


if(Meteor.isServer){
  const nexmo = require('easynexmo');
  const FROM_NUMBER = process.env.FROM_NUMBER || '';
  const KEY = process.env.NEXMO_KEY || '';
  const SECRET = process.env.NEXMO_SECRET || '';

  nexmo.initialize(KEY, SECRET);

  Meteor.publish('sendMessage', function(recepient, message){
    nexmo.sendTextMessage(FROM_NUMBER, recepient, message);
    console.log('Message Sent');
  });
}
