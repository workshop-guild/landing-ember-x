import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editProfile: function(){
      this.set('isEditing', true);
    },
    uploadImage: function(){
      var input = Ember.$('<input>');
      input.attr('type', 'file');
      input.click();
    },
    updateProfile: function(){
       this.get('model').save();
       this.set('isEditing', false);
    }
  }
});
