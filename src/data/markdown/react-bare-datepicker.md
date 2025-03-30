# react-bare-datepicker

A fully customizable React date picker designed for flexibility and ease of use. This library gives you complete control and injection over every component while maintaining a simple and intuitive API.

## Key Features

-   **Component Injection**: Replace any part of the UI with your own custom components
-   **Simple API**: Straightforward props for injecting custom UI elements without complexity
-   **Custom Triggers**: Use any component as your datepicker trigger
-   **Flexible Date Restrictions**: Easily disable future dates, past dates, or specific date ranges
-   **Highlighted Dates**: Effortlessly highlight important dates in the calendar
-   **Flexible Positioning**: Control the popup positioning with options like "bottom center", "top left", etc.

## Installation

```bash
npm install react-bare-datepicker
```

or

```bash
yarn add react-bare-datepicker
```

## Basic Usage

```jsx
import React, { useState } from "react";
import DatePicker from "react-bare-datepicker";

function App() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const customTrigger = () => (
        <button
            className="my-custom-button"
            style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                backgroundColor: "#f0f7ff",
                border: "1px solid #0077ff",
                borderRadius: "4px",
                cursor: "pointer",
            }}
        >
            <span>Select Date: {selectedDate.toLocaleDateString()}</span>
        </button>
    );

    return (
        <DatePicker value={selectedDate} onChange={setSelectedDate} renderTrigger={customTrigger} />
    );
}
```

## Feature Highlights

### 1. Date Restrictions Made Simple

Easily manage date restrictions with built-in props:

```jsx
<DatePicker
    value={selectedDate}
    onChange={setSelectedDate}
    disableFutureDates={true} // Simple flag to disable all future dates
    // OR
    disablePastDates={true} // Simple flag to disable all past dates
    // OR use specific dates
    disableDatesAfter={new Date(2025, 5, 15)}
    disableDatesBefore={new Date(2025, 2, 1)}
/>
```

### 2. Highlighted Dates

Mark important dates in the calendar:

```jsx
<DatePicker
    value={selectedDate}
    onChange={setSelectedDate}
    highlightedDates={[
        new Date(2025, 1, 20), // Highlight January 20, 2025
        new Date(2025, 2, 10), // Highlight February 10, 2025
    ]}
/>
```

## Advanced Usage

```jsx
import React, { useState } from "react";
import DatePicker from "react-bare-datepicker";

function App() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Custom components for complete UI control
    const customTrigger = () => (
        <div className="date-selector">
            <span>Pick a date: {selectedDate.toLocaleDateString()}</span>
        </div>
    );

    const customDateCell = ({ date, isSelected, isToday, isHighlighted }) => (
        <div
            style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isSelected ? "#4285f4" : isHighlighted ? "#e8f0fe" : "transparent",
                color: isSelected ? "white" : isToday ? "#4285f4" : "black",
                fontWeight: isToday ? "bold" : "normal",
            }}
        >
            {date}
        </div>
    );

    const customTodayButton = () => <button className="today-btn">Jump to Today</button>;

    return (
        <DatePicker
            value={selectedDate}
            onChange={setSelectedDate}
            disablePastDates={true}
            highlightedDates={[new Date(2025, 2, 25), new Date(2025, 2, 26)]}
            renderTrigger={customTrigger}
            renderDateCell={customDateCell}
            renderTodayButton={customTodayButton}
            backgroundStyle={{
                borderRadius: 8,
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
        />
    );
}
```

## Props Table

| Prop                 | Type                             | Required | Default           | Description                                       |
| -------------------- | -------------------------------- | -------- | ----------------- | ------------------------------------------------- |
| `value`              | `Date`                           | Yes      | -                 | The currently selected date                       |
| `onChange`           | `(date: Date) => void`           | Yes      | -                 | Callback function when date is changed            |
| `position`           | `PopupPosition`                  | No       | `"bottom center"` | Position of the datepicker popup                  |
| `disableFutureDates` | `boolean`                        | No       | `false`           | Whether to disable dates in the future            |
| `disablePastDates`   | `boolean`                        | No       | `false`           | Whether to disable dates in the past              |
| `disableDatesAfter`  | `Date`                           | No       | -                 | Disable all dates after the specified date        |
| `disableDatesBefore` | `Date`                           | No       | -                 | Disable all dates before the specified date       |
| `highlightedDates`   | `Date[]`                         | No       | `[]`              | Array of dates to be highlighted                  |
| `offsetX`            | `number`                         | No       | `0`               | Horizontal offset of the popup                    |
| `offsetY`            | `number`                         | No       | `0`               | Vertical offset of the popup                      |
| `closeOnPick`        | `boolean`                        | No       | `true`            | Whether to close the popup after selecting a date |
| `backgroundStyle`    | `DatePickerBackgroundStyleProps` | No       | -                 | Style properties for the datepicker background    |

### Customization Props

| Prop                         | Type                                       | Required | Default          | Description                                        |
| ---------------------------- | ------------------------------------------ | -------- | ---------------- | -------------------------------------------------- |
| `renderTrigger`              | `() => ReactNode`                          | No       | Default button   | Custom component for the datepicker trigger button |
| `renderMonthDropDownTrigger` | `(currentMonth: CurrentMonth) => void`     | No       | Default trigger  | Custom component for the month dropdown trigger    |
| `renderMonthDropDown`        | `(props: MonthDropDownProps) => ReactNode` | No       | Default dropdown | Custom component for the month dropdown            |
| `renderYearDropDownTrigger`  | `(currentYear: number) => ReactNode`       | No       | Default trigger  | Custom component for the year dropdown trigger     |
| `renderYearDropDown`         | `(props: YearDropDownProps) => ReactNode`  | No       | Default dropdown | Custom component for the year dropdown             |
| `renderMonthDecreaseButton`  | `() => ReactNode`                          | No       | Default button   | Custom component for the previous month button     |
| `renderMonthIncreaseButton`  | `() => ReactNode`                          | No       | Default button   | Custom component for the next month button         |
| `renderWeekDayCell`          | `(day: DayOfWeek) => ReactNode`            | No       | Default cell     | Custom component for weekday labels                |
| `renderTodayButton`          | `() => ReactNode`                          | No       | Default button   | Custom component for the "Today" button            |
| `renderDateCell`             | `(props: DateCellProps) => ReactNode`      | No       | Default cell     | Custom component for date cells                    |

## Interface Definitions

### DatePickerBackgroundStyleProps

```typescript
interface DatePickerBackgroundStyleProps {
    borderRadius: number;
    backgroundColor: string;
    border: string;
    paddingTop: number;
    paddingBottom: number;
    paddingLeft: number;
    paddingRight: number;
    boxShadow: string;
}
```

### DateCellProps

```typescript
interface DateCellProps {
    date: string | number;
    isSelected: boolean;
    isToday: boolean;
    isHighlighted: boolean;
}
```

### YearDropDownProps

```typescript
interface YearDropDownProps {
    ref: RefObject<HTMLDivElement | null>;
    itemRefs: RefObject<YearItemRefsProps>;
    years: number[];
    pickYear: (year: number) => void;
    onScroll: (e: UIEvent<HTMLDivElement>) => void;
}
```

### MonthDropDownProps

```typescript
interface MonthDropDownProps {
    ref: RefObject<HTMLDivElement | null>;
    itemRefs: RefObject<MonthItemRefsProps>;
    months: Month[];
    pickMonth: (monthId: MonthId) => void;
}
```

## Important Notes

-   To adjust the size of the datepicker, you need to customize the date cell size using `renderDateCell` prop
-   The background styles can only be customized using the properties defined in `DatePickerBackgroundStyleProps`
-   Every component has a default implementation, so you only need to override the parts you want to customize

## Why react-bare-datepicker?

This datepicker was created to provide a solution that offers:

-   **Flexibility**: Control every aspect of the UI to match your design system
-   **Simplicity**: Intuitive API for common date picker requirements
-   **Functionality**: Essential features like date highlighting and restrictions
-   **Customization**: Replace any component with your own implementation

## Example: Custom Date Cell Size

```jsx
const customDateCell = ({ date, isSelected, isToday, isHighlighted }) => (
    <div
        style={{
            width: "50px", // Increase cell width
            height: "50px", // Increase cell height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isSelected ? "#007bff" : "transparent",
            color: isSelected ? "white" : "black",
            borderRadius: "4px",
        }}
    >
        {date}
    </div>
);

<DatePicker value={selectedDate} onChange={setSelectedDate} renderDateCell={customDateCell} />;
```

## License

MIT
