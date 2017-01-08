export function updateSwiper() {
  const mainSlider = $('.mainSlider')
  if (mainSlider && $.fn.swiperUpdate) {
    mainSlider.swiperUpdate()
  }
}