Kelp.Views.BusinessesItem = Backbone.View.extend({
	template: JST['businesses/item'],
	
	tagName: 'li',
	
	className: 'businesses-item col-sm-12 col-md-6',
	
	initialize: function() {
		
		this.listenTo(
			this.model,
			'sync',
			this.render
		);
	},
	
	render: function() {
        debugger;
		var renderedContent = this.template({
			business: this.model
            
		});
		this.$el.html(renderedContent);
		return this;
	}
});