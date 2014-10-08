import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('guild');
  },
  setupController: function(controller, model){
    controller.set('guilds', model);
  },
  actions: {
    didTransition: function(){
      document.title = 'Guilds';
    }
  }
});
