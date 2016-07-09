import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    performRegistration() {
      this.get('currentModel').save().then(() => {
        this.transitionTo('auth.login');
      });
    }
  },

  model() {
    return this.store.createRecord('user');
  }
});
