window.Kelp = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		Kelp.businesses = new Kelp.Collections.Businesses();
		Kelp.users = new Kelp.Collections.Users();
	
		var $rootEl = $('#content');
        var $mapEl = $('#map-canvas');
		new Kelp.Routers.AppRouter({root: $rootEl, map: $mapEl});
		Backbone.history.start();
	}
};