Kelp.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		'': 'businessesIndex'
	},
	
	initialize: function($rootEl) {
		this.$roolEl = $rootEl;
	},
	
	_swapView: function(newView) {
		if (this._currentView) this._currentView.remove();
		$('#content').html(newView.render().$el);
		this._currentView = newView;
	},
	
	businessesIndex: function() {
		var businessesIndexView = new Kelp.Views.BusinessesIndex({
			collection: Kelp.businesses
		});
		Kelp.businesses.fetch();
		this._swapView(businessesIndexView);
	}
});