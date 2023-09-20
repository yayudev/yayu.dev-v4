---
title: "[Javascript] Object.groupBy" 
slug: "es-js-object-group-by"
pubDate: "Sep 19, 2023"
excerpt: "Despídete de `.reduce` y `for each` con Object.groupBy"
heroImage: "/images/blog/js-group-by.jpg"
---

# ¿Qué es Object.groupBy?

`Object.groupBy` es un nuevo método que se está agregando a `Object` en los navegadores más recientes. Te permite
agrupar una matriz de objetos por una propiedad.

¡Eso suena genial, pero ¿qué significa?

Por ejemplo, supongamos que tienes una lista de usuarios con una propiedad `country` y deseas agruparlos por país para
mostrarlos en diferentes secciones de tu página.

```js
const users = [
  { name: "John", country: "USA" },
  { name: "Jane", country: "USA" },
  { name: "Bob", country: "Canada" },
  { name: "Alice", country: "Canada" },
  { name: "George", country: "USA" },
];
```

Por lo general, harías algo como esto:

```js
const groupedUsers = {};

users.forEach((user) => {
  if (!groupedUsers[user.country]) {
    groupedUsers[user.country] = [];
  }
  groupedUsers[user.country].push(user);
});
// {
//   USA: [
//     { name: "John", country: "USA" },
//     { name: "Jane", country: "USA" },
//     { name: "George", country: "USA" },
//   ],
//   Canada: [
//     { name: "Bob", country: "Canada" },
//     { name: "Alice", country: "Canada" },
//   ],
// }
```

o si odias a los miembros de tu equipo:

```js
const groupedUsers = users.reduce((acc, user) => {
  if (!acc[user.country]) {
    acc[user.country] = [];
  }
  acc[user.country].push(user);
  return acc;
}, {});
// {
//   USA: [
//     { name: "John", country: "USA" },
//     { name: "Jane", country: "USA" },
//     { name: "George", country: "USA" },
//   ],
//   Canada: [
//     { name: "Bob", country: "Canada" },
//     { name: "Alice", country: "Canada" },
//   ],
// }
```

Con `Object.groupBy` puedes hacer esto:

```js
const groupedUsers = users.groupBy("country");

console.log(groupedUsers);
// {
//   USA: [
//     { name: "John", country: "USA" },
//     { name: "Jane", country: "USA" },
//     { name: "George", country: "USA" },
//   ],
//   Canada: [
//     { name: "Bob", country: "Canada" },
//     { name: "Alice", country: "Canada" },
//   ],
// }
```

¡Eso es todo! 🎉

# Soporte

Actualmente, `Object.groupBy` solo está disponible en Chrome, Edge y proximamente en Firefox y Safari.

Puedes ver el estado de implementación en [caniuse.com](https://caniuse.com/mdn-javascript_builtins_object_groupby).
