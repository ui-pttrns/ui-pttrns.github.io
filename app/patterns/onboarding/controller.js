import Controller from '@ember/controller';
import {onboarding} from '../../util/images-url';
import config from '../../config/environment';

export default Controller.extend({
  items: onboarding,
  init() {
  },
});
