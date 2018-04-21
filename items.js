import { Mongo } from 'meteor/mongo';

export const Items = new Mongo.Collection('items');

export const toggleDeleted = new ValidatedMethod({
  name: 'toggleDeleted',
  validate: null,
  run() {
    if (!this.isSimulation) {
      const item = Items.findOne('dEKXyFJdbn9DYA7Sf');
      Items.update({ _id: 'dEKXyFJdbn9DYA7Sf' }, { $set: { deleted: !item.deleted } });
    }
  },
});