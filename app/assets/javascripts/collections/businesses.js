Kelp.Collections.Businesses = Backbone.Collection.extend({
	url: "/api/businesses",
	
	model: Kelp.Models.Business,
	
	getOrFetch: function(id) {
		var businesses = this;
		var business;
		
		if (business = this.get(id)) {
			business.fetch();
		} else {
			business = new Kelp.Models.Business({ id: id });
			business.fetch({
				success: function() {
					businesses.add(business);
				}
			});
		}
		return business;
	}
});
