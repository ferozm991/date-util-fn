# Date Util

A simple and lightweight utility library for working with dates in JavaScript.

## Features

- Build an inclusive list of calendar days between two dates (`generateDateRange`).
- Human-readable relative time strings (`timeAgo`).

## Installation

```bash
npm install date-util-fn
```

## Usage

### CommonJS

```javascript
const { generateDateRange, timeAgo } = require("date-util-fn");

const days = generateDateRange(new Date("2025-01-01"), new Date("2025-01-04"));
console.log(days);

const past = new Date(Date.now() - 2 * 60 * 60 * 1000); // 2 hours ago
console.log(timeAgo(past)); // e.g. "2 hours ago"
```

## API

### `generateDateRange(startDate: Date, endDate: Date): Date[]`

Returns an array of `Date` objects, one per calendar day from `startDate` through `endDate` (inclusive), in order.

### `timeAgo(date: Date): string`

Returns a short English phrase for how long ago `date` was compared to now (e.g. `"45 seconds ago"`, `"1 hour ago"`, `"3 days ago"`). Differences under one second (after rounding down to whole seconds) return `"just now"`.

**Note:** If `date` is in the future, the result is effectively `"just now"` with the current implementation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
