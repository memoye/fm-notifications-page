const notifs = document.querySelectorAll(".notif"),
  newNotifsCount = document.querySelector('#newNotifsCount'),
  readAllBtn = document.querySelector("#allRead")

let newNotifsAmt = document.querySelectorAll('.notifDot').length

newNotifsCount.innerText = newNotifsAmt

readAllBtn.addEventListener('click', readAll)

notifs.forEach((notif, i) => {
  notif.addEventListener('click', () => {
    readNotif(notif, i)
  })
})

function readAll() {
  notifs.forEach((notif, i) => {
    readNotif(notif, i)
  })
}

function readNotif(notifToRead, index) {
  notifToRead.classList.remove('bg-neutral-lightest')
  notifToRead.classList.add('bg-white')
  if (newNotifsAmt > 0 && document.querySelector(`#notif${index + 1}`) !== null) newNotifsAmt--
  document.querySelector(`#notif${index + 1}`)?.remove()
  newNotifsCount.innerText = newNotifsAmt
  if (newNotifsAmt === 0) {
    readAllBtn.setAttribute('disabled', true)
  }
}

// extra
const hearts = ['💖', '💝', '💓', '💘', '❤️‍🩹',]
const hrt = document.querySelector('#hrt')

// for (let i = 0; i < hearts.length; i++) {
let i = 0

setInterval(() => {
  hrt.innerText = hearts[i]
  i < hearts.length - 1 ?
    i++
    : i = 0
}, 400)
// }

