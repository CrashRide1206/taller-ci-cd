# Taller Guiado: Introducción a CI/CD con GitHub Actions

En esta práctica trabajarás con un flujo real de **Integración Continua (CI)** y **Despliegue Continuo (CD)**. Partirás de una calculadora web funcional cuyo código se prueba automáticamente con **Jest** y se publica en **GitHub Pages** cada vez que guardas cambios.

---

## Parte 1: Preparar tu entorno (Fork y permisos)

Por razones de seguridad, GitHub desactiva las automatizaciones cuando copias un repositorio ajeno. Sigue estos pasos en orden para activarlas en tu cuenta:

1. **Haz un Fork:** En la esquina superior derecha de este repositorio, haz clic en **Fork** > **Create fork** para crear una copia bajo tu propio usuario de GitHub.
2. **Activa GitHub Actions:**
   * En **tu** repositorio recién creado, ve a la pestaña **Actions**.
   * Haz clic en el botón verde **"I understand my workflows, go ahead and enable them"**.
3. **Activa GitHub Pages:**
   * Ve a la pestaña **Settings** > **Pages** (en el menú lateral izquierdo).
   * En **Build and deployment** > **Source**, cambia la opción a **GitHub Actions**.

---

## Parte 2: Comprobar el Pipeline inicial (En verde ✅)

Antes de programar, dispara una ejecución para comprobar que la infraestructura funciona en tu cuenta:

1. Abre el archivo `index.html` en tu repositorio y haz clic en el icono del lápiz (editar).
2. Cambia el título `<h2>Calculadora CI/CD</h2>` por `<h2>Calculadora de [Tu Nombre]</h2>`.
3. Haz clic en **Commit changes** directamente sobre la rama `main`.
4. Ve a la pestaña **Actions**, entra a la ejecución en curso y observa cómo se completan las dos fases:
   * **`pruebas-unitarias` (CI):** Instala Node.js, descarga Jest y valida las funciones `sumar` y `multiplicar`.
   * **`despliegue-web` (CD):** Publica tu página en internet. Al terminar, haz clic en el enlace generado (`https://tu-usuario.github.io/...`) para ver tu web en vivo.

---

## Parte 3: El Reto — Extender la aplicación y el Pipeline

Tu misión es agregar la operación **Dividir** cubriendo las tres capas de un ciclo CI/CD profesional:

### 1. Extender el código (`calculadora.js` e `index.html`)
* En **`calculadora.js`**:
  * Crea la función `dividir(a, b)`. Si `b === 0`, la función debe devolver el texto `"Error: división por cero"`. En cualquier otro caso, debe devolver `a / b`.
  * Exporta la nueva función al final del archivo: `module.exports = { sumar, multiplicar, dividir };`.
* En **`index.html`**:
  * Agrega un nuevo botón: `<button onclick="calcular('dividir')">Dividir (÷)</button>`.
  * Actualiza la función `calcular(operacion)` en el `<script>` para que llame a `dividir(a, b)` cuando corresponda.

### 2. Extender las pruebas unitarias (`calculadora.test.js`)
* Importa `dividir` en la primera línea junto a `sumar` y `multiplicar`.
* Agrega **dos nuevos tests** en Jest:
  * Uno que verifique que `dividir(10, 2)` devuelve `5`.
  * Otro que verifique que `dividir(10, 0)` devuelve `"Error: división por cero"`.

### 3. Extender el Pipeline (`.github/workflows/practica.yml`)
* En la sección `on:`, agrega el evento `pull_request` apuntando a la rama `main` (para que las pruebas también se ejecuten si alguien propone cambios mediante un Pull Request):
  ```yaml
  on:
    push:
      branches: [ "main" ]
    pull_request:
      branches: [ "main" ]
