Kelp.Views.BusinessesIndex = Backbone.View.extend({
  template: JST['businesses/index'],
  
  initialize: function(options) {
	  this.collection = options.collection;
	  
	  this.listenTo(
		  this.collection,
		  "sync",
		  this.render
	  );
  },
  
  render: function() {
	  var that = this;
	  var businessesCollection = this.collection || [];
	  var renderedContent = this.template({
		  businesses: businessesCollection
	  });
	  this.$el.html(renderedContent);
	  
	  return this;
  }
});
