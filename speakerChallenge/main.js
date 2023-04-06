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
let isPowered = false
let volumeLevel = 5
let currentPlaying = 'Track one'

// functions
function powerOn() {
  if (isPowered) {
    isPowered = false
    powerButton.classList.remove('on')
    addDivElement.classList.add('hide-div')
    console.log(addDivElement)
  } else {
    isPowered = true
    powerButton.classList.add('on')
    addDivElement.classList.remove('hide-div')
  }
}

function bluetoothOn() {
  if (isPowered === true) {
    if (bluetoothActive === false) {
      // starta bluetooth
      bluetoothButton.classList.add('bluetoothActive')
      bluetoothActive = true
      console.log(bluetoothActive)
    } else {
      // stäng av bluetooth
      bluetoothButton.classList.remove('bluetoothActive')
      bluetoothActive = false
    }
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

// 1. skapa ett input element med en läggtill knapp CHECK
// 1.2. spara elementet som en variabel i din javascripts fill (För återanvändning) CHECK

// 1.4. input elementet ska vara av typen text CHECK
// 1.5. input elementet ska ha en placeholder text: "skriv din låt här" CHECK
// 1.6. text inputen tillsammans med button ska ligga innanför en div CHECK
// 1.7. div elementet ska ha en class som heter "add-track" CHECKe
// 1.8. elementen ska ligga intill varandra CHECK
// 2.0. Skapa en function som heter "addTrack" som tar emot ett event som parameter CHECK

// 2.1. skapa en variabel som heter "addedTrackName" och tilldela den värdet från input elementet
// 3.0. Kolla så att isPowered är true
// 3.1. Kolla så att addedTrackName inte är tom

// 3.2. pusha in addedTrackName i tracks arrayen

function addTrack(event) {
  const addedTrackName = document.getElementById('track-input').value

  if (!isPowered && addedTrackName !== '') return
  songs.push(addedTrackName)
}

addButtonElement.addEventListener('click', addTrack)
CDButton.addEventListener('click', changeTrack)
prevTrackElement.addEventListener('click', changeTrack)
nextTrackElement.addEventListener('click', changeTrack)
muteVolumeButton.addEventListener('click', changeVolumeLevel)
decreaseVolumeButton.addEventListener('click', changeVolumeLevel)
increaseVolumeButton.addEventListener('click', changeVolumeLevel)
bluetoothButton.addEventListener('click', bluetoothOn)
powerButton.addEventListener('click', powerOn)
