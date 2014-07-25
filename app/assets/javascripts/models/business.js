Kelp.Models.Business = Backbone.Model.extend({
	urlRoot: 'api/businesses',
	
	parse: function(jsonResponse) {
		if (jsonResponse.reviews) {
			this.reviews().set(jsonResponse.reviews, { parse: true });
		}
		return jsonResponse;
	},

	reviews: function() {
		if (!this._reviews) {
			this._reviews = new Kelp.Collections.BusinessReviews([], {
				business: this 
			});
		}
		return this._reviews;
	}
});