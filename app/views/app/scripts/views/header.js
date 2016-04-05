/*global Officials, Backbone, JST*/

Officials.Views = Officials.Views || {};

(function () {
  'use strict';

  Officials.Views.Header = Backbone.View.extend({

    template: JST['app/scripts/templates/header.ejs'],

    el: 'header',

    events: {},

    initialize: function () {
      this.render()
    },

    render: function () {
      this.$el.html(this.template());
    },

    afterRender: function() {
      $('.modal-trigger').leanModal();
    }

  });

})();
