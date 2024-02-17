import { StoryObj, Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  args: {
    closeButtonAriaLabel: "Close",
    isOpen: false,
    title: "Example Modal",
    type: "standard",
  },
  decorators: [
    (Story) => (
      <div className="grid justify-center items-center w-screen h-screen">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const SimpleModal: Story = {
  args: {
    isOpen: false,
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ isOpen: !isOpen });
    }

    return (
      <>
        <button onClick={onChange}>Open Modal</button>
        <Modal {...args} onClose={onChange}>
          <p>This is the content of the modal</p>
        </Modal>
      </>
    );
  },
};

export const FullScreenModal: Story = {
  args: {
    type: "full",
  },
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ isOpen: !isOpen });
    }

    return (
      <>
        <button onClick={onChange}>Open Modal</button>
        <Modal {...args} onClose={onChange}>
          <p>This is the content of the modal</p>
        </Modal>
      </>
    );
  },
};

export const StyledModal: Story = {
  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    function onChange() {
      updateArgs({ isOpen: !isOpen });
    }

    return (
      <>
        <button onClick={onChange}>Open Modal</button>
        <Modal
          {...args}
          classes={{
            button: "bg-red-300",
            closeIcon: "text-blue-600",
            dialog: "text-purple-600",
            header: "bg-gray-800 p-4",
            title: "text-3 xl",
            wrapper: "bg-green-200",
          }}
          onClose={onChange}
        >
          <p>This is the content of the modal</p>
        </Modal>
      </>
    );
  },
};
