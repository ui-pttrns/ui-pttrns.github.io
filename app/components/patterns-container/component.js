import Ember from 'ember';
import Component from '@ember/component';
import MagicGrid from 'magic-grid';

export default Component.extend({
  modalService: Ember.inject.service('modal'),

  loading: true,
  magicGrid: null,

  didInsertElement() {
    this._super(...arguments);

    let magicGrid = new MagicGrid({
      container: ".grid", // Required. Can be a class, id, or an HTMLElement
      animate: true,
      gutter: 18,
      static: true,
      items: this.get('items').length,
      useMin: true,
      useTransform: false
  });
  this.set('magicGrid',magicGrid);
  magicGrid.listen();
  },
  actions: {
    openModal(itemurl){
      this.get('modalService').toggleModal('modal-full-screen', itemurl);
    },
    placeholder() {
      this.set('loading', false);
      this.get('magicGrid').listen();
    },
  }
});
