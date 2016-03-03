# get-random
Returns a random integer between min and max (INCLUDING)

## Install

```sh
$ npm install --save get-random
```

## Example

```js
var getRandom = require('get-random');

console.log(getRandom(5, 100));
//=> 34

console.log(getRandom(10));
//=> 4
```

#### `require('get-random')(min, max)`

**Arguments**:
- `min`: The minimum number to start
- `max`: The max limit to end
- When there is only one argument the random number will be generated form 0 to max

**Returns**: Returns a random integer between min and max (INCLUDING)

## License

&copy; 2016 vikram. MIT License