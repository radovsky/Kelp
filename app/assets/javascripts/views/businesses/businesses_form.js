Kelp.Views.BusinessesForm = Backbone.ButtonFormView.extend({
	formTemplate: JST['businesses/form'],
	buttonTemplate: JST['businesses/form_button'],
	className: 'col-md-3',
	
	events: _(Backbone.ButtonFormView.prototype.events).extend({
		"change #avatar": 'handleFile'
	}),
	
	handleFile: function(event) {
		
		console.log("I suck at handling files");
		var file = event.currentTarget.files[0];
		var view = this;
		var reader = new FileReader();
		reader.onload = function(e) {
			view.model.set('avatar', this.result);

		};
		reader.readAsDataURL(file);
	},
	
	create: function(event) {
		event.preventDefault();
		var opts = $(event.target).serializeJSON();
		this.model.set(opts, { wait: true });
		this.model.save({}, {
			error: function(model, response) {
				alert(response.responseText);
			}
		});
		// this.$('.name').val('');
		// this.$('.location').val('');
		// this.$('.description').val('');
		// this.$('.num_stars').val('');
		// this.$('.price_range').val('');
		// this.$('.name').focus();
	}
	
	
});