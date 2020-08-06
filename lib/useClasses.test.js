"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useClasses_1 = __importDefault(require("./useClasses"));
test("returns a base string", function () {
    var base = useClasses_1.default("base", {});
    expect(base).toBe("base");
});
test("returns a modified string", function () {
    var base = useClasses_1.default("base", {
        modified: true,
        nomodification: false,
    });
    expect(base).toBe("base base--modified");
});
test("returns a modified string from non-boolean object", function () {
    var base = useClasses_1.default("base", {
        modified: {},
    });
    expect(base).toBe("base base--modified");
});
