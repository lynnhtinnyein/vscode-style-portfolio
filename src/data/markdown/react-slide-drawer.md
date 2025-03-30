# React Slide Drawer

`React Slide Drawer` is a customizable, responsive and user-friendly drawer component for React, inspired by React Native Navigation. It supports multiple drawer types and smooth animations, making it perfect for implementing side navigation drawers. The front drawer type is especially optimized for mobile use, providing a traditional overlay-style drawer that slides over the content, while other types cater to both mobile and desktop needs.

## Demo

Check out the demo here: [React Slide Drawer Demo](https://lynnhtinnyein.github.io/react-slide-drawer-demo/)

## Features

-   **Multiple Drawer Types**: Choose between `slide`, `front`, and `back` animations for different drawer behaviors.
-   **Customizable Positioning**: Easily position the drawer to slide in from either the `left` or `right`.
-   **Full-Screen Option**: Although the drawer can be used relative to any element or div, enabling the forceFullScreen prop makes it occupy the full screen when the parent is relatively positioned.
-   **Backdrop Close**: Optionally enable or disable the backdrop that closes the drawer when clicked.

## Drawer Types

-   **front**: A traditional drawer that covers the screen with an overlay behind it.
-   **slide**: Both the screen and the drawer slide simultaneously to reveal the drawer.
-   **back**: The drawer is revealed behind the screen (Note: This feature is not currently supported).

## Installation

You can install `react-slide-drawer` via npm or yarn:

```bash
npm install react-slide-drawer
# or
yarn add react-slide-drawer
```

## Usage

```js
import { useState } from "react";
import { SlideDrawer } from "react-slide-drawer";

const App = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <div style={styles.container}>
            <button 
                onClick={() => setShowDrawer(!showDrawer)}
                style={styles.button}
                onMouseOver={(e) => e.target.style.backgroundColor = "#2563eb"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#3b82f6"}
            >
                Toggle Drawer
            </button>

            <SlideDrawer
                show={showDrawer}
                onClose={() => setShowDrawer(false)}
                width={300}
                position="left"
                type="front"
                animated={true}
            >
                <div style={styles.drawer}>
                    {/* Header */}
                    <div style={styles.headerFooter}>
                        <span style={{ fontSize: "18px", fontWeight: "bold" }}>Drawer Header</span>
                        <button 
                            onClick={() => setShowDrawer(false)}
                            style={styles.closeButton}
                        >
                            &times;
                        </button>
                    </div>
                    
                    {/* Content */}
                    <div style={styles.content}>
                        <p>This is the content inside the drawer!</p>
                    </div>
                    
                    {/* Footer */}
                    <div style={{ ...styles.headerFooter, borderTop: "1px solid #d1d5db" }}>
                        <span style={{ fontSize: "14px", color: "#6b7280" }}>Drawer Footer</span>
                    </div>
                </div>
            </SlideDrawer>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f3f4f6"
    },
    button: {
        padding: "10px 16px",
        backgroundColor: "#3b82f6",
        color: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        border: "none",
        transition: "background-color 0.3s"
    },
    drawer: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#e5e7eb",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)"
    },
    headerFooter: {
        padding: "16px",
        backgroundColor: "white",
        borderBottom: "1px solid #d1d5db",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    content: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "16px",
        color: "#374151"
    },
    closeButton: {
        color: "#6b7280",
        cursor: "pointer",
        fontSize: "20px"
    }
}

export default App;

```

## Props

| Prop                   | Type         | Default Value          | Description                                                                                                                                               |
| ---------------------- | ------------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `show`                 | `boolean`    | `false`                | Toggle the drawer.                                                                                                                                        |
| `width`                | `number`     | `250`                  | Specifies the width of the drawer in pixels.                                                                                                              |
| `animate`              | `boolean`    | `true`                 | Determines whether the drawer animation should be enabled when opening and closing.                                                                       |
| `position`             | `enum`       | `"left"` or `"right"`  | Defines the position of the drawer. Set to `'left'` or `'right'` to determine which side the drawer slides in from.                                       |
| `forceFullScreen`      | `boolean`    | `false`                | If `true`, the drawer will occupy the full screen. This is useful when the parent container has a relative position.                                      |
| `zIndex`               | `number`     | `10`                   | The `z-index` value of the drawer, used for layering with other elements.                                                                                 |
| `onClose`              | `() => void` |                        | A function to be called when the drawer is closed (e.g., when the backdrop is clicked).                                                                   |
| `type`                 | `enum`       | `"slide"` or `"front"` | The drawer's behavior type. Set to `'front'` for overlay-style or `'slide'` for sliding-style animation. The `'back'` type is not supported at this time. |
| `showBackdrop` | `boolean`    | `true`                | If set to `false`, the backdrop will not be displayed. Only applies to `'front'` drawer type.                                             |

## License

`React Slide Drawer` is released under the MIT license.