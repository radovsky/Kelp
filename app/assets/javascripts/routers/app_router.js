Kelp.Routers.AppRouter = Backbone.Router.extend({
    routes: {
        '': 'businessesIndex',
        'businesses/:id': 'businessesShow',
        'users': 'usersIndex',
        'users/:id': 'usersShow'
    },
	
    initialize: function(options) {
        this.$roolEl = options.root;
        this.$mapEl = options.map;
        this.initMap();
    },
  
    initMap: function() {
        var mapOptions = {
            center: new google.maps.LatLng(37.775, -122.419),
            zoom: 11,
            disableDefaultUI: true
        };
        map = new google.maps.Map(this.$mapEl[0], mapOptions);
    },
	
    _swapView: function(newView) {
        if (this._currentView) this._currentView.remove();
        $('#content').html(newView.render().$el);
        this._currentView = newView;
    },
	
    businessesIndex: function() {
        Kelp.businesses.fetch();
        var businessesIndexView = new Kelp.Views.BusinessesIndex({
            collection: Kelp.businesses
        });
        this._swapView(businessesIndexView);
    },
	
    businessesShow: function(id) {
        var business = Kelp.businesses.getOrFetch(id);
        var businessShowView = new Kelp.Views.BusinessesShow({
            collection: Kelp.businesses,
            model: business
        });
        this._swapView(businessShowView);
    },
	
    usersIndex: function() {
        var usersIndexView = new Kelp.Views.UsersIndex({
            collection: Kelp.users
        });
        Kelp.users.fetch();
        this._swapView(usersIndexView);
    },
	
    usersShow: function(id) {
        var user = Kelp.users.getOrFetch(id);
        var userShowView = new Kelp.Views.UsersShow({
            model: user
        });
        this._swapView(userShowView);
    }
});