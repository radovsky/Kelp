Kelp.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		'': 'businessesIndex',
		'businesses/:id': 'businessesShow',
		'users': 'usersIndex',
		'users/:id': 'usersShow',
		// 'reviews': 'reviewsIndex',
		// 'reviews': 'reviewsShow'
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
	},
	
	businessesShow: function(id) {
		var business = Kelp.businesses.getOrFetch(id);
		var businessShowView = new Kelp.Views.BusinessesShow({
			model: business
		});
		this._swapView(businessShowView);
	},
	
	usersIndex: function() {
		var usersIndexView = new Kelp.Views.UsersIndex({
			collection: Kelp.users
		});
		Kelp.users.fetch();
		this._swapView(usersIndexView);
	},
	
	usersShow: function(id) {
		var user = Kelp.users.getOrFetch(id);
		var userShowView = new Kelp.Views.UsersShow({
			model: user
		});
		this._swapView(userShowView);
	},
	
	// reviewsIndex: function() {
	// 	var reviewsIndexView = new Kelp.Views.ReviewsIndex({
	// 		collection: Kelp.reviews
	// 	});
	// 	Kelp.reviews.fetch();
	// 	this._swapView(reviewsIndexView);
	// },
	//
	// reviewsShow: function(id) {
	// 	var review = Kelp.reviews.getOrFetch(id);
	// 	var reviewShowView = new Kelp.Views.ReviewsShow({
	// 		model: review
	// 	});
	// 	this._swapView(reviewShowView);
	// }
});