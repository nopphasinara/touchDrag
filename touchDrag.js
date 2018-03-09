import './css/main.css'
import 'modern-normalize'

export default class TouchDrag {
  constructor(item) {
    this.item = item
    this.dragging = false
    this.dragElement = document.querySelector(item.dataset.dragElement)
    this.position = {
      x: 0,
      y: 0
    }
    this.width = item.getBoundingClientRect().width
    this.height = item.getBoundingClientRect().height
    this.bindTouch()
    console.log(this)
  }

  bindTouch() {
    this.item.addEventListener('mousedown', () => this.dragStart(event), false)
    document.addEventListener('mouseup', () => this.dragStop(event), false)
  }

  dragStart(event) {
    this.dragging = true
    const startPosition = {
      x: event.clientX,
      y: event.clientY
    }

    console.log('drag start')
    this.mousemove = document.addEventListener(
      'mousemove',
      () => this.drag(event, startPosition),
      false
    )
  }

  drag(event, startPosition) {
    this.position = {
      x: startPosition.x - event.clientX,
      y: startPosition.y - event.clientY
    }
  }

  dragStop(event) {
    this.dragging = false
    console.log(this)
  }
}

new TouchDrag(document.querySelector('.js-touch-drag'), {
  translateY: '100%'
})
