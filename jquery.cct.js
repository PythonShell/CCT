(function($) {
    $.widget('myCCT.cct', {
        options: {
            str: "hello",
            min: 1000,
            max: 40000,
            deg: 2.
        },

        _create: function() {
            console.log($(this));
        },

        destroy: function() {
        },

        getValue: function() {
            console.log(this.options.str);
        },

        setValue: function() {
        }
    }); // end of cct
})(jQuery);

