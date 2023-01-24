import $ from 'jquery'

$(() => {
  const $page = $('.page')

  const $button = $('.welcome__button')

  const $welcome = $('.welcome')
  window.scrollTo(0, 0)
  // $(window).scrollTop(0)
  $button.on('click', () => {
    $page.removeClass('page_overflow')
    $welcome.addClass('welcome_hidden')
  })
})
