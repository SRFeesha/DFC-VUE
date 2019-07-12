# The project

Design Freaks Club is a monthly meetup in the community of Trento.
We talk about anything-design, photography, marketing.

![Welcome to deign Freaks Club!](https://imgur.com/AsGBGS8)

The project is trying to make some noise in Trento design panorama with a _disruptive approach_.
The Design field is evolving and cutting its space all around the world, it's time to bring this change also in the Trento community.

The first event will be on 8th of October.

[Our Facebook Page](https://www.facebook.com/designfreaksclub/)

[Our Instagram Page](https://www.instagram.com/designfreaksclub/)

## Build setup

        # install dependencies
        npm install

        # serve with hot reload at localhost:8080
        npm run dev

        # build for production with minification
        npm run build

        # build for production and view the bundle analyzer report
        npm run build --report

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### Folder structure

To start working with the project the only folder you should really care about is **src **.

In src code is divided like this

    .
    ├── src
    │		├── assets                  # all the assets used in the project
    │		│	├─ fonts
    │		│   └─ images
    │		├── components              # single-file components
    │		├── router                  # where the router logic is
    │		├── store                   # where the store logic is
    │		├── views                   # the view components are like web pages we are used to
    │		├── App.Vue                 # root component. Contains some general styling
    │		└── main.js                 # where the Vue instance is generated and the libraries are called
    └── index.html                  # where the root object is (#app in our case)

**Notes**

- Components starting with _The_ are meant to appear only once in the instance.
- In the folder structure some folder can seem to be a little overkilling (like store and router only containing a single file called like the folder itself), this choice is made in order to support better future scalability.

## Dependencies

The project is based on the [Vue-CLI boilerplate](https://cli.vuejs.org/), so there are a scary number of dependencies from there. Actually there is not much to care, they just works.

The Vue-CLI preset includes babel, Router, Vuex, ESLint and SASS

Other dependencies that have been added in order to simplify some tasks are:

- [vue-media-queries](https://www.npmjs.com/package/vue-media-queries)
- [firebase](https://www.npmjs.com/package/firebase)
- [vue-click-outside](https://www.npmjs.com/package/vue-click-outside)

**Note**
At this stage of the project the vue permission are set to public. When the project will be set to production mode, this _MUST_ be changed.

## Consideration

Building this project was an exciting journey into the world of Vue. The project is still under construction and will be updated also in the next month

We\'re taking seriously in consideration to rebuild everything from scratch using Nuxt.js
