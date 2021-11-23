# elr-scss-animated-icons

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/dm/elr-scss-animated-icons.svg?style=flat)](https://npmjs.com/package/elr-scss-animated-icons)

a library of sass mixins

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install elr-scss-animated-icons --save
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
