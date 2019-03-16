import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('patterns', function() {
    this.route('onboarding');
    this.route('landing');
    this.route('forms');
    this.route('login');
    this.route('signup');
    this.route('404');
    this.route('calltoactions');
    this.route('loading');
    this.route('betalaunch');
    this.route('modal');
  });
});

export default Router;
