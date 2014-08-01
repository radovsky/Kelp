Kelp.Views.ReviewsShow = Backbone.View.extend({
	template: JST['reviews/show'],
	
	tagname: 'li',

	className: "list-group-item",
	
	initialize: function() {
		
		this.user = Kelp.users.getOrFetch(
			this.model.attributes.user_id
		);
		
		this.listenTo(
			this.model,
			'sync',
			this.render
		);
		
		this.listenTo(
			this.user,
			'sync',
			this.render);
	},
	
	render: function() {
		var renderedContent = this.template({
			review: this.model,
			user: this.user
		});
		this.$el.html(renderedContent);
		return this;
	}
});