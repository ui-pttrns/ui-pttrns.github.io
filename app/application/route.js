import Route from '@ember/routing/route';
import Analytics from 'analytics'
import fullStoryPlugin from '@analytics/fullstory'

export default Route.extend({
  init() {
    this._super(...arguments);
    Analytics({
      app: 'ui',
      plugins: [
        fullStoryPlugin({
          /* org name from Full Story settings */
          org: 'G2G98'
        })
      ]
    })
  },
});
