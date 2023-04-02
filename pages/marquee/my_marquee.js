const runtimeMarquee = document.querySelector("#runtimeMarquee")
const scollSpeedInput = document.querySelector("#scollSpeed")
const btnRadios = document.querySelectorAll(".BtnRadio")

scollSpeedInput.addEventListener("input", (event) => {
    console.log(100 - event.target.value)
    runtimeMarquee.scrollAmount = event.target.value
    runtimeMarquee.style.animationDuration = 100 - event.target.value + "s"

})

btnRadios.forEach(btnRadio => {
    btnRadio.addEventListener('change', (event) => {
        runtimeMarquee.style.animationDirection = event.target.value
    })
})
