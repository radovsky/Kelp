Kelp.Models.User = Backbone.Model.extend({
	urlRoot: 'api/users',
	
	parse: function(jsonResp) {
		if (jsonResp.reviews) {
			this.reviews().set(jsonResp.reviews, { parse: true });
		}
	},

	reviews: function() {
		if (!this._reviews) {
			this._reviews = new Kelp.Collections.UserReviews(
				[],
				{ user: this }
			);
		}
		return this._reviews;
	}
});
