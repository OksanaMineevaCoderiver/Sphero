$('.tabulation__btn').click(function() {
  $('.tabulation__btn').removeClass('is-active');
  $(this).addClass('is-active');
  let id = $(this).data('nav');
  $('.tab').removeClass('is-active');
  $('.tab[data-tab="'+id+'"]').addClass('is-active');
});
