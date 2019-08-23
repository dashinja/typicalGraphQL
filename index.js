"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var prisma_client_1 = require("./generated/prisma-client");
var command = process.argv[2];
var initialUserInput = process.argv[3];
var secondaryUserInput = process.argv[4];
// console.log(`I'm usernameinput ${initialUserInput}`)
// A "main' function so that we can use async/await
function main(userInput) {
    return __awaiter(this, void 0, void 0, function () {
        var newUser, allUsers, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.createUser({ name: userInput })];
                case 1:
                    newUser = _a.sent();
                    console.log("Created new user: " + newUser.name + " (ID: " + newUser.id + ")");
                    prisma_client_1.prisma.$graphql;
                    return [4 /*yield*/, prisma_client_1.prisma.users()];
                case 2:
                    allUsers = _a.sent();
                    console.log("All users in db:");
                    allUsers.forEach(function (user, i) { return console.log("User #" + i + ": " + user.name); });
                    return [4 /*yield*/, prisma_client_1.prisma.user({ id: newUser.id })];
                case 3:
                    user = _a.sent();
                    console.log("I'm the fetched user: " + user.name);
                    return [2 /*return*/];
            }
        });
    });
}
function deleteAll() {
    return __awaiter(this, void 0, void 0, function () {
        var deletedUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.deleteManyUsers()];
                case 1:
                    deletedUser = _a.sent();
                    console.log("All " + deletedUser.count + " users deleted");
                    return [2 /*return*/];
            }
        });
    });
}
function doTheMainThing(userInput) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, main(initialUserInput)["catch"](function (e) { return console.error(e); })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, deleteAll()["catch"](function (e) { return console.error(e); })];
                case 2:
                    _a.sent();
                    console.log("The main thing is done!");
                    return [2 /*return*/];
            }
        });
    });
}
function findThem(userInput) {
    return __awaiter(this, void 0, void 0, function () {
        var realName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.user({ id: userInput })];
                case 1:
                    realName = _a.sent();
                    console.log("I'm the user: " + realName.name);
                    return [2 /*return*/];
            }
        });
    });
}
function findUserNamed(userInput) {
    return __awaiter(this, void 0, void 0, function () {
        var userInQuestion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.users({
                        where: {
                            name: userInput
                        }
                    })];
                case 1:
                    userInQuestion = _a.sent();
                    userInQuestion.forEach(function (user) { return console.log("You found: " + user.name); });
                    return [2 /*return*/, userInQuestion[0].id];
            }
        });
    });
}
// Finds user by ID and returns user's Name
function findUserID(userInput) {
    return __awaiter(this, void 0, void 0, function () {
        var userID;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.users({
                        where: {
                            name: userInput.toString()
                        }
                    })];
                case 1:
                    userID = _a.sent();
                    userID.forEach(function (user) { return console.log("You found: " + user.name); });
                    return [2 /*return*/, userID];
            }
        });
    });
}
function updateUserName(userInput, secondaryUserInput) {
    return __awaiter(this, void 0, void 0, function () {
        var userInQuestion, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return __generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    _b = (_a = prisma_client_1.prisma).updateUser;
                    _c = {
                        data: {
                            name: secondaryUserInput
                        }
                    };
                    _d = {};
                    return [4 /*yield*/, findUserID(userInput)[0].id];
                case 1: return [4 /*yield*/, _b.apply(_a, [(_c.where = (_d.id = _l.sent(),
                            _d),
                            _c)])];
                case 2:
                    userInQuestion = _l.sent();
                    _f = (_e = console).log;
                    _g = "Updated user: ";
                    _j = (_h = prisma_client_1.prisma).user;
                    _k = {};
                    return [4 /*yield*/, findUserID(userInput)[0].id];
                case 3: return [4 /*yield*/, _j.apply(_h, [(_k.id = _l.sent(),
                            _k)])];
                case 4:
                    _f.apply(_e, [_g + (_l.sent()) + " to value: '" + secondaryUserInput]);
                    return [2 /*return*/];
            }
        });
    });
}
// doTheMainThing().catch(e => console.error(e))
switch (command) {
    case "delete":
        console.log("Running 'delete' function...");
        deleteAll()["catch"](function (e) { return console.error(e); });
        break;
    case "createUser":
        console.log("Running 'createUser' function...");
        main(initialUserInput)["catch"](function (e) { return console.error(e); });
        break;
    case "who_is":
        console.log("Running 'who_is' function...");
        findThem(initialUserInput)["catch"](function (e) { return console.error(e); });
        break;
    case "find":
        console.log("Running 'find' function...");
        findUserNamed(initialUserInput)["catch"](function (e) { return console.error(e); });
        break;
    case "update":
        console.log("Running 'update' function...");
        updateUserName(initialUserInput, secondaryUserInput)["catch"](function (e) {
            return console.error(e);
        });
        break;
    default:
        console.log("Please enter an appropriate command and argument!");
        break;
}
