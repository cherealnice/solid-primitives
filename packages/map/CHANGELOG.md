# @solid-primitives/map

## 0.3.1

### Patch Changes

- dd2d7d1c: Improve export conditions.
- Updated dependencies [dd2d7d1c]
  - @solid-primitives/trigger@0.0.3

## 0.3.0

### Minor Changes

- 9ed32b38: Moves trigger primitives from utils to @solid-primitives/trigger package. Better utilize WeakMaps for caching triggers.

### Patch Changes

- Updated dependencies [9ed32b38]
  - @solid-primitives/trigger@0.0.2

## 0.2.3

### Patch Changes

- b662fe9f: Improve package export contidions for SSR (node, workers, deno)
- Updated dependencies [a372d0e7]
- Updated dependencies [b662fe9f]
- Updated dependencies [abb8063c]
  - @solid-primitives/utils@3.1.0

## 0.2.2

### Patch Changes

- 7ac41ed: Update to solid-js version 1.5
- Updated dependencies [7ac41ed]
  - @solid-primitives/utils@3.0.2

## 0.2.1

### Patch Changes

- Updated dependencies [73b6a34]
  - @solid-primitives/utils@3.0.0

## Changelog up to version 0.2.0

0.0.100

Initial release of the package.

0.2.0

Deprecated `createMap` and `createWeakMap` functions, as they weren't providing any benefit over instanciating with the `new` keyword.

`ReactiveMap` and `ReactiveWeakMap` now will respect `instanceof Map/WeakMap` checks.

Internal signals will be created only if read in a tracking scope.

Remove setter function api from `.set()` method.