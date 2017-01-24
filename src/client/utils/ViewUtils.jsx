export function updateSwiper() {
  const mainSlider = $('.mainSlider')
  if (mainSlider && $.fn.swiperUpdate) {
    mainSlider.swiperUpdate()
  }
}

// Truyền thêm callback vào nếu cần
export function tagit(id, available) {
  $(`#${id}`).tagit({
    availableTags: available,
    singleField: true,
    allowSpaces: true
  });
}
