# Animated Icons

[![npm version](http://img.shields.io/npm/v/elr-scss-animated-icons.svg)](https://www.npmjs.org/package/elr-scss-animated-icons)
[![CI](https://github.com/Beth3346/elr-scss-animated-icons/actions/workflows/node.js.yml/badge.svg)](https://github.com/Beth3346/elr-scss-animated-icons/actions/workflows/node.js.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dm/elr-scss-animated-icons.svg?style=flat)](https://npmjs.com/package/elr-scss-animated-icons)
[![last commit](https://img.shields.io/github/last-commit/Beth3346/elr-scss-animated-icons.svg)](https://github.com/Beth3346/elr-scss-animated-icons)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8dfa0f93-b38a-4c6b-85de-d015a21f8bbe/deploy-status)](https://app.netlify.com/sites/elr-animated-icons/deploys)

a library of sass mixins for animated icons

[View Demo](https://elr-animated-icons.netlify.app/)

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install elr-scss-animated-icons --save
```

or

```sh
yarn add elr-scss-animated-icons
```

## Implementation

### Scss

```scss
@import "elr-scss-animated-icons";

.icon-animated {
  @include elr-icon-animated();
}
```

```scss
@import "elr-scss-animated-icons";

.icon-border {
  @include elr-icon-border();
}
```

```scss
@import "elr-scss-animated-icons";

.icon-border-pop {
  @include elr-icon-border-pop();
}
```

```scss
@import "elr-scss-animated-icons";

.icon-border-pull {
  @include elr-icon-border-pull();
}
```

```scss
@import "elr-scss-animated-icons";

.icon-background-fade {
  @include elr-icon-background-fade();
}
```

```scss
@import "elr-scss-animated-icons";

.icon-dash-rotate {
  @include elr-icon-dash(
    $config: (
      rotate: true,
    )
  );
}
```

```scss
@import "elr-scss-animated-icons";

.icon-close {
  @include elr-icon-close;
}
```

```scss
@import "elr-scss-animated-icons";

.icon-arrow-left {
  @include elr-icon-arrow;
}
```

```scss
@import "elr-scss-animated-icons";

.icon-arrow-right {
  @include elr-icon-arrow(
    $config: (
      direction: "right",
    )
  );
}
```

### HTML

```html
<div class="icon-animated icon-border">
  <i class="fa fa-phone"></i>
</div>
<div class="icon-animated icon-border-pop">
  <i class="fa fa-phone"></i>
</div>
<div class="icon-animated icon-border-pull">
  <i class="fa fa-phone"></i>
</div>
<div class="icon-animated icon-background-fade">
  <i class="fa fa-phone"></i>
</div>
<div class="icon-animated icon-dash">
  <i class="fa fa-phone"></i>
</div>
<div class="icon-animated icon-dash-rotate">
  <i class="fa fa-phone"></i>
</div>
```

```html
<button class="js-icon icon-close">
  <span></span>
</button>
<button class="js-icon icon-arrow-left active">
  <span></span>
</button>
<button class="js-icon icon-arrow-right active">
  <span></span>
</button>
```

## License

SEE LICENSE IN LICENSE.md
