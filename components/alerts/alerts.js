class Alerts {

    constructor(text) {

        let div = document.createElement("div")
        div.className = "alert alert-dismissible fade show"
        div.setAttribute("role", "alert")
        div.textContent += text

        let btn = document.createElement("button")
        btn.type = "button"
        btn.className = "close"
        btn.setAttribute("data-dismiss", "alert")
        btn.innerHTML = '&times;'

        div.appendChild(btn)

        div.style.position = "fixed"
        div.style.top = '10px'
        div.style.left = '10px'

        this.tipo = 0
        this.btn = btn
        this.div = div
    }

    success() {
        this.div.classList.add("alert-success")
        this.tipo = 1

        return this
    }

    info() {
        this.div.classList.add("alert-info")
        this.tipo = 1

        return this
    }

    warn() {
        this.div.classList.add("alert-warning")
        this.tipo = 1

        return this
    }

    error() {
        this.div.classList.add("alert-danger")
        this.tipo = 1

        return this
    }

    show(segundos = 2) {

        segundos *= 1000

        if (this.tipo == 0) {
            this.div.classList.add("alert-info")
        }

        document.querySelector("body").appendChild(this.div)

        setTimeout(() => {
            this.btn.click()
        }, segundos)

    }
}