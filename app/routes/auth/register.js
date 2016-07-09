import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    performRegistration() {
      alert('registration attempted');
    }
  },

  model() {
    return this.store.createRecord('user');
  }
});
