Kelp.Views.BusinessesIndex = Backbone.CompositeView.extend({
    template: JST['businesses/index'],

    initialize: function() {
        this.mapMarkers = [];

        this.listenTo(
            this.collection,
            "add",
            this.addBusiness
        );

        this.listenTo(
            this.collection,
            'filterRange',
            this.filterByRange.bind(this)
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

        this.centerMap();
    },

    addBusiness: function(business) {
        var businessesItem = new Kelp.Views.BusinessesItem({
            model: business
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(
                business.escape('latitude'), 
                business.escape('longitude')
            ),
            map: map,
            title: business.escape('name'),
            business_id: business.escape('id')
        });	
        this.addSubview('#businesses-list', businessesItem);
    },

    filterByRange: function(values) {
        var that = this;
        this._filteredCollection = [];
       
        // alert('filter me! ' + values);
        var minValue = values[0];
        var maxValue = values[1];
        this.collection.each(function(model) {
            var price = model.attributes.price_range;
            if (price >= minValue && price <= maxValue) {
                that._filteredCollection.push(model);
            }
        });
        this.resetSubviews();
        // this._filteredCollection = null;
    },

    resetSubviews: function() {
        var that = this;
        var subviews = this.subviews('#businesses-list');
        while(subviews.length > 0) {
            this.removeSubview('#businesses-list', subviews[0])
        }
        
        // debugger;
        if (this._filteredCollection) {
            this._filteredCollection.forEach(function(model) {
                that.addBusiness(model);
            });
        } else {
            this.collection.each(function(model) {
                that.addBusiness(model);
            });
        }
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
    },

    centerMap: function() {
        map.setCenter(new google.maps.LatLng(37.775, -122.434));
        map.setZoom(12);
    },
});