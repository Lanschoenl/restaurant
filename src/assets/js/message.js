const notification = document.querySelector(".notification-container")
const dismiss = document.querySelector(".notification-close")
const orderBtn = document.querySelector(".notification-order-btn")

const showNotifications = () => {
  window.setTimeout(() => {
    const page = document.querySelector("html").classList[0]
    if (page === "home") {
      notification.classList.add("show")
      dismiss.addEventListener("click", dismissNotification)
      notification.addEventListener('mouseenter', invertNotification)
      notification.addEventListener('mouseleave', invertNotification)
    }
  }, 1500)
}

showNotifications()

const dismissNotification = () => {
  notification.classList.remove("show")
}

const invertNotification = () => {
  notification.classList.toggle("border-white")
  orderBtn.classList.toggle("btn-invert")
}
