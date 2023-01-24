import $ from 'jquery'

function checkIsPlaying(audelem) {
  return !audelem.paused
}

$(() => {
  const $player = $('.palyer__box')

  const $controller = $('.player__controller')

  // const $video = $('.video')

  const $buttonWelcome = $('.welcome__button')

  const player = $player[0]
  $controller.on('click', () => {
    const isPlaying = checkIsPlaying(player)

    if (isPlaying) {
      player.pause()
      $controller.removeClass('header__soundcontrol_playing')
      $controller.addClass('header__soundcontrol_stoped')
    } else {
      player.play()

      $controller.addClass('header__soundcontrol_playing')
      $controller.removeClass('header__soundcontrol_stoped')
    }
  })

  $player.on('loadeddata', () => {
    const isPlaying = checkIsPlaying(player)
    if (isPlaying) {
      $controller.addClass('header__soundcontrol_playing')
      $controller.removeClass('header__soundcontrol_stoped')
    } else {
      $controller.removeClass('header__soundcontrol_playing')
      $controller.addClass('header__soundcontrol_stoped')
    }
  })

  $buttonWelcome.on('click', () => {
    const isPlaying = checkIsPlaying(player)
    if (!isPlaying) {
      player.play()
      $controller.addClass('header__soundcontrol_playing')
      $controller.removeClass('header__soundcontrol_stoped')
    }
  })

  $(window).on('blur', () => {
    const isPlaying = checkIsPlaying(player)

    if (isPlaying) {
      player.pause()
      $controller.removeClass('header__soundcontrol_playing')
      $controller.addClass('header__soundcontrol_stoped')
    }
  })
})
