import Ember from 'ember';

export default Ember.Controller.extend({
  date: new Date(),
  actions: {
    navigate: function(item){
      var url = 'http://localhost:8080/navigate/' + item;
      window.open(url, '_blank');
    }
  }
});
