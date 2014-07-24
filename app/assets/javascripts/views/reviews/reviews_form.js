Kelp.Views.ReviewsForm = Backbone.ButtonFormView.extend({
	formTemplate: JST['reviews/form'],
	buttonTemplate: JST['reviews/form_button'],
	className: 'col-md-3',
	
	create: function(event) {
		event.preventDefault();
		var opts = $(event.target).serializeJSON();
		this.collection.create(opts, { wait: true });
	}
})