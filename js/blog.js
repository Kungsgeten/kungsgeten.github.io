$(function() {
    var $document = $(document),
        $content = $('#content'),
        $markers = $('.footref'),
        $footnotes = $('#text-footnotes');

    function createSidenotes() {
        var $footnoteArray = $footnotes.children();

        $markers.parent().wrap("<span class='post-subject'></span>");

        for (var i = 0; i < $markers.length; i++) {
            $($('.post-subject')[i]).append(
                // role='complementary' provided for ARIA support
                "<aside class='sidenote' role='complementary'>"
                    + $($footnoteArray[i]).html()
                    + "</aside>"
            );
        }
    }

    function toggleNotes() {
        if ($footnotes.length > 0 && $markers.length > 0) {
            $content.addClass('has-sidenotes');
        }
    }

    createSidenotes();
    toggleNotes();
});
