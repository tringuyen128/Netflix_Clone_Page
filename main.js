const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

//select item function of tab content
function selecItem(e) {
  removeBorder()
  removeShow()

  // include the border red line when clicking
  this.classList.add('tab-border')

  // get content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`)

  // Add show content to each tab
  tabContentItem.classList.add('show')
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove('tab-border'))
}
//event listener for tab click
tabItems.forEach((item) => item.addEventListener('click', selecItem))

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove('show'))
}
