Kelp.Views.BusinessesFilter = Backbone.View.extend({
	template: JST['businesses/filter'],
	
	render: function() {
		var renderedContent = this.template({
			business: this.model
		});
		this.$el.html(renderedContent);
		return this;
	}
});