import { headerCom } from "./component/headerCom";
import { footerCom } from "./component/footerCom";
import { initRouter } from "./router";
function main() {



customElements.define('header-com', headerCom)
customElements.define('footer-com', footerCom)

// Luego, en tu HTML (index.html), usas el custom element
const root = document.getElementById("root");
initRouter(root!)


}
main()