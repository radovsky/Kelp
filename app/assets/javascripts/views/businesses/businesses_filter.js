Kelp.Views.BusinessesFilter = Backbone.View.extend({
    template: JST['businesses/filter'],
    
    initialize: function() {
        this.checkBoxes = ["Mansion/Penthouse", "Private Room", "Shack/Hovel"];
        this.sliderValues = [0, 1000];
    },
	
    render: function() {
        var renderedContent = this.template({
            business: this.model
        });
        this.$el.html(renderedContent);
        this.initSlider();
        this.initCheckboxes();
        this.initDatePickers();
        return this;
    },
  
    updateAmount: function(value1, value2) {
        console.log("v1: " + value1 + ",v2: " + value2);
    },
  
    initDatePickers: function() {
        this.$('.input-daterange').datepicker({
            todayBtn: "linked",
            startDate: "today",
        });

        this.$('#start').on('changeDate', function(event) {
            this.$('#end').datepicker('setStartDate', event.date);
        });

        this.$('#end').on('changeDate', function(event) {
            this.$('#start').datepicker('setEndDate', event.date);
        });
    },
    
    initCheckboxes: function() {
        var that = this;
        this.$(".checkbox-inline").change(function() {
            var that2 = this;
            this._checkedBoxes = [];
            that.$('input[type=checkbox]').each(function() {
                if (this.checked) {
                    that2._checkedBoxes.push(this.id);
                }
            });
            that.checkBoxes = this._checkedBoxes;
            that.collection.trigger('filters', [that.checkBoxes, that.sliderValues]);
        });
    },
  
    initSlider: function() {
        var that = this;
        this.$('#slider').slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ 0, 1000 ],
            slide: function( event, ui ) {
                $(
                    "#amount"
                ).val(
                     "$" + 
                     ui.values[ 0 ] + 
                     " - $" + 
                     ui.values[ 1 ]
                );
                that.sliderValues = ui.values;
            },
            
            stop: function(event, ui) {
                that.collection.trigger('filters', [that.checkBoxes, that.sliderValues]);
            }
        });
    }
});