export class footerCom extends HTMLElement {
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
                bottom: 0;
                width: 100%;
                height: 233px;
                background-color: rgba(255, 160, 234, 1);
                display: flex;
                justify-content: center; 
                align-items: center;   
            }

            .header-div h2 {
                color: Black;
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                margin: 0;
            }
            </style>
            <div class="header-div">
             <h2>Footer</h2>
            </div>

            `
    }
}