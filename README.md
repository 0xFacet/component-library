# @0xfacet/component-library

A reusable component library for Next.js applications, designed to offer a comprehensive suite of UI components that are essential for building modern web applications. This library is developed with flexibility and customization in mind, featuring components like `BlockieAvatar`, `Card`, `Carousel`, and many more, to help you build your Next.js applications faster and more efficiently.

## Installation

Install the component library in your project with npm or yarn:

```bash
npm install @0xfacet/component-library
```

or

```bash
yarn add @0xfacet/component-library
```

## Usage

Here's how to use various components from the library in your application:

```jsx
import React from "react";
import { Card, Button, Carousel } from "@0xfacet/component-library";

function App() {
  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is a card from the @0xfacet/component-library</p>
        <Button>Click Me</Button>
      </Card>
      <Carousel>{/* Carousel items */}</Carousel>
    </div>
  );
}

export default App;
```

## Components Overview

Our component library is designed with modularity and reusability in mind, structured into two main categories: UI Components for foundational elements and Core Components for more complex implementations that may extend UI components.

### UI Components

These are atomic, reusable components that serve as the building blocks for your application. They are located in the `ui` folder and include:

- `Accordion`: For collapsible content sections.
- `Button`: Basic UI element for actions.
- `Checkbox`: For selections.
- `Dialog`: Basic overlay or popup.
- `DropdownMenu`: For selecting from a list of options within a dropdown.
- `Input`: For user text input.
- `Label`: Text labels for form elements.
- `RadioGroup`: For selections where only one option is selectable.
- `Select`: For selecting from a list of options.
- `Sheet`: A sliding panel typically used for sub-tasks or information hierarchy.
- `Tooltip`: Short descriptive messages that appear on hover of an element.

### Core Components

These components often extend or incorporate one or more UI components to provide complex functionalities and are located in the root folder. Notably, some components may appear in both categories, indicating the core version provides enhanced features or integrations.

- `Avatar`: Display user or entity avatars.
- `Button` (Enhanced): An extended version implementing additional logic or styling from the base `Button`.
- `Card`: A composite component that may use UI components for structured content display.
- `Carousel`: For cycling through a series of content, potentially utilizing UI elements for navigation.
- `CopyText`: Utility component, often leveraging UI buttons or inputs for copying functionality.
- `Grid`: A layout component that might use basic UI components for constructing complex grids.
- `Heading`: Styled text components for creating a visual hierarchy.
- `Link`: Navigation component, possibly extending base UI buttons or labels.
- `List`: For displaying lists, potentially enhancing UI elements for interactive lists.
- `Modal`: An overlay component that might incorporate several UI components for content display and actions.
- `Pagination`: A navigational component that could utilize UI buttons for page selection.
- `Section`: For grouping related content, potentially using UI components for layout.
- `SegmentedControl`: A controller component that might be an advanced version of UI buttons or toggles.
- `ShowMoreText`: A text display component that could combine UI elements for expand/collapse functionality.
- `Spinner`: Indicates loading state, possibly an enhanced version of the UI Spinner with additional features.
- `Table` (Enhanced): An advanced table component that utilizes UI elements for displaying complex data structures.
- `Toast`: For displaying brief messages, potentially an extended version of the UI toast with added functionalities.
- `Tooltip` (Enhanced): An extended tooltip that incorporates additional UI components or logic for complex use cases.

### Importing Components

To use these components in your project, you can import them as follows:

```javascript
// Importing a UI component
import { Button as UIButton } from "@0xfacet/component-library/ui";

// Importing an enhanced Core component
import { Button as CoreButton } from "@0xfacet/component-library";
```

This naming convention in the import statement (`UIButton` vs. `CoreButton`) is just an example to differentiate between the base UI component and its enhanced version. Adjust according to your project's needs and naming conventions.

## Contributing

We welcome contributions to make this library even better! Whether it's adding new components, fixing bugs, or improving documentation, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub issue tracker. We'll do our best to address it as quickly as possible.
