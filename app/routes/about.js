import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function(){
      document.title = 'About';
    }
  }
});
