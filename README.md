# react-use-classes

Quickly create a className string from base + modifiers

```js
const red = true;
const [selected, setSelected] = useState(false);

const boxClasses = useClasses("box", {
  red,
  selected,
});
```

Outputs

```
box box--red box--selected
```
