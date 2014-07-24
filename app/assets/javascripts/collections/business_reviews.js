Kelp.Collections.BusinessReviews = Backbone.Collection.extend({
	model: Kelp.Models.Review,
	
	url: function() {
		return this.business.url() + "/reviews";
	},
	
	initialize: function (models, options) {
		this.business = options.business;
	}
});