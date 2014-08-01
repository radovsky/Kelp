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
        var btn = this.$('#submit-button')
        btn.text('Loading...');
        btn.attr('disabled', 'disabled');
        var that = this;
        that.model.save({}, {
            success: function(response) {
                $('#new-listing-modal').on('hidden.bs.modal', function(){
                    Kelp.businesses.add(that.model);
                    Kelp.mainRouter.navigate(
                        '#/businesses/' + that.model.get('id')
                    );
                    that.remove();
                });
                $('#new-listing-modal').modal('hide');
            },
            error: function(model, response) {
                that.$('.errors').html(response.responseJSON.join("<br>"));
                that.$('.errors').addClass('show')
                btn.removeAttr('disabled');
                btn.text('Get it right this time!')
            }
        });         
    }
});