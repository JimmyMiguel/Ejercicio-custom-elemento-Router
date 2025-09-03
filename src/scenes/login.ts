
export function login(goTo: (path: string) => void) {

    class login extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });

            // CSS y estructura HTML dentro del shadow DOM
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
              }
              h2 {
                font-weight: 700;
                font-size: 28px;
                text-align: center;
                margin-bottom: 20px;
              }
              label {
                display: block;
                font-weight: 700;
                margin-top: 15px;
                margin-bottom: 5px;
              }
              input[type="text"], select {
                width: 100%;
                padding: 8px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
              }
              select[multiple] {
                height: 100px;
              }
              .buttons {
                display: flex;
                justify-content: space-between;
                margin-top: 25px;
              }
              button {
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                border-radius: 4px;
                border: 1px solid transparent;
                font-weight: 700;
                user-select: none;
              }
              .btn-continue {
                background-color: #007bff;
                color: white;
                border-color: #007bff;
              }
              .btn-continue:hover {
                background-color: #0056b3;
                border-color: #0056b3;
              }
              .btn-back {
                background-color: white;
                color: black;
                border: 1px solid #ccc;
              }
              .btn-back:hover {
                background-color: #eee;
              }
            </style>
      
            <h2>Necesitamos algunos datos más</h2>
      
            <label for="emailInput">Email</label>
            <input type="text" id="emailInput" name="email">
      
            <label for="foodInput">Comida favorita</label>
            <input type="text" id="foodInput" name="food">
      
            <label for="choiceSelect">Elige piedra, papel o tijera (puedes elegir más de uno)</label>
            <select id="choiceSelect" name="choice" multiple>
              <option value="piedra">Piedra</option>
              <option value="papel">Papel</option>
              <option value="tijera">Tijera</option>
            </select>
      
            <div class="buttons">
              <button class="btn-back" type="button">Volver</button>
              <button class="btn-continue" type="button">Continuar</button>
            </div>
          `;

            const boton = shadow.querySelector(".btn-back")
            boton?.addEventListener(("click"), () => {
                goTo("/")
            })
            const botonFrente = shadow.querySelector(".btn-continue")
            botonFrente?.addEventListener(("click"), ()=>{
              goTo('/thank')
            })



        }
    }
    if (!customElements.get('custom-form-element')) {
        customElements.define('custom-form-element', login);
    }

    const welcomeElement = document.createElement('custom-form-element');

    return welcomeElement

}