# @slushman/react-modal

Adds a simple modal for React projects. Uses the HTML dialog element underneath.

## Installation

Install with your preferred package manager.

```bash
yarn add @slushman/react-modal
or
npm install @slushman/react-modal
```

## Dependencies

- React
- css.gg
- Tailwind

## Example usage

```js
const { isVisible, toggleModal } = useModal();

<Modal isOpen={isVisible} onClose={toggleModal}>
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
