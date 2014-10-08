import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    editPage: function(){
      this.set('isEditing', true);
    },
    savePage: function(){
      this.set('isEditing', false);
    }
  }
});
