const video = document.querySelector('iframe')

const getYoutubeUrl = (videoId) =>
  `http://youtube.com/embed/${videoId}?autoplay=1&controls=0&iv_load_policy=3&loop=1&rel=0&showinfo=0&showsearch=0&playsinline=1&playlist=${videoId}`

const updateVideoPosition = () => {
  const height = window.innerHeight
  const width = window.innerWidth

  const hip = Math.sqrt(width * width + height * height) * 1.05

  video.width = hip
  video.height = hip

  video.style.marginTop = -1 * (hip - height) / 2
  video.style.marginLeft = -1 * (hip - width) / 2
}

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

const match = window.location.search.match(/v=([^&]*)/)
if (match) {
  const url = getYoutubeUrl(match[1])
  video.src = url
  updateVideoPosition()
}
