import { bienvenidoCom } from "./scenes/bienvenido";
import { login } from "./scenes/login";
import { gracias } from "./scenes/thank";
// Definimos tipos para la ruta
 
  
  // Función initRouter que inicializa el router en un contenedor HTML
  export function initRouter(container: Element) {
  
    // Array con las rutas y sus acciones
    const routes = [
        {
            path: /^\/$/, // ruta exacta "/"
            action: () => {
                //retorno un elemento 
                return bienvenidoCom(goTo)
            }
        },
        {
            path: /^\/login$/, // ruta exacta "/login"
            action: () => {
                return login(goTo)
            }
        },
        {
            path: /^\/thank$/, // ruta exacta "/login"
            action: () => {
                return gracias(goTo)
            }
        }
    ];
  
    // Función para manejar el cambio de ruta
    function handleRoute(path: string) {
        // Busca la primera ruta que coincida con path
        for (const route of routes) {
            if (route.path.test(path)) {
                // Limpia el contenedor
                container.innerHTML = '';
                // Ejecuta acción y agrega el resultado al contenedor
                container.appendChild(route.action());
                return;
            }
        }
        // Si no coincide ninguna ruta, mostrar 404
        container.innerHTML = '<h2>404 - Página no encontrada</h2>';
    }
  
    // Función para cambiar ruta y actualizar historial
    function goTo(path: string) {
        history.pushState({}, '', path);
        handleRoute(path);
    }
  
    // Escuchar evento popstate para manejar navegación con botones navegador
    window.addEventListener('popstate', () => {
        handleRoute(location.pathname);
    });
  
    // Inicializar mostrando la ruta actual
    handleRoute(location.pathname);
  
    // Retornar la función goTo para usarla externamente
    return { goTo };
}