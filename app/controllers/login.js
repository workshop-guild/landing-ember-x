import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

var controller = Ember.Controller.extend(LoginControllerMixin);
controller.reopen({
  model: {},
  authenticator: 'authenticator:custom'
});

export default controller;
