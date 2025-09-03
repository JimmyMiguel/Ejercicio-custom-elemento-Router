export function gracias(goTo: (path: string) => void) {

    class ThankYouElement extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });

            shadow.innerHTML = `
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
      
              :host {
                font-family: 'Poppins', sans-serif;
                display: block;
                max-width: 400px;
                margin: 0 auto;
                padding: 20px;
                box-sizing: border-box;
                text-align: center;
              }
              h2 {
                font-weight: 700;
                font-size: 36px;
                margin-bottom: 16px;
              }
              p {
                font-weight: 400;
                font-size: 18px;
                margin-bottom: 24px;
              }
              button {
                background-color: #007bff;
                color: white;
                padding: 10px 20px;
                font-size: 16px;
                font-weight: 700;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                user-select: none;
              }
              button:hover {
                background-color: #0056b3;
              }
            </style>
      
            <h2>Gracias</h2>
            <p>Toda la información que nos brindaste es muy importante</p>
            <button  class="boton" type="button">De nada</button>
          `;
            const boton = shadow.querySelector(".boton")
            boton?.addEventListener(("click"), () => {
                goTo("/")
            })
        }
    }
    if (!customElements.get('thenk-you')) {
        customElements.define('thenk-you', ThankYouElement);
    }

    const thankElement = document.createElement('thenk-you');

    return thankElement

}



