Kelp.Views.BusinessesIndex = Backbone.CompositeView.extend({
  template: JST['businesses/index'],
  
  initialize: function(options) {
	  this.collection = options.collection;
	  
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
  },
  
  addBusiness: function(business) {
	  var businessesShow = new Kelp.Views.BusinessesShow({
		  model: business
	  });
	  this.addSubview('#businesses', businessesShow);
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
