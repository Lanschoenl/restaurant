// MENU JS CODE:
let c = 0
let imgContainer
let loading
let foodID
let lastFoodID
let image

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const page = document.querySelector("html").classList[0]
    if (page == "menu") {
      image = document.querySelector(".image")
      placeholder = document.querySelector(".placeholder-img")

      let m = document.getElementById("lunch-menu")
      let n = document.getElementById("starters")
      let o = document.getElementById("salads")
      let p = document.getElementById("soups")
      let q = document.getElementById("main-dishes")
      let r = document.getElementById("sushi")
      let s = document.getElementById("desserts")

      m.addEventListener("touchstart", showFloatingFood, false)
      m.addEventListener("touchend", hideFloatingFood, false)

      n.addEventListener("touchstart", showFloatingFood, false)
      n.addEventListener("touchend", hideFloatingFood, false)

      o.addEventListener("touchstart", showFloatingFood, false)
      o.addEventListener("touchend", hideFloatingFood, false)

      p.addEventListener("touchstart", showFloatingFood, false)
      p.addEventListener("touchend", hideFloatingFood, false)

      q.addEventListener("touchstart", showFloatingFood, false)
      q.addEventListener("touchend", hideFloatingFood, false)

      r.addEventListener("touchstart", showFloatingFood, false)
      r.addEventListener("touchend", hideFloatingFood, false)

      s.addEventListener("touchstart", showFloatingFood, false)
      s.addEventListener("touchend", hideFloatingFood, false)

      if (window.innerWidth > 450) {
        document.querySelector(".firstDish").classList.add("underline")
        m.addEventListener("mouseover", showFood, false)
        n.addEventListener("mouseover", showFood, false)
        o.addEventListener("mouseover", showFood, false)
        p.addEventListener("mouseover", showFood, false)
        q.addEventListener("mouseover", showFood, false)
        r.addEventListener("mouseover", showFood, false)
        s.addEventListener("mouseover", showFood, false)
      }

      imgContainer = document.querySelector(".menu-image-container")
      loading = document.querySelector(".loading-spinner")
      loading.style.display = "none"
      let headline = document.querySelector(".underline")
      let article
      let prevArticle
      let prevHeadline = document.querySelector(".underline")

      function showFood(e) {
        let id1 = e.target.parentElement.dataset.id
        let h

        //GET HEADLINE ELEMENT OF MENU ITEM

        if (e.target.parentElement.children[0].children[1] != undefined) {
          h = e.target.parentElement.children[0].children[1]
          if (h.tagName == "H3") {
            //console.log(h)
            headline = h
            article = h.parentElement.parentElement
            if (headline != prevHeadline) {
              headline.classList.add("underline")
              article.classList.add("shadow")
              if (prevHeadline) {
                prevHeadline.classList.remove("underline")
                prevArticle.classList.remove("shadow")
              }
            }
          }
        }

        if (
          e.target.tagName == "H3" &&
          !e.target.classList.contains("menu__headline")
        ) {
          //console.log(e.target)
          headline = e.target
          article = headline.parentElement.parentElement
          if (headline != prevHeadline) {
            headline.classList.add("underline")
            article.classList.add("shadow")
            if (prevHeadline) {
              prevHeadline.classList.remove("underline")
              prevArticle.classList.remove("shadow")
            }
          }
        }

        // console.log(id1)
        let id2 = e.target.parentElement.parentElement.dataset.id
        console.log("id1: ", id1)
        console.log("id2: ", id2)
        // GET ID for the right food:
        if (id1 != undefined) {
          foodID = id1
        } else if (id2 != undefined) {
          foodID = id2
        }

        console.log(foodID)
        if (foodID != undefined && foodID != "") {
          //console.log(e.target)

          if (foodID == "no-photo") {
            imgContainer.style.opacity = 0
            image.classList.add("image-visible")
            placeholder.classList.remove("placeholder-img-hide")
            placeholder.style.zIndex = 999
            lastFoodID = "no-photo"
          } else if (foodID != lastFoodID) {
            c = 0
            getFoodImage(foodID)
            placeholder.classList.add("placeholder-img-hide")
          } else if (window.innerWidth < 450) {
            c = 0
            getFoodImage(foodID)
            placeholder.classList.add("placeholder-img-hide")
          }
        } else {
          hideFood()
        }

        prevHeadline = headline
        prevArticle = article
      }

      function hideFood(e) {}

      async function getFoodImage(foodID) {
        imgContainer.style.opacity = 0
        loading.style.display = "block"
        if (c == 0) {
          url = `/menu/menu-images-webp/${foodID}.webp`
          await fetch(url)
            .then((res) => {
              //console.log(foodID, res.url)
              imgContainer.innerHTML = ""
              lastFoodID = foodID
              c = 1
              setNewFood(res.url)
            })
            .catch((err) => {
              // LOAD PLACEHOLDER IMG
              console.log(err)
            })
        } else {
          c = 0
        }
      }

      function setNewFood(url) {
        let item = document.createElement("img")
        item.classList.add("menu-image")
        item.src = url
        imgContainer.appendChild(item)
        item.onload = function () {
          //console.log('img loading complete')
          // setTimeout(function () {

          // }, 300)
          loading.style.display = "none"
          image.classList.add("image-visible")
          imgContainer.style.opacity = 1
        }
      }

      function showFloatingFood(e) {
        showFood(e)
      }

      function hideFloatingFood(e) {
        image.classList.remove("image-visible")
        imgContainer.innerHTML = ""
        foodID = ""
        let headlines = document.getElementsByTagName("h3")
        let articles = document.getElementsByTagName("article")
        headlines = Array.from(headlines)
        articles = Array.from(articles)
        headlines.forEach((element) => {
          element.classList.remove("underline")
        })
        articles.forEach((element) => {
          element.classList.remove("shadow")
        })
        placeholder.classList.add("placeholder-img-hide")
        placeholder.style.zIndex = -1
      }

      // // PRELOADING IMAGES

      // var preloaded = 0
      // var images = new Array("img1.jpg", "img2.jpg", "img3.jpg")

      // function preLoader(e) {
      //   for (var i = 0; i < images.length; i++) {
      //     var tempImage = new Image()

      //     tempImage.addEventListener("load", progress, true)
      //     tempImage.src = imageArray[i]
      //   }
      // }

      // function progress() {
      //   preloaded++

      //   if (preloaded == imageArray.length) {
      //     //ALL Images have been loaded, perform the desired action
      //   }
      // }
      // this.addEventListener("DOMContentLoaded", preLoader, true)
    }
  },
  false
)
