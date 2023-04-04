const searchForm = document.querySelector("#search-form")
const mainContainer = document.getElementById("main-image-container")
const imgContainer = document.getElementById("current-image-container")
const history = document.getElementById("search-history")
const inputDate = document.getElementById("search-input")
const heading = document.getElementById('heading')

let currentDate = new Date().toISOString().split("T")[0]

const img = document.createElement("img")
const titleHeading = document.createElement("h3")
const description = document.createElement("p")

window.addEventListener("load", () => {
    heading.textContent = `Picture of The Day`
    getCurrentImageOfTheDay()
})

async function getCurrentImageOfTheDay() {
    try {
        // fetching data
        const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=C69f7BH1LmhBm879s3dhajUu5sWCsLfWIBEXuJxN&date=${currentDate}`
        )
        const data = await response.json()
        console.log(data)

        // updating image on UI
        const imgUrl = data?.url
        // console.log(imgUrl)
        img.src = imgUrl
        img.classList.add("image")
        mainContainer.appendChild(img)

        // updating title
        const title = data?.title
        titleHeading.textContent = title
        imgContainer.appendChild(titleHeading)

        // updating content on UI
        const para = data?.explanation
        description.textContent = para
        imgContainer.appendChild(description)

        mainContainer.appendChild(imgContainer)
    } catch (error) {
        console.log("Error => " + error)
    }
}