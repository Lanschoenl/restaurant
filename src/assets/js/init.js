const documentElement = document.documentElement
documentElement.classList.remove('no-js'), documentElement.classList.add('js')
const showLoadingScreen = () => {
    documentElement.classList.add('loading')
  },
  hideLoadingScreen = () => {
    window.setTimeout(() => {
      documentElement.classList.remove('loading')
    }, 500)
  }
showLoadingScreen(), window.addEventListener('load', hideLoadingScreen)
