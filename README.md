# HTTP Status Validator

[![npm](https://img.shields.io/npm/l/express.svg)]()
<img src="https://img.shields.io/badge/active__development-lightning-brightgreen.svg">


Simple way to validate HTTP Status code

## Installation

```sh
$ npm install --save http-status-validator
```


## Usage

```javascript
var isStatus = require('http-status-validator');

var responseStatus = response.status;
if (isStatus(responseStatus).equalsTo(200)) {
    //..
}
```

## License 
MIT
