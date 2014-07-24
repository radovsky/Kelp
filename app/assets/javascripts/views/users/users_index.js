Kelp.Views.UsersIndex = Backbone.CompositeView.extend({
	template: JST['users/index'],

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
			this.addUser
		);
	},
	
    addUser: function(user) {
  	  var usersShow = new Kelp.Views.UsersShow({
  		  model: user
  	  });
  	  this.addSubview('#users', usersShow);
    },
	
	render: function() {
		var that = this;
		var usersCollection = this.collection || [];
		var renderedContent = this.template({
			users: usersCollection
		});
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	}
});
