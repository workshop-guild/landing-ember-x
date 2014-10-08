import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import ENV from 'landing-ember-x/config/environment';

var authenticator = Base.extend({
  authenticate: function(credentials){
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url:         ENV.authenticationServerURL + '/login',
        type:        'POST',
        data:        JSON.stringify({ email: credentials.identification, password: credentials.password }),
        contentType: 'application/json'
      }).then(
        function(response) { // success
          Ember.run(function() {
            console.info('app.js resolved with', response);
            resolve(response);
          });
        },
        function(xhr, status, error) { // fail
          console.log(status, error);
          var response = JSON.parse(xhr.responseText);
          Ember.run(function() {
            reject(response);
          });
        }
      );
    });
  }
});

export default {
  name: 'authentication',
  before: 'simple-auth',
  initialize: function(container /*, application*/){
    container.register('authenticator:custom', authenticator);
  }
};