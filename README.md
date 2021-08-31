# Bridge.js - [bridge.js.org](https://bridge.js.org)

A tiny-yet-powerful JavaScript library, focused on easily connecting HTML to JavaScript.

## Simple example
**HTML**
```html
<p>{{text}}</p>
```
**JavaScript**
```js
const bridge = new Bridge('p');
bridge.cross({text: 'Hello Bridge!'});
```
**Output**
> Hello Bridge!
