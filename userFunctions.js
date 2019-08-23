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
// Creates one user
function createUser(userInput) {
    return __awaiter(this, void 0, void 0, function () {
        var newUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.createUser({ name: userInput })];
                case 1:
                    newUser = _a.sent();
                    console.log("Created new user: " + newUser.name + " (ID: " + newUser.id + ")");
                    prisma_client_1.prisma.$graphql;
                    return [2 /*return*/];
            }
        });
    });
}
exports.createUser = createUser;
// Lists all users
function listAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var allUsers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.users()];
                case 1:
                    allUsers = _a.sent();
                    console.log("All users in db:");
                    allUsers.forEach(function (user, i) { return console.log("User #" + i + ": " + user.name); });
                    return [2 /*return*/];
            }
        });
    });
}
exports.listAllUsers = listAllUsers;
// Deletes all messages
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
exports.deleteAll = deleteAll;
// Find ID and return user name
function findByIDandReturnUserName(userInput) {
    return __awaiter(this, void 0, void 0, function () {
        var realName;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.user({ id: userInput })];
                case 1:
                    realName = _a.sent();
                    return [4 /*yield*/, realName.name];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.findByIDandReturnUserName = findByIDandReturnUserName;
// Verifies entry exists by name
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
                    userInQuestion.forEach(function (user) {
                        if (userInQuestion.length !== 0) {
                            console.log("Entry " + user.name + " exists.");
                        }
                        else {
                            console.log("Entry not found!");
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.findUserNamed = findUserNamed;
// Find user ID and return user name
function findAndReturnUserID(userInput) {
    return __awaiter(this, void 0, void 0, function () {
        var userID;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.users({
                        where: {
                            name: userInput
                        }
                    })];
                case 1:
                    userID = _a.sent();
                    return [2 /*return*/, userID[0]['id']];
            }
        });
    });
}
exports.findAndReturnUserID = findAndReturnUserID;
// Find name and update name
function findByNameAndUpdateUserName(userInput, secondaryUserInput) {
    return __awaiter(this, void 0, void 0, function () {
        var wantedID, userInQuestion, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, findAndReturnUserID(userInput)];
                case 1:
                    wantedID = _d.sent();
                    return [4 /*yield*/, prisma_client_1.prisma.updateUser({
                            data: {
                                name: secondaryUserInput
                            },
                            where: {
                                id: wantedID.toString()
                            }
                        })];
                case 2:
                    userInQuestion = _d.sent();
                    _b = (_a = console).log;
                    _c = "Updated user: ";
                    return [4 /*yield*/, findByIDandReturnUserName(wantedID.toString())];
                case 3:
                    _b.apply(_a, [_c + (_d.sent()) + " to value: '" + userInQuestion.name]);
                    return [2 /*return*/];
            }
        });
    });
}
exports.findByNameAndUpdateUserName = findByNameAndUpdateUserName;
