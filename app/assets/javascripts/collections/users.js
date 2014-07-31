Kelp.Collections.Users = Backbone.Collection.extend({
	url: 'users',
	
	model: Kelp.Models.User,
	
	getOrFetch: function(id, callback) {
		var users = this;
		var user;
		
		if (user = this.get(id)) {
			user.fetch();
		} else {
			user = new Kelp.Models.User({ id: id });
			user.fetch({
				success: function() {
					users.add(user);
                    callback();
				}
			});
		}
		return user;
	}
});