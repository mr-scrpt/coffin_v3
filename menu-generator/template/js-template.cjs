const jsTemplate = ({ name, bp }) => {
  const classOpen = `${name}_open`;
  const classClose = `${name}_close`;
  const str = `
    import $ from 'jquery'

    $(() => {
      const $parent = $('.${name}')
      const $controller = $parent.find('.${name}__controller')
      const $box = $parent.find('.${name}__box')
      let isOpen = false

      init()
      $controller.on('click', () => {
        if ($parent.hasClass('${classOpen}')) {
          close()
        } else {
          open()
        }
      })
      $parent.on('click', (e) => {
        e.stopPropagation()
      })
      $(window).on('click', () => {
        if (isOpen && isMobile()) {
          close()
        }
      })
      $(window).on('resize', () => {
        console.log('resize')
        init()
      })
      function init() {
        if (!isMobile()) {
          clearClass()
        }
      }
      function clearClass() {
        $parent.removeClass('${classOpen}')
        $parent.removeClass('${classClose}')
      }
      function close() {
        isOpen = false
        $parent.addClass('${classClose}')

        $parent.removeClass('${classOpen}')
      }
      function open() {
        isOpen = true
        $parent.addClass('${classOpen}')
        $parent.removeClass('${classClose}')
      }
      function isMobile() {
        const size = $(window).width()

        if (size < ${bp}) {
          return true
        }
        return false
      }
    })

  `;
  return str;
};

module.exports = jsTemplate;
