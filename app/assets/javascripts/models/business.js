Kelp.Models.Business = Backbone.Model.extend({
	urlRoot: 'api/businesses',
	
	parse: function(jsonResp) {
		if (jsonResp.reviews) {
			this.reviews().set(jsonResp.reviews, { parse: true });
		}
		return jsonResp;
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
