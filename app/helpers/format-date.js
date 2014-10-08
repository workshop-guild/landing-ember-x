/* global moment */
import Ember from 'ember';

function formatDate(date) {
  return moment(date).fromNow();
}

export {
  formatDate
};

export default Ember.Handlebars.makeBoundHelper(formatDate);
