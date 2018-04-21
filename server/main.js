import { Meteor } from 'meteor/meteor';
import { Items } from '../items';

const defaultItem = {
  _id: 'dEKXyFJdbn9DYA7Sf',
  text: 'Hello world',
  deleted: false,
};

// Seed with default item
Meteor.startup(() => {
  if (!Items.findOne(defaultItem._id)) {
    Items.insert(defaultItem);
  }
})

Meteor.publish('allItems', function allItemsPublish() {
  return Items.find({ deleted: false });
});

Meteor.publish('singleItem', function singleItemPublish() {
  const pub = this;

  pub.autorun(() => {
    const item = Items.findOne(defaultItem._id);
    // Would usually run some logic on `item` here using collection helpers
    // and use that to decide what else or what fields we'd want to publish.
    return Items.find({ _id: defaultItem._id, deleted: false });
  });
});