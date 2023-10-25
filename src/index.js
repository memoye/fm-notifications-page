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