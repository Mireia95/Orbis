# Orbis

<div align="center">
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1752496004/Orbis/Orbis_Mockup_dd7avr.png" alt="desktop and mobile preview" />
</div>

## Project Link:

---

## Development with:

- React
- HTML
- CSS

## Requirements

Project created with Vite. It's necessary install NPM package :

```bash
npm install
```

<br>
<br>

## Descripción

Orbis is a project to practice building and organizing React components. It uses NASA’s public API to fetch stunning space images.

### API used:

- https://images-api.nasa.gov/search?q=galaxy
- https://images-api.nasa.gov/search?q=nebula
- https://images-api.nasa.gov/search?nasa_id=${id}

### Concepts and tools practiced

- **React Router DOM**: used to handle routing in the application. It allows navigation between different pages or views without reloading the whole page

- **useState hook**: used to create and manage local state inside my components, so the UI can update dynamically when the state changes

- **useEffect hook**: used to perform side effects in components, like fetching data from the NASA API. It also helped me run code only once when a component mounts, or when certain dependencies change.

- **useLocation hook**: used to get information about the current URL. This was helpful to render components conditionally based on the current path, especially when I had components used in multiple routes.
