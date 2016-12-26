const video = document.querySelector('video')

const updateVideoPosition = () => {
  const height = window.innerHeight
  const width = window.innerWidth

  const hip = Math.sqrt(width * width + height * height) * 1.05

  video.width = hip
  video.height = hip

  video.style.marginTop = -1 * (hip - height) / 2
  video.style.marginLeft = -1 * (hip - width) / 2
}

updateVideoPosition()
window.onresize = updateVideoPosition

const step = 3
let rotation = 0
window.onkeydown = (e) => {
  if (e.key === 'ArrowRight') rotation += step
  if (e.key === 'ArrowLeft') rotation -= step
  updateVideoRotation()
}

const updateVideoRotation = () => {
  video.style.transform = `rotate(${rotation}deg)`
  video.style.webkitTransform = `rotate(${rotation}deg)`
}

window.addEventListener('deviceorientation', (e) => {
  rotation = -e.gamma
  updateVideoRotation()
})
