# Test FE Developer | Customer Scoops

## Descripción

El proyecto consiste en la implementación de un formulario multistep, basado en un diseño proporcionado en Figma. Se desarrollaron funcionalidades como la navegación entre los pasos del formulario, validación de campos, gestión de estados, entre otras.

### Tecnologías utilizadas

- Lenguaje: TypeScript
- Framework: React
- Herramienta de desarrollo: Vite
- Estilos: CSS (estructura de módulos) y GSAP para animaciones complejas

<br />

## Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio: 
Utilizando el siguiente comando, cloná el repositorio en local.

```js
  git clone https://github.com/jacquelineleone/challenge.git
```

### 2. Instalar las dependencias: 
Accedé a la ubicación del archivo clonado, e instalá las dependencias utilizando npm:

```js
  npm install
```

### 3. Ejecutar el proyecto: 
Para iniciar el servidor en desarrollo, utilizá el siguiente comando:

```js
  npm run dev
```

Esto iniciará la aplicación en http://localhost:3000

### 4. Despliegue: 
El proyecto se encuentra desplegado en Vercel. Podés acceder a la aplicación en el [siguiente enlace](https://challenge-murex.vercel.app/)

<br />

## Estructura del proyecto

- **src/components**: Contiene los componentes reutilizables.
- **src/context**: Definición del contexto que maneja el formulario.
- **src/pages**: Contiene las vistas de la aplicación (en este caso, solo Form ya que el diseño implicaba el desarrollo de una sola vista).
- **src/styles**: Archivos de estilos globales.

<br />

## Notas sobre el proyecto

- La aplicación ha sido diseñada con un enfoque **mobile-first**, asegurando que la interfaz sea completamente **responsive** y priorizando la experiencia del usuario en dispositivos móviles. Esto implica que los estilos CSS iniciales están orientados a pantallas pequeñas, y mediante media queries, se ajustan para pantallas más grandes.
- Se priorizó la creación de un proyecto limpio y modular, bajo el principio de responsabilidad única (**Single Responsability Principle**). Esto significa que cada componente está diseñado para cumplir con una única función o responsabilidad, facilitando así el mantenimiento y la reutilización de cada parte del proyecto.
