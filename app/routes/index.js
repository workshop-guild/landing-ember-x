import Ember from 'ember';

var route = Ember.Route.extend({
  model: function(){
    return Ember.A();
  },
  setupController: function(controller, model){
    controller.set('model', model);
    /* global io */
    var socket = io('http://localhost:8080/stream');
    socket.on('hi', function(data){
      controller.get('model').pushObject({
        name: data.hello
      });
    });
  },
  actions: {
    didTransition: function(){
      document.title = 'Home';
    }
  }
});

export default route;