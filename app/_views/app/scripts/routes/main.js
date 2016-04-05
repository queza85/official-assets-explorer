/*global define*/

define([
  'jquery',
  'backbone-query-parameters',
  '../views/header',
  '../views/nav',
  '../views/officials',
  '../views/official',
  '../views/search',
  '../views/about',
  '../views/contact'
], function ($, _query_params, HeaderView, NavView, OfficialsView, OfficialView, SearchView, AboutView, ContactView) {
  'use strict'

  var MainRouter = Backbone.Router.extend({
    routes: {
      ''          : 'main',
      'about'     : 'about',
      'contact'   : 'contact',
      'officials' : 'officials',
      ':id'       : 'official'
    },

    initialize: function() {
      if (!this.navView) {
        this.navView = new NavView()
      }
    },

    main: function(params) {
      if (!this.headerView) {
        this.headerView = new HeaderView()
      }

      if (this.officialView) {
        this.officialView.destroy()
      }

      if (!$('header').is(':visible')) {
        $('header').show()
      }

      if (!$('#search').is(':visible')) {
        $('#search').show()
      }

      if (params) {
        this.searchView = new SearchView(params)
      } else {
        this.searchView = new SearchView()
      }
    },

    official: function(id, params) {
      $('header').hide()
      $('#search').hide()

      // if (params) {
      //   this.searchView = new SearchView(params)
      // } else {
      //   this.searchView = new SearchView()
      // }

      if (!this.headerView) {
        this.headerView = new HeaderView()
      }

      if (this.officialView) {
        this.officialView.destroy()
      }

      this.officialView = new OfficialView({ uniqueId: id })
    },

    about: function() {
      $('#search').hide()
      this.headerView = new HeaderView()
      this.aboutView = new AboutView()
    },

    contact: function() {
      $('#search').hide()
      this.headerView = new HeaderView()
      this.contactView = new ContactView()
    }

  })

  return MainRouter
})