import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    performRegistration() {
      alert('registration attempted');
    }
  }
});
