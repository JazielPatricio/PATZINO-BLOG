class IconoLupa extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="icono">
          <div class="mango"></div>
          <div class="espejo"></div>
      </div>
    `;
  }
}
customElements.define('icono-lupa', IconoLupa);

