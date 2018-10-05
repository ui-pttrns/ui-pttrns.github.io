import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
  modalService: Ember.inject.service('modal'),

  model: Ember.computed.alias('modalService.modalOpts'),

  actions: {
    close() {
      this.send('cancel');
    }
  }
});
