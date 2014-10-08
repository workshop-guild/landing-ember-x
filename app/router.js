import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('guilds', function(){
    this.route('guild', { path: '/:guild_id' });
  });
  this.route('login');
  this.route('register');
  this.route('about');
  this.route('profile');
  this.route('guilds/guild');
});

export default Router;
