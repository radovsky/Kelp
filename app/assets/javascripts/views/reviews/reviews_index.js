Kelp.Views.ReviewsIndex = Backbone.View.extend({
	template: JST['reviews/index'],
  
	initialize: function(options) {
		this.collection = options.collection;
	  
		this.listenTo(
			this.collection,
			'sync',
			this.render
		);
		
  	  this.listenTo(
  		  this.collection,
  		  "add",
  		  this.addReview
  	  );
	},
	
    addReview: function(review) {
  	  var reviewsShow = new Kelp.Views.ReviewsShow({
  		  model: review
  	  });
  	  this.addSubview('#reviews', reviewsShow);
    },
  
    render: function() {
  	  var that = this;
  	  var reviewsCollection = this.collection || [];
  	  var renderedContent = this.template({
  		  reviews: reviewsCollection
  	  });
  	  this.$el.html(renderedContent);
  	  this.attachSubviews();
  	  return this;
    }
});
