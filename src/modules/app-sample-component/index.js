module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),

    getInitialState: function(input, out) {
        return {
            name: input.name
        }
    },

    getTemplateData: function(state, input) {
        return {
            name: state.name
        };
    },

    init: function(config) {
        this.bindEventListeners();
    },

    bindEventListeners: function() {
        $(this.el).on('click', function(event) {
            console.log(event.target);
        });
    }
});