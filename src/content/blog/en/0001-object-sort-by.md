---
title: "[Javascript] Object.groupBy" 
slug: "en-js-object-group-by"
pubDate: "Sep 19, 2023"
excerpt: "Get rid of `.reduce` and `for each` with Object.groupBy"
heroImage: "/images/blog/js-group-by.jpg"
---

# What is Object.groupBy? 

`Object.groupBy` is a new method being added to `Object` in latest browsers. It allows you to group an array of objects by a property.  

Yeah, that's cool but what does it mean?

For example, lets suppose you have a list of users with a `country` property, and you want to group them by country to display them in different sections of your page. 

```js
const users = [
  { name: "John", country: "USA" },
  { name: "Jane", country: "USA" },
  { name: "Bob", country: "Canada" },
  { name: "Alice", country: "Canada" },
  { name: "George", country: "USA" },
];
```

Usually, you would do something like this:

```js
const groupedUsers = {};

users.forEach((user) => {
  if (!groupedUsers[user.country]) {
    groupedUsers[user.country] = [];
  }
  groupedUsers[user.country].push(user);
});

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

or if you hate your team members:

```js
const groupedUsers = users.reduce((acc, user) => {
  if (!acc[user.country]) {
    acc[user.country] = [];
  }
  acc[user.country].push(user);
  return acc;
}, {});

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

This gets the job done, but it's not very readable.

With `Object.groupBy` you can just do this:

```js
const groupedUsers = Object.groupBy(users, "country");

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

Much better, right? 🤩

# Support

This method is not yet supported by some browsers, but it's currently supported by Chrome, Edge and coming up to Safari and Firefox. 

you can check the support status [here](https://caniuse.com/mdn-javascript_builtins_object_groupby).
