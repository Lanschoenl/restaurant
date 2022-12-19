;(function () {
  "use strict"

  let lastEvent = { x: window.innerWidth }

  let cachedEvent = { x: window.innerWidth }

  const overlay = [
    document.querySelector(".cfx"),
    document.querySelector(".cfx+div"),
  ]

  const resizeOverlay = (x) =>
    (x.style.transform = `scaleX(${
      (window.innerWidth - cachedEvent.x) / window.innerWidth
    })`)

  const onMove = (e) => (lastEvent = e)

  if (window.innerWidth > 450) {
    window.addEventListener("pointermove", onMove)
    window.addEventListener("click", onMove)
  }

  const navLinks = [...document.querySelectorAll("body > header :any-link")]

  const recolorNavLink = (link) => {
    const linkRect = link.getBoundingClientRect()

    const w = linkRect.right - linkRect.left
    const t = (cachedEvent.x - linkRect.left) / w

    if (t < 0.4) {
      link.classList.add("invert")
    }
    if (t > 0.6) {
      link.classList.remove("invert")
    }
    if (t < 0.1) {
      notification.classList.remove("border-white")
      //orderBtn.classList.remove('btn-invert')
    }
    if (t > 0.2) {
      notification.classList.add("border-white")
      //orderBtn.classList.add('btn-invert')
    }
  }

  let raf = (t) => {
    window.requestAnimationFrame(raf)

    if (lastEvent === cachedEvent) {
      return
    }

    cachedEvent = lastEvent

    overlay.forEach(resizeOverlay)
    navLinks.forEach(recolorNavLink)
  }

  window.requestAnimationFrame(raf)
})()
