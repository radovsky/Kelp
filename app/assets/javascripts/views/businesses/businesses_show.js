Kelp.Views.BusinessesShow = Backbone.CompositeView.extend({
	template: JST['businesses/show'],
	
	tagName: 'li',
	
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