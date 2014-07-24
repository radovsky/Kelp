Backbone.ButtonFormView = Backbone.View.extend({
	formShowing: false,
	
	events: {
		'click button': 'showForm',
		'click .close': 'hideForm',
		'submit': 'create',
		'keydown textarea': 'createOnEnter'
	},
	
	render: function() {
		var content;
		if (this.formShowing) {
			content = this.formTemplate();
		} else {
			content = this.buttonTemplate();
		}
		this.$el.html(content);
		this.delegateEvents();
		return this;
	},
	
	hideForm: function () {
		this.formShowing = false;
		this.render();
	},
	
	showForm: function(event) {
		event.preventDefault();
		this.formShowing = true;
		this.render();
	},
	
	createOnEnter: function(event) {
		if(event.keyCode === 13) this.create(event);
	}
});