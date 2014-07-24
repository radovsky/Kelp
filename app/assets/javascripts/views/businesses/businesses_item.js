Kelp.Views.BusinessesItem = Backbone.View.extend({
	template: JST['businesses/item'],
	
	tagName: 'li',
	
	initialize: function() {
		
		this.listenTo(
			this.model,
			'sync',
			this.render
		);
	},
	
	render: function() {
		var renderedContent = this.template({
			business: this.model
		});
		this.$el.html(renderedContent);
		return this;
	}
});