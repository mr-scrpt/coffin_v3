import $ from 'jquery'
// Accordian
var action = 'click'
var speed = '500'

$(document).ready(function () {
  // Question handler
  // $('.faq__q').on(action, function () {
  //   // Get next element
  //   $(this)
  //     .next()
  //     .slideToggle(speed)
  //     // Select all other answers
  //     .siblings('.faq__a')
  //     .slideUp()
  // })

  $('.faq__item').on('click', (e) => {
    const $target = $(e.target).closest('.faq__item')

    $target.toggleClass('faq__item_open')
    const $answer = $target.find('.faq__a')

    $answer.slideToggle(500)
  })
})
