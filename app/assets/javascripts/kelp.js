window.Kelp = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		window.onload = function() {
			Kelp.businesses = new Kelp.Collections.Businesses();
			Kelp.users = new Kelp.Collections.Users();
		
			var $rootEl = $('#content');
	        var $mapEl = $('#map-canvas');
			Kelp.mainRouter = new Kelp.Routers.AppRouter({
	            root: $rootEl, map: $mapEl
	        });
			Backbone.history.start();
		};
	}
};

$(function(){
    var modalView = new Kelp.Views.BusinessesModalForm({
        collection: Kelp.businesses,
        model: new Kelp.Models.Business()
    });
    $('#modal-content').html(modalView.render().$el);
    $('#new-listing-button').click(function(){
        $('#new-listing-modal').modal();
    });
});