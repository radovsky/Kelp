Kelp.Views.ReviewsShow = Backbone.View.extend({
	template: JST['reviews/show'],
	
	tagname: 'li',
	
	initialize: function() {
		this.listenTo(
			this.model,
			'sync',
			this.render
		);
	},
	
	render: function() {
		var renderedContent = this.template({
			review: this.model
		});
		this.$el.html(renderedContent);
		return this;
	}
});