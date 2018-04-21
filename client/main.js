import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Items, toggleDeleted } from '../items';
import './main.html';

Template.main.onCreated(function mainOnCreated() {
  this.subscribe('allItems');
  this.subscribe('singleItem');
});

Template.main.helpers({
  items() {
    return Items.find();
  },
});

Template.main.events({
  'click .js-toggle'(event) {
    event.preventDefault();
    toggleDeleted.call();
  },
});

