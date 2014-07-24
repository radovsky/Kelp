Kelp.Collections.UserReviews = Backbone.Collection.extend({
	model: Kelp.Models.Review,
	
	url: function() {
		return this.user.url() + "/reviews";
	},
	
	initialize: function (models, options) {
		this.user = options.user;
	}
});