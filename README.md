# HTTP Status Validator

[![npm](https://img.shields.io/npm/l/express.svg)]()
<img src="https://img.shields.io/badge/active__development-lightning-brightgreen.svg">
<img src="https://img.shields.io/badge/dependencies-none-green.svg">

Simple way to validate HTTP Status code

## Installation

```sh
$ npm install --save http-status-validator
```


## Usage

```javascript
//CommonsJS
var statusValidator = require('http-status-validator');

//ES6 syntax
import statusValidator from 'http-status-validator'

var responseStatus = response.status;
if (statusValidator(responseStatus).equalsTo(200)) {
    //..
}
```

## License 
MIT
