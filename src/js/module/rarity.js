import $ from 'jquery'

$(() => {
  const $parent = $('.rarity')
  const $prize_items = $parent.find('.prize')
  const $rarity_items = $parent.find('.rarity__img')

  $prize_items.on('click', (e) => {
    const $item = $(e.target).closest('.prize')

    $item.addClass('prize_active')
    $item.siblings().removeClass('prize_active')
    // console.log('sublings', $item.sublings())
    const index = $item.data('id')

    $rarity_items.each((_, el) => {
      const idx_img = $(el).data('id')

      console.log('elem', el)
      console.log('idx_img', idx_img)
      console.log('index', index)
      idx_img === index
        ? $(el).addClass('rarity__img_active')
        : $(el).removeClass('rarity__img_active')
    })
  })
})
