import DS from 'ember-data';

export default DS.Model.extend({
    name:  DS.attr(),
    label: DS.attr(),
    url:   DS.attr(),
    kind:  DS.attr()
});
