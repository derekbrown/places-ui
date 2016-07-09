import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    performLogin() {
      alert('login attempted');
    }
  }
});
