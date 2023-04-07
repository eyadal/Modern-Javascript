const speaker = document.getElementById('speaker')
const powerButton = document.getElementById('power-button')
const bluetoothButton = document.getElementById('bluetooth')
const decreaseVolumeButton = document.getElementById('decrease-vol')
const increaseVolumeButton = document.getElementById('increase-vol')
const muteVolumeButton = document.getElementById('mute-vol')
const messageElement = document.getElementById('message')
const prevTrackElement = document.getElementById('prev-track')
const nextTrackElement = document.getElementById('next-track')
const CDButton = document.getElementById('cd')
const addDivElement = document.querySelector('.add-div')
const addButtonElement = document.getElementById('add-btn')
let songs = [
  'Track one',
  'Track two',
  'Track three',
  'Track four',
  'Track five',
]
// States
let bluetoothActive = false
let cdActive = false
let isPowered = false
let volumeLevel = 5
let currentPlaying = 'Track one'
addDivElement.classList.add('hide-div')

// functions
function powerOn() {
  if (isPowered) {
    if (bluetoothActive) {
      bluetoothOn()
    }
    if (cdActive) {
      cdOn()
    }
    isPowered = false
    powerButton.classList.remove('on')

    console.log(addDivElement)
  } else {
    isPowered = true
    powerButton.classList.add('on')
  }
}

function bluetoothOn() {
  if (!isPowered) return
  if (cdActive) {
    cdOn()
  }
  if (bluetoothActive === false) {
    // starta bluetooth
    bluetoothButton.classList.add('bluetoothActiveCss')
    bluetoothActive = true
    console.log(bluetoothActive)
  } else {
    // stäng av bluetooth
    bluetoothButton.classList.remove('bluetoothActiveCss')
    bluetoothActive = false
  }
}

function changeVolumeLevel(event) {
  // minsta nivå 0, max nivå 10
  const MIN_VOLUME_LEVEL = 0
  const MAX_VOLUME_LEVEL = 10

  // högtalaren måste vara on
  if (isPowered) {
    // kontrollera vilken volume knapp som blir klickad
    switch (event.target.id) {
      case 'decrease-vol':
        if (volumeLevel > MIN_VOLUME_LEVEL) {
          volumeLevel--
          messageElement.innerText = `Volume level is ${volumeLevel}`
        }
        break
      case 'increase-vol':
        if (volumeLevel < MAX_VOLUME_LEVEL) {
          volumeLevel++
          messageElement.innerText = `Volume level is ${volumeLevel}`
        }
        break
      default:
        volumeLevel = 0
        messageElement.innerText = `Volume is muted`

        break
    }
  }
}

function changeTrack(event) {
  if (!isPowered) return

  switch (event.target.id) {
    case 'prev-track':
      let firstSong = 0
      if (songs.indexOf(currentPlaying) > firstSong) {
        let prevTrackIndex = songs.indexOf(currentPlaying) - 1

        currentPlaying = songs[prevTrackIndex]
        messageElement.innerText = currentPlaying
      }
      break
    case 'next-track':
      let lastSong = songs.length - 1
      if (songs.indexOf(currentPlaying) < lastSong) {
        let nextTrackIndex = songs.indexOf(currentPlaying) + 1
        currentPlaying = songs[nextTrackIndex]
        messageElement.innerText = currentPlaying
      }
      break
    default:
      messageElement.innerText = currentPlaying
      break
  }
}
function cdOn() {
  if (!isPowered) return // Check if Power button off then return
  if (bluetoothActive) {
    // check if bluetooth btn is on
    bluetoothOn() // turn the bluetooth btn off
  }

  if (cdActive === false) {
    // check if cd btn is off
    // starta cd

    CDButton.classList.add('cdActiveCss') // active btn when clicked
    addDivElement.classList.remove('hide-div') // remove the hide class, display the input and btn elements
    cdActive = true // update the state to true
    console.log(cdActive)
  } else {
    // stäng av cd
    CDButton.classList.remove('cdActiveCss') // deactive btn when clicked
    addDivElement.classList.add('hide-div') // add the hide class to not display input and btn element
    cdActive = false // update state to false
  }
}

function addTrack(event) {
  const addedTrackName = document.getElementById('track-input').value

  if (!isPowered && addedTrackName !== '') return
  songs.push(addedTrackName)
  let clearInput = (document.getElementById('track-input').value = '')
  clearInput.innerHTML = ''
  messageElement.innerText = ''
}

addButtonElement.addEventListener('click', addTrack)
CDButton.addEventListener('click', cdOn)
prevTrackElement.addEventListener('click', changeTrack)
nextTrackElement.addEventListener('click', changeTrack)
muteVolumeButton.addEventListener('click', changeVolumeLevel)
decreaseVolumeButton.addEventListener('click', changeVolumeLevel)
increaseVolumeButton.addEventListener('click', changeVolumeLevel)
bluetoothButton.addEventListener('click', bluetoothOn)
powerButton.addEventListener('click', powerOn)
