Kelp.Views.BusinessesShow = Backbone.CompositeView.extend({
    template: JST['businesses/show'],
	
    initialize: function() {
        this.user = Kelp.users.getOrFetch(this.model.attributes.user_id);
        this.mapMarkers = [];
        
        this.listenTo(
            this.model,
            'sync',
            this.render
        );
		
        this.listenTo(
            this.model.reviews(),
            'add',
            this.addReview
        );
        
        var newReviewButton = new Kelp.Views.ReviewsForm({
            collection: this.model.reviews(),
            business: this.model
        });
		
        this.model.reviews().each(this.addReview.bind(this));
        this.addSubview('#new-review-button', newReviewButton);
        
    },
	
    addReview: function(review) {
        var reviewsShow = new Kelp.Views.ReviewsShow({
            model: review
        });
        this.addSubview('.reviews', reviewsShow);
    },
    
    centerMap: function() {
        var loc = new google.maps.LatLng(
            this.model.get('latitude'), 
            this.model.get('longitude')
        );
        map.setCenter(loc);
        map.setZoom(15);
     
        var marker = new google.maps.Marker({
            position: loc,
            map: map
        });
        marker.setIcon(
            'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        );

        this.mapMarkers.push(marker);  
    },
    
    removeMapMarkers: function() {
        for (i = 0; i < this.mapMarkers.length; i++) {
            this.mapMarkers[i].setMap(null);
        }
        this.mapMarkers = [];
    },
    
    remove: function(){
        this.removeMapMarkers();
        Backbone.CompositeView.prototype.remove.call(this);
    },
	
    render: function() {
        var renderedContent = this.template({
            business: this.model,
            user: this.user
        });
        this.$el.html(renderedContent);
        this.attachSubviews();
        this.centerMap();
        return this;
    }
});