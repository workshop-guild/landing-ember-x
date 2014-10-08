import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findAll('guild')
      .then(function(guilds){
        return guilds.findBy('id', params.guild_id);
      });
  },
  afterModel: function(model){
    this.set('model', model);
  },
  actions: {
    didTransition: function(){
      document.title = 'Guild ' + this.get('model').id;
    }
  }
});
