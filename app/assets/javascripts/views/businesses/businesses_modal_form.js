Kelp.Views.BusinessesModalForm = Backbone.View.extend({
    template: JST['businesses/modal_form'],

    render: function() {
        this.$el.html(this.template());
        return this;
    },
    
    events: _(Backbone.ButtonFormView.prototype.events).extend({
        "change #avatar": 'handleFile'
    }),
	
    handleFile: function(event) {
        var file = event.currentTarget.files[0];
        var view = this;
        var reader = new FileReader();
        reader.onload = function(e) {
            view.model.set('avatar', this.result);
        };
        reader.readAsDataURL(file);
    },
	
    create: function(event) {
        event.preventDefault();
        var opts = $(event.target).serializeJSON();
        this.model.set(opts, { wait: true });
        var that = this;
        this.model.save({}, {
            success: function(response) {
                Kelp.businesses.add(that.model);
                $('#new-listing-modal').modal('hide');
                Kelp.mainRouter.navigate('#/businesses/' + that.model.get('id'));
            },
            error: function(model, response) {
                alert(response.responseText);
            }
        });
    }
});