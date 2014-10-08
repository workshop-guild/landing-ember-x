import DS from 'ember-data';

var attr = DS.attr;

var model = DS.Model.extend({
  username: attr('string'),
  avatarURL: attr('string'),
  firstname: attr('string'),
  lastname: attr('string'),
  role: attr('string'),
  profile: attr('string'),
  introduction: attr('string'),
  details: attr('string' )
});

model.reopenClass({
  FIXTURES: (function(){
    var array = [];
    for ( var i = 0; i < 20; ++i ){
      var user = {
        id: i,
        username: 'neonaleon',
        avatarURL: '//placehold.it/128x128',
        firstname: 'Leon',
        lastname: 'Ho',
        role: 'Programmer',
        profile: '',
        introduction: '',
        details: ''
      };
      array[i] = user;
    }
    return array;
  })()
});

export default model;
