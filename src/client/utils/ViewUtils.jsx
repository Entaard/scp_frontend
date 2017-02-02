export function updateSwiper() {
  const mainSlider = $('.mainSlider')
  if (mainSlider && $.fn.swiperUpdate) {
    mainSlider.swiperUpdate()
  }
}

// Truyền thêm callback vào nếu cần
export function tagit(id, available, onChange) {
  $(`#${id}`).tagit({
    availableTags: available,
    singleField: true,
    allowSpaces: true,
    afterTagAdded: onChange,
    afterTagRemoved: onChange,
  });
}

export function reversetagit(id, available, onChange) {
  $(`#${id}`).tagit({
    availableTags: available,
    singleField: true,
    allowSpaces: true,
    afterTagAdded: onChange,
    afterTagRemoved: onChange,
  });
}

export function assignTags(id) {
  return $(`#${id}`).tagit("assignedTags");
}
