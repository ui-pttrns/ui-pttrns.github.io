import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
  modalService: Ember.inject.service('modal'),

  actions: {
    openModal(itemurl){
            this.get('modalService').toggleModal('modal-full-screen', itemurl);
        },
  }
});
