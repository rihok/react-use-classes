import useClasses from "./useClasses";

test("returns a base string", () => {
    const base = useClasses("base", {});
    expect(base).toBe("base");
});

test("returns a modified string", () => {
    const base = useClasses("base", {
        modified: true,
        nomodification: false,
    });
    expect(base).toBe("base base--modified");
});

test("returns a modified string from non-boolean object", () => {
    const base = useClasses("base", {
        modified: {},
    });
    expect(base).toBe("base base--modified");
});