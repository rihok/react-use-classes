"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * useClasses outputs a base + modifiers className string
 *
 * @export
 * @param {string} base Base string to add modifiers to
 * @param {{ [modifier: string]: boolean }} modifiers Object where keys are the modifiers
 * @param {string} [separator='--'] By default the separator is -- change this if you'd prefer another separator
 * @returns {string} Final className
 */
function useClasses(base, modifiers, separator) {
    if (separator === void 0) { separator = '--'; }
    return base + Object.keys(modifiers).map(function (key) { return modifiers[key] ? ' ' + base + separator + key : ''; }).join('');
}
exports.default = useClasses;
