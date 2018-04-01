'use strict';

define('ui-pttrns/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/page-footer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-footer/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/page-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-header/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/sidebar/global-sidebar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sidebar/global-sidebar/component.js should pass ESLint\n\n');
  });

  QUnit.test('patterns/forms/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'patterns/forms/route.js should pass ESLint\n\n');
  });

  QUnit.test('patterns/landing/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'patterns/landing/route.js should pass ESLint\n\n');
  });

  QUnit.test('patterns/login/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'patterns/login/route.js should pass ESLint\n\n');
  });

  QUnit.test('patterns/onboarding/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'patterns/onboarding/route.js should pass ESLint\n\n');
  });

  QUnit.test('patterns/signup/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'patterns/signup/route.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('ui-pttrns/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ui-pttrns/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ui-pttrns/tests/helpers/start-app', 'ui-pttrns/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ui-pttrns/tests/helpers/resolver', ['exports', 'ui-pttrns/resolver', 'ui-pttrns/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('ui-pttrns/tests/helpers/start-app', ['exports', 'ui-pttrns/app', 'ui-pttrns/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ui-pttrns/tests/integration/components/page-footer/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('page-footer', 'Integration | Component | page footer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "VCSoF2mV",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"page-footer\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "sqnPwZXp",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"page-footer\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ui-pttrns/tests/integration/components/page-header/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('page-header', 'Integration | Component | page header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "mmSQR/2I",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"page-header\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "7Kcj6AyB",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"page-header\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ui-pttrns/tests/integration/components/sidebar/global-sidebar/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('sidebar/global-sidebar', 'Integration | Component | sidebar/global sidebar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "phDY+gtT",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"sidebar/global-sidebar\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "uKaaSB52",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"sidebar/global-sidebar\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ui-pttrns/tests/test-helper', ['ui-pttrns/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('ui-pttrns/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/page-footer/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/page-footer/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/page-header/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/page-header/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/sidebar/global-sidebar/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sidebar/global-sidebar/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/patterns/forms/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/patterns/forms/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/patterns/landing/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/patterns/landing/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/patterns/login/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/patterns/login/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/patterns/onboarding/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/patterns/onboarding/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/patterns/signup/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/patterns/signup/route-test.js should pass ESLint\n\n');
  });
});
define('ui-pttrns/tests/unit/patterns/forms/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:patterns/forms', 'Unit | Route | patterns/forms', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ui-pttrns/tests/unit/patterns/landing/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:patterns/landing', 'Unit | Route | patterns/landing', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ui-pttrns/tests/unit/patterns/login/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:patterns/login', 'Unit | Route | patterns/login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ui-pttrns/tests/unit/patterns/onboarding/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:patterns/onboarding', 'Unit | Route | patterns/onboarding', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ui-pttrns/tests/unit/patterns/signup/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:patterns/signup', 'Unit | Route | patterns/signup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('ui-pttrns/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
