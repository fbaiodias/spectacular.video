const YOUTUBE_REGEX = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/

const input = document.querySelector('input')
const button = document.querySelector('button')

const getPlayerUrl = (videoId) =>
  window.location.protocol === 'file:'
   ? `200.html?v=${videoId}`
   : `watch?v=${videoId}`

const checkInput = () => {
  const match = input.value.match(YOUTUBE_REGEX)
  if (!match) {
    return window.alert('Invalid YouTube url!')
  }

  window.location = getPlayerUrl(match[1])
}

button.onclick = checkInput
