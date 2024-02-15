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

Our component library is meticulously crafted to support a wide range of design and development needs, organized into foundational UI components and advanced Core components. This structure ensures that developers can easily access exactly what they need, from simple building blocks to complex, feature-rich components.

### UI Components

Located in the `ui` folder, these components are the versatile building blocks of your application's UI. Designed for maximum reusability and customization, they include:

- `Accordion`: Collapsible sections for efficient space use and content organization.
- `Button`: The quintessential interactive element for user actions.
- `Checkbox`: For user selections and toggles.
- `Dialog`: Modal overlays for critical user confirmations and interactions.
- `DropdownMenu`: Selectable lists for option-rich inputs.
- `Input`: Text fields for user input, supporting various data types.
- `Label`: Descriptive text for form elements and user interface controls.
- `RadioGroup`: Exclusive selection controls for setting preferences or options.
- `Select`: Dropdowns for single or multiple selections from a list.
- `Sheet`: Sliding panels for secondary content or actions.
- `Tooltip`: Contextual hints and brief messages tied to UI elements.

### Core Components

These components leverage the foundational UI components to create more sophisticated, ready-to-use functionalities. They address common UI patterns and complex interactions, making them indispensable for building rich interfaces. They include:

- `Avatar`: Displays user or entity profile pictures, often with status indicators.
- `Button` (Enhanced): Extends the foundational `Button` with extended functionalities like loading states.
- `Card`: A versatile container for grouping related information and actions in a clear, concise format.
- `Carousel`: A dynamic component for browsing through a collection of items, images, or content.
- `CopyText`: A utility component that simplifies text copying to the clipboard with a single click.
- `Grid`: A layout tool for creating responsive, grid-based designs.
- `Heading`: Typography component for defining hierarchical content structure.
- `Link`: Enhanced navigation elements for in-app routing or external linking.
- `List`: Organized display for lists of items, supporting various styles and interactions.
- `Modal` (Enhanced): Extends the foundational `Dialog` with additional features.
- `Pagination`: Navigation component for managing content spread across multiple pages.
- `Section`: Layout component that provides thematic grouping for content, enhancing readability and structure.
- `SegmentedControl`: A control component for toggling between different views or modes within the same context.
- `ShowMoreText`: Text display with built-in mechanisms for expanding and collapsing long content.
- `Spinner`: A visual cue for loading processes, elegantly indicating background activities.
- `Table`: A component for simple data presentation.
- `Toast`: Timed, non-disruptive messages for user notifications and feedback.
- `Tooltip` (Enhanced): Extends the foundational `Tooltip`.

### Importing Components

Utilize components in your project seamlessly:

```javascript
// Importing UI components
import { Button as UIButton, Input } from "@0xfacet/component-library/ui";

// Importing Core components for more complex scenarios
import { Button as CoreButton, Modal } from "@0xfacet/component-library";
```

Our components are designed to be intuitive and flexible, catering to a broad spectrum of design requirements and ensuring that your applications remain at the forefront of modern UI design.

## Contributing

We welcome contributions to make this library even better! Whether it's adding new components, fixing bugs, or improving documentation, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub issue tracker. We'll do our best to address it as quickly as possible.
