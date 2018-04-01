import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sidebar/global-sidebar', 'Integration | Component | sidebar/global sidebar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sidebar/global-sidebar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sidebar/global-sidebar}}
      template block text
    {{/sidebar/global-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
