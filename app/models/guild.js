import DS from 'ember-data';

var attr = DS.attr;

var model = DS.Model.extend({
  name: attr('string'),
  desc: attr('string'),
  link: attr('string'),
  pic:  attr('string'),
  page: attr('string')
});

model.reopenClass({
  FIXTURES: (function(){
    var array = [];
    for ( var i = 0; i < 13; ++i ){
      var guild = {
        id: i,
        name: 'Workshop Guild',
        desc: 'The only guild that gives a shit',
        link: '//workshop-guild.github.io',
        pic: '//placehold.it/300',
        page: ''
      };
      array[i] = guild;
    }
    return array;
  })()
});

export default model;