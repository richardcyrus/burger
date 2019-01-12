/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */
/* global location jQuery */

(function($) {
    /**
     * Click handler for the `Devour It!` buttons.
     *
     * Uses delegate registration because the buttons may not exist at
     * page load.
     */
    $('#ready-to-eat').on('click', '.eat', (event) => {
        event.preventDefault();
        const el = event.target;

        const itemClicked = parseInt($(el).data('burger-id'));
        console.log(itemClicked);

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
    $('#new-burger').on('submit', (event) => {
        event.preventDefault();

        const name = $('input[name="burger_name"]').val().trim();
        console.log(name);

        const request = {
            method: 'POST',
            url: '/',
            data: { burgerName: name },
        };

        $.ajax(request)
            .done(function() {
                location.reload();
            });
    });
})(jQuery);
