Kelp.Views.BusinessesIndex = Backbone.CompositeView.extend({
    template: JST['businesses/index'],

    initialize: function() {
        this.mapMarkers = [];
        
        this.listenTo(
            this.collection,
            'sync',
            this.render
        );

        this.listenTo(
            this.collection,
            "add",
            this.addBusiness
        );

        this.listenTo(
            this.collection,
            'filters',
            this.filterByFilters.bind(this)
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
    
    filterByFilters: function(input) {
        this._filteredCollection = [];
        this.filterByCheckboxes(input[0]);
        this.filterByRange(input[1]);
        this.resetSubviews();
    },

    filterByCheckboxes: function(checkedBoxes) {
        this.cb = checkedBoxes;
        var that = this;
        this.collection.each(function(model) {
            if (that.cb.indexOf(model.attributes.category) !== -1) {
                that._filteredCollection.push(model);
            }
        });
    },

    filterByRange: function(values) {
        var that = this;
        var newFilteredCollection = [];
        var minValue = values[0];
        var maxValue = values[1];
        this._filteredCollection.forEach(function(model) {
            var price = model.attributes.price_range;
            if (price >= minValue && price <= maxValue) {
                newFilteredCollection.push(model);
            }
        });
        this._filteredCollection = newFilteredCollection;
    },

    resetSubviews: function() {
        var that = this;
        var subviews = this.subviews('#businesses-list');
        while(subviews.length > 0) {
            this.removeSubview('#businesses-list', subviews[0]);
        }
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