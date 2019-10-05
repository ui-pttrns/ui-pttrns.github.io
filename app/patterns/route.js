import Route from '@ember/routing/route';
import config from '../config/environment';
import Ember from 'ember';

export default Route.extend({
    model() {
      Ember.$.getJSON(config.rootURL+'assets/api.json').then((response)=>{
        this.store.push(response);
       })
    },
});
