var chai = require("chai");
var expect = chai.expect;
var assert = chai.assert;
var statusValidator = require("../lib/index");

const INFORMATIONAL_STATUS_RANGE = [100, 101, 102];
const SUCCESSFUL = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];
const REDIRECTION = [300, 301, 302, 303, 304, 305, 306, 307, 308];
const CLIENT_ERROR = [
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411,
    412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 426, 428,
    429, 431, 444, 451, 499
];
const SERVER_ERROR = [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511, 599];

describe("Status code", function () {
    describe("should be equals to", function () {
        it("200 as Number", function () {
            expect(statusValidator(200).equalsTo(200)).to.be.true;
        });
        it("200 as String", function () {
            expect(statusValidator("200").equalsTo("200")).to.be.true;
        });
    });

    describe("should validate 'Informational' status", function () {
        runsTestCondition(INFORMATIONAL_STATUS_RANGE, function (i) {
            it("if the range is matched [as Number]", function () {
                expect(statusValidator(INFORMATIONAL_STATUS_RANGE[i]).informational()).to.be.true;
            });
        });

        runsTestCondition(INFORMATIONAL_STATUS_RANGE, function (i) {
            it("if the range is matched [as String]", function () {
                expect(statusValidator(INFORMATIONAL_STATUS_RANGE[i] + "").informational()).to.be.true;
            });
        });
    });

    describe("should validate 'Successful' status", function () {
        runsTestCondition(SUCCESSFUL, function (i) {
            it("if the range is matched [as Number]", function () {
                expect(statusValidator(SUCCESSFUL[i]).successful()).to.be.true;
            });
        });

        runsTestCondition(SUCCESSFUL, function (i) {
            it("if the range is matched [as String]", function () {
                expect(statusValidator(SUCCESSFUL[i] + "").successful()).to.be.true;
            });
        });
    });

    describe("should validate 'Redirection' status", function () {
        runsTestCondition(REDIRECTION, function (i) {
            it("if the range is matched [as Number]", function () {
                expect(statusValidator(REDIRECTION[i]).redirection()).to.be.true;
            });
        });

        runsTestCondition(REDIRECTION, function (i) {
            it("if the range is matched [as String]", function () {
                expect(statusValidator(REDIRECTION[i] + "").redirection()).to.be.true;
            });
        });
    });

    describe("should validate 'ClientError' status", function () {
        runsTestCondition(CLIENT_ERROR, function (i) {
            it("if the range is matched [as Number] [" + i + "]", function () {
                expect(statusValidator(CLIENT_ERROR[i]).clientError()).to.be.true;
            });
        });

        runsTestCondition(CLIENT_ERROR, function (i) {
            it("if the range is matched [as String] [" + i + "]", function () {
                expect(statusValidator(CLIENT_ERROR[i] + "").clientError()).to.be.true;
            });
        });
    });

    describe("should validate 'ServerError' status", function () {
        runsTestCondition(SERVER_ERROR, function (i) {
            it("if the range is matched [as Number]", function () {
                expect(statusValidator(SERVER_ERROR[i]).serverError()).to.be.true;
            });
        });

        runsTestCondition(SERVER_ERROR, function (i) {
            it("if the range is matched [as String]", function () {
                expect(statusValidator(SERVER_ERROR[i] + "").serverError()).to.be.true;
            });
        });
    });
});


function runsTestCondition(arrStatuses, callback) {
    for (var i = 0; i < arrStatuses.length; i++) {
        callback(i);
    }
}