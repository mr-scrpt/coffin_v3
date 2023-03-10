import $ from 'jquery'

$(() => {
  const $linkTo = $('.to')
  $linkTo.on('click', (e) => {
    e.preventDefault()

    const target = $(e.target).closest('.to').attr('href').slice(1)
    const $targetElem = $(`#${target}`)
    const windowWidth = $(window).width()
    if (windowWidth >= 994) {
      scrollTo($targetElem)
    } else {
      setTimeout(() => {
        scrollTo($targetElem)
      }, 250)
    }
  })
})

const scrollTo = ($targe) => {
  $('html, body').animate(
    {
      scrollTop: $targe.offset().top - 15,
    },

    {
      duration: 500,
    }
  )
}
