import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('user', 0);
  },
  actions: {
    didTransition: function(){
      document.title = 'Profile';
    }
  }
});
