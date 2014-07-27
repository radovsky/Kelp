Kelp.Views.BusinessesIndex = Backbone.CompositeView.extend({
	template: JST['businesses/index'],
	
	
  
	initialize: function() {
		this.listenTo(
			this.collection,
			"sync",
			this.render
		);
	  
		this.listenTo(
			this.collection,
			"add",
			this.addBusiness
		);
		
		var businessFilter = new Kelp.Views.BusinessesFilter({
			collection: this.collection
		});
		this.addSubview('#filters', businessFilter);
		
		var newBusinessButton = new Kelp.Views.BusinessesForm({
			collection: this.collection,
			model: new Kelp.Models.Business()
		});
		this.addSubview('#new-business-button', newBusinessButton);
		
		this.collection.each(this.addBusiness.bind(this));
	},
	
	
  
	addBusiness: function(business) {
		var businessesItem = new Kelp.Views.BusinessesItem({
			model: business
		});
		this.addSubview('#businesses', businessesItem);
	},
  
	render: function() {
		var that = this;
		var businessesCollection = this.collection || [];
		var renderedContent = this.template({
			businesses: businessesCollection
		});
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	}
});
