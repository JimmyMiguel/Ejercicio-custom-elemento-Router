export class headerCom extends HTMLElement {
    constructor() {
        super()
        this.render()
    }

    render() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML =
            `
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
            <style>
            .header-div {
                width: 100%;
                height: 60px;
                background-color: rgba(255, 130, 130, 1);
                display: flex;
                justify-content: center; 
                align-items: center;   
            }

            .header-div h2 {
                color: Black;
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                margin: 0; /* para evitar márgenes alrededor del h2 */
            }
            </style>
            <div class="header-div">
             <h2>Header</h2>
            </div>

            `
    }
}