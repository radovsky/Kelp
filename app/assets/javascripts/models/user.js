Kelp.Models.User = Backbone.Model.extend({
	urlRoot: 'users',
	
	parse: function(jsonResponse) {
		if (jsonResponse.reviews) {
			this.reviews().set(jsonResponse.reviews, { parse: true });
		}
		return jsonResponse;
	},

	reviews: function() {
		if (!this._reviews) {
			this._reviews = new Kelp.Collections.UserReviews([], {
				user: this
			});
		}
		return this._reviews;
	}
});