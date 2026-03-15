# Guía de Despliegue en Netlify para Delega Web

Esta guía explica paso a paso cómo desplegar tu aplicación Next.js (`delega-web`) en Netlify para que cualquier persona pueda acceder a ella por internet.

Hay dos formas principales de hacerlo:

---

## Opción 1: Despliegue Automático con GitHub (Recomendado)

Esta es la mejor opción porque cada vez que guardes cambios en GitHub, tu web se actualizará sola en Netlify.

### Pasos preparatorios:
1. Asegúrate de tener tu proyecto en un repositorio de **GitHub**, **GitLab** o **Bitbucket**.
2. Tu código ya está preparado (`.gitignore` incluye `node_modules` y `.next` por defecto, así que no necesitas preocuparte por eso).

### Pasos en Netlify:
1. Entra en [Netlify (app.netlify.com)](https://app.netlify.com/) y crea una cuenta o inicia sesión (puedes usar tu cuenta de GitHub).
2. En el panel principal (Team overview o Sites), haz clic en el botón **"Add new site"** (Añadir nuevo sitio) y selecciona **"Import an existing project"**.
3. Haz clic en el botón de **GitHub** (o la plataforma que uses) y autoriza a Netlify para acceder a tus repositorios.
4. **Selecciona el repositorio** de tu proyecto (`delega-web`).
5. En la sección "Build settings" (Ajustes de construcción), Netlify detectará automáticamente que es un proyecto de Next.js. Asegúrate de que los campos digan lo siguiente:
   - **Base directory:** `(dejar en blanco)`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Haz clic en el botón **"Deploy site"** (Desplegar sitio).
7. Netlify empezará a construir tu web. Tarda un par de minutos. Cuando termine, el estado pasará a "Published" (Publicado) y **te dará un enlace público** (ej. `https://tu-sitio-aleatorio.netlify.app`).

¡Listo! Ese enlace es el que puedes enviarle a tu compañero.

---

## Opción 2: Despliegue Manual (Desde tu terminal)

Si por ahora no quieres usar GitHub y simplemente quieres subir el código que tienes directamente desde tu ordenador, puedes usar la herramienta de línea de comandos de Netlify (Netlify CLI).

### Pasos en la terminal:

1. Abre una nueva ventana de **PowerShell** (o terminal).
2. **Instala Netlify CLI** globalmente ejecutando este comando:
   ```bash
   npm install -g netlify-cli
   ```
3. **Inicia sesión** en Netlify desde tu terminal vinculando tu cuenta:
   ```bash
   netlify login
   ```
   *(Esto abrirá tu navegador para que inicies sesión en Netlify y le des permiso a la aplicación local)*.
4. Asegúrate de estar dentro de la carpeta del proyecto en tu terminal:
   ```bash
   cd "c:\Proyectos\CRM Proyect\delega-web"
   ```
5. **Construye el proyecto** localmente (así se prepara tu código para producción):
   ```bash
   npm run build
   ```
6. **Sube el proyecto a Netlify** para producción:
   ```bash
   netlify deploy --prod
   ```
7. Te hará un par de preguntas interactivas en la terminal:
   - Al preguntar si quieres vincular un sitio existente o crear y configurar uno nuevo, selecciona con las flechas del teclado: **"Create & configure a new site"** y pulsa Enter.
   - Te pedirá asignar el equipo (Team), mantén tu equipo por defecto.
   - Te preguntará si quieres darle un nombre (Site name), puedes dejarlo en blanco para que asigne uno aleatorio o escribir `delega-web-[tu-nombre]`.
   - Cuando te pregunte por el **"Publish directory"** (el directorio a publicar), tu terminal sugerirá algo pero **debes escribir lo siguiente y dar Enter**: `.next`

Al terminar, la terminal te dirá que fue un éxito y te mostrará la **"Live URL"**, que es el enlace público y final de tu sitio web listo para enviar a tus compañeros.

---

## ¿Cómo cambiar el enlace a uno más bonito?
En cualquiera de los dos casos, Netlify te dará un nombre complejo (ej: `sparkling-tart-12345.netlify.app`).
Puedes cambiar este nombre yendo al panel de Netlify de tu proyecto > **"Site configuration"** (Configuración del sitio) > **"Change site name"** (Cambiar nombre del sitio) y poner el nombre que prefieras, por ejemplo `delega-pruebas`. Entonces tu enlace final ahora será `https://delega-pruebas.netlify.app`.
