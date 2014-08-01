Kelp.Views.ReviewsForm = Backbone.ButtonFormView.extend({
	formTemplate: JST['reviews/form'],
	buttonTemplate: JST['reviews/form_button'],
	className: 'col-sm-12',
	
	initialize: function(options) {
		this.business = options.business;
		this.collection = options.collection;
	},
	
	create: function(event) {
		event.preventDefault();
		var opts = $(event.target).serializeJSON();
		opts.business_id = this.business.id;
		this.collection.create(opts, { wait: true });
	}
});