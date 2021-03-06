
/**
 * useClasses outputs a base + modifiers className string
 *
 * @export
 * @param {string} base Base string to add modifiers to
 * @param {{ [modifier: string]: boolean }} modifiers Object where keys are the modifiers
 * @param {string} [separator='--'] By default the separator is -- change this if you'd prefer another separator
 * @returns {string} Final className
 */
export default function useClasses(base: string, modifiers: { [modifier: string]: any }, separator: string = '--'): string {
    return base + Object.keys(modifiers).map((key) => modifiers[key] ? ' ' + base + separator + key : '').join('');
}