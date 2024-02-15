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

## Components

The library includes the following components:

- `BlockieAvatar`
- `Card`
- `Carousel`
- `CopyText`
- `Grid`
- `Heading`
- `NavLink`
- `List`
- `Modal`
- `Pagination`
- `Section`, `SectionContainer`
- `SegmentedControl`
- `ShowMoreText`
- `Spinner`
- `Table`
- `ToastContainer`, `PlaceholderToast`
- `Tooltip`

## Contributing

We welcome contributions to make this library even better! Whether it's adding new components, fixing bugs, or improving documentation, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub issue tracker. We'll do our best to address it as quickly as possible.
