import easynexmo from  'easynexmo';
import { Meteor } from 'meteor/meteor';


const nexmo = require('easynexmo');
const FROM_NUMBER = process.env.FROM_NUMBER || '';
const KEY = process.env.NEXMO_KEY || '';
const SECRET = process.env.NEXMO_SECRET || '';

nexmo.initialize(KEY, SECRET);

export function sendMessage(recepient, message){
  nexmo.sendTextMessage(FROM_NUMBER, recepient, message);
  console.log('Message Sent');
}
