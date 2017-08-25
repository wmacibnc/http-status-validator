//Reference => https://httpstatuses.com/

const isInformational = function (statusCode) {
    return [100, 101, 102].includes(statusCode);
};

const isSuccessful = function (statusCode) {
    return [200, 201, 202, 203, 204, 205, 206, 207, 208, 226].includes(statusCode);
};

const isRedirection = function (statusCode) {
    return [300, 301, 302, 303, 304, 305, 306, 307, 308].includes(statusCode);
};

const isClientError = function (statusCode) {
    return [
        400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411,
        412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 426, 428,
        429, 431, 444, 451, 499
    ].includes(statusCode);
};

const isServerError = function (statusCode) {
    return [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511, 599].includes(statusCode);
};

function isStatus(statusCode) {

    if (!statusCode) {
        throw new Error("Status code cannot be null!");
    }

    return {
        equalsTo: function (statusToCompare) {
            return +statusToCompare === +statusCode;
        },
        informational: function () {
            return isInformational(+statusCode);
        },
        successful: function () {
            return isSuccessful(+statusCode);
        },
        redirection: function () {
            return isRedirection(+statusCode);
        },
        clientError: function () {
            return isClientError(+statusCode);
        },
        serverError: function () {
            return isServerError(+statusCode);
        }
    };
}

module.exports = isStatus;






