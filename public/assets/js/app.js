/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */
/* global location jQuery */

(function($) {
    const form = $('#new-burger');

    /**
     * Click handler for the `Devour It!` buttons.
     *
     * Uses delegate registration because the buttons may not exist at
     * page load.
     */
    $('#ready-to-eat').on('click', '.eat', function(event) {
        event.preventDefault();
        const el = event.target;

        const itemClicked = parseInt($(el).data('burger-id'));

        const request = {
            method: 'PUT',
            url: '/',
            data: { id: itemClicked },
        };

        $.ajax(request)
            .done(function() {
                location.reload();
            });
    });

    /**
     * Form submission handler for the new burger name input.
     */
    form.on('submit', function(event) {
        /**
         * Trigger client side form validation. Prevents sending an
         * empty name.
         *
         * The checkValidity() call has to occur on a form node.
         *
         * $(this) = [form#new-burger]
         * $(this)[0] = the full form HTML with all fields.
         */
        if (form[0].checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.addClass('was-validated');

        // If the form has been completed correctly, process it.
        if (!event.isDefaultPrevented()) {
            event.preventDefault();

            const name = $('input[name="burger_name"]').val().trim();

            const request = {
                method: 'POST',
                url: '/',
                data: { burgerName: name },
            };

            $.ajax(request)
                .done(function() {
                    form[0].reset();
                    location.reload();
                });

            return false;
        }
    });
})(jQuery);
