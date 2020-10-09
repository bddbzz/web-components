class HelloWorld extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' })
        // const h1 = document.createElement("h1")
        // h1.innerHTML = "Hello World!"
        // const style = document.createElement("style")
        // style.textContent = "h1{color:red}"
        // shadow.appendChild(style)
        // shadow.appendChild(h1)
        const t = document.querySelector('#helloWorld');
        const instance = t.content.cloneNode(true);
        shadow.appendChild(instance);
    }
    connectedCallback() {

    }
    disconnectedCallback() {

    }
    adoptedCallback() {

    }
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}
customElements.define("hello-world", HelloWorld)