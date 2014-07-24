Kelp.Views.BusinessesForm = Backbone.ButtonFormView.extend({
	formTemplate: JST['businesses/form'],
	buttonTemplate: JST['businesses/form_button'],
	className: 'col-md-3',
	
	create: function(event) {
		event.preventDefault();
		var opts = $(event.target).serializeJSON();
		this.collection.create(opts, { wait: true });
		// this.$('.name').val('');
		// this.$('.location').val('');
		// this.$('.description').val('');
		// this.$('.num_stars').val('');
		// this.$('.price_range').val('');
		// this.$('.name').focus();
	}
});