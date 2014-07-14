(function($) {
    $.widget('myCCT.cct', {
        options: {
            min: 1000,
            max: 40000,
            deg: 2,
            value: 1000,
        },

        _create: function() {
            this.element.append("<div class='cct-cube'></div>");
            this.element.append("<canvas class='cct-selector'></canvas>");
        },

        destroy: function() {
        },

        _setOption: function( key, value ) {
            this.options[ key ] = value;
            this._update();
        },

        _update: function() {
            // update the plugin
        },

        value: function( v ) {
            if(v===undefined) {
                // get value
                return this.options.value;
            } else {
                // set value
            }
        },

    }); // end of cct
})(jQuery);

