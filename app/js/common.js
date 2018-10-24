$(function () {

	/*ak*/

	$(document).ready(function () {
		$('#accordeon .acc-head').on('click', f_acc);
	});

	function f_acc() {

		var th = $(this),
			item = th.closest('.ack-adv-tabs'),
			itemMaxHeight = 0;
		item.toggleClass('is-active').siblings().removeClass('is-active');
		th.next().slideToggle('fast').addClass('is-opened').closest(item).siblings().find('.is-opened').slideUp('fast').removeClass('is-opened');
		item.siblings().each(function () {

			if ($(this).outerHeight() > itemMaxHeight) {
				itemMaxHeight = $(this).outerHeight();
			}
		});

		if ($(window).width() < 993) {
			$('html,body').animate({
				scrollTop: $(this).offset().top - itemMaxHeight - 100
			}, 200);
		}

	}

	/*ak*/


});