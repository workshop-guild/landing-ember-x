import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  password: '',

  actions: {
    register: function(){
      var _this = this;
      Ember.$.ajax('http://localhost:8080/register', {
        type: 'POST',
        dataType: 'json',
        data: {
          email: _this.get('email'),
          password: _this.get('password')
        }
      })
      .done(function(){
        _this.transitionToRoute('/');
      })
      .fail(function(){
      });
    }
  }
});
