import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    let patterns = this.store.peekAll('patterns'); // => NO GET /patterns
    return EmberObject.create( {
      patterns: patterns
    })
  },
});
