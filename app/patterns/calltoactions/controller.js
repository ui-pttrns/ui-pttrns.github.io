import Ember from 'ember';
import {calltoactions} from '../../util/images-url';

export default Ember.Controller.extend({
  items: calltoactions,
});
