Kelp.Views.BusinessesShow = Backbone.CompositeView.extend({
	template: JST['businesses/show'],
	
	initialize: function() {
		
		this.listenTo(
			this.model,
			'sync',
			this.render
		);
		
		this.listenTo(
			this.model.reviews(),
			'add',
			this.addReview
		);
	
		var businessReviews = new Kelp.Collections.BusinessReviews([], {
			business: this.model
		});
		var newReviewButton = new Kelp.Views.ReviewsForm({
			collection: businessReviews,
			business: this.model
		});
		
		this.model.reviews().each(this.addReview.bind(this));
		this.addSubview('#new-review-button', newReviewButton);
	},
	
	addReview: function(review) {
		var reviewsShow = new Kelp.Views.ReviewsShow({
			model: review
		});
		this.addSubview('.reviews', reviewsShow);
	},
	
	render: function() {
		var renderedContent = this.template({
			business: this.model
		});
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	}
});