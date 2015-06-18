(function($) {
    $(function() {
        $('.file-info').prepend('<a class=\"btn btn-sm btn-collapse\" href=\"#\"><span class=\"octicon octicon-triangle-down\"></span></a>');

        $('.btn-collapse').click(function(event) {
            var codeDiv = $(this).closest('.file-header').siblings('.data');

            var isHidden = codeDiv.is(':hidden');

            var icon = isHidden
                ? '<span class=\"octicon octicon-triangle-down\"></span>'
                : '<span class=\"octicon octicon-triangle-right\"></span>';

            $(this).html(icon);
            
            if (isHidden) {
                codeDiv.slideDown('fast');
            } else {
                codeDiv.slideUp('fast');
            }

            return false;
        });

        $('.comment-form-head.tabnav .right').prepend('<a class=\"tabnav-extra btn-shrink\" href=\"#\"><span class=\"octicon octicon-move-left\"></span> Shrink</a>');

        $('.btn-shrink').click(function(event) {
            var comment = $(this).closest('.timeline-comment');
            
            var isShrinked = comment.hasClass('shrinked-to-default');

            var html = isShrinked
                ? '<span class=\"octicon octicon-move-left\"></span> Shrink'
                : '<span class=\"octicon octicon-move-right\"></span> Expand';

            $(this).html(html);
            
            comment.toggleClass('shrinked-to-default');

            return false;
        });
    });
}(window.jQuery));
