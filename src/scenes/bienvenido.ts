export function bienvenidoCom(goTo: (path: string) => void) {

    class WelcomeForm extends HTMLElement {
        constructor() {
            super(); // Llamar al constructor de la clase padre

            // Crear un shadow DOM para encapsular los estilos y el markup
            const shadow = this.attachShadow({ mode: 'open' });

            // Markup del componente
            shadow.innerHTML = `
                    <style>
                        /* Importar la fuente Poppins desde Google Fonts */
                        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
                        
                        /* Estilos del contenedor principal */
                        .welcome-container {
                            font-family: 'Poppins', sans-serif;
                            padding: 2rem;
                            display: flex;
                            flex-direction: column;
                            gap: 2rem;
                        }

                        /* Estilos del encabezado */
                        .welcome-container h2 {
                            font-size: 32px;
                            font-weight: 700;
                            margin: 0;
                        }

                        /* Estilos del párrafo */
                        .welcome-container p {
                            font-size: 18px;
                            font-weight: 400;
                            margin: 0;
                            line-height: 1.5;
                        }

                        /* Estilos del formulario */
                        .welcome-container form {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            max-width: 400px;
                            padding: 1rem;
                            border: 1px solid #ccc;
                            border-radius: 8px;
                        }

                        /* Estilos del título del formulario */
                        .welcome-container h3 {
                            font-size: 24px;
                            margin: 0;
                        }
                        
                        /* Estilos del label y el input */
                        .welcome-container .input-container {
                            display: flex;
                            flex-direction: column;
                            gap: 0.5rem;
                        }
                        
                        .welcome-container label,
                        .welcome-container input,
                        .welcome-container button {
                            height: 50px;
                            font-size: 16px;
                            padding: 0 1rem;
                            box-sizing: border-box; /* Para que el padding no afecte la altura */
                        }

                        .welcome-container input {
                            border: 1px solid #ccc;
                            border-radius: 4px;
                        }

                        /* Estilos del botón */
                        .welcome-container button {
                            background-color: #007bff; /* Azul */
                            color: white;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                            transition: background-color 0.3s ease;
                        }

                        .welcome-container button:hover {
                            background-color: #0056b3; /* Azul más oscuro al pasar el mouse */
                        }
                    </style>

                    <div class="welcome-container">
                        <h2>Te damos la bienvenida a esta página</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <form>
                            <h3>Para continuar ingresá tu nombre</h3>
                            <div class="input-container">
                                <label for="nombre-input">Nombre</label>
                                <input type="text" id="nombre-input" placeholder="Ingresa tu nombre">
                            </div>
                            <button  class="boton" type="submit" >Enviar</button>
                        </form>
                    </div>
                `;
            const boton = shadow.querySelector('.boton');
            boton?.addEventListener('click', () => {
                goTo('/login');

            })
        }
    }
    // verifica si ya esta ingresado el custom elements , eso sirve cuando tiene que regresar atas en la flecha
    if (!customElements.get('welcome-form')) {
        customElements.define('welcome-form', WelcomeForm);
    }

    // Definir el custom element en el navegador
    const welcomeElement = document.createElement('welcome-form');

    return welcomeElement

}
