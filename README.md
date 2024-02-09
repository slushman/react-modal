# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to # @slushman/react-modal

This component adds a simple modal for React projects that uses the HTML dialog element underneath.

## Installation

Install with your preferred package manager.

```bash
yarn add @slushman/react-modal
```

## Dependencies

React
css.gg
Tailwind

## Example usage

```js
<Modal isOpen={isOpen} onClose={handleClose}>
  {modal content goes here}
</Modal>
```

## Props

### classes

Optional object to customize the Tailwind classes on each element. The options are:

- dialog
- wrapper
- header
- title
- button
- closeIcon

### closeButtonAriaLabel

Optional accessibility label for the close button. The default label is "Close". This label is hidden in the UI.

### isOpen

Required boolean prop to determine if the modal should be displayed in the UI. Managing the modal happens in your project.

### onClose

Required function called when the modal closes. Should be part of managing the state of the modal.

### title

Optional modal title, displayed at the top of the modal.

### type

Optional style of the modal. The options are:

- standard (default)
- full
- confirmation

Full makes the modal full screen.
Confirmation is not currently supported.

enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
