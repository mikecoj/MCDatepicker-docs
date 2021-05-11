---
id: methods
title: Methods
sidebar_label: Methods
---

:::info

Here all methods of the `MCDatepicker` are described.

:::

## MCDatepicker

### `create()`

Creates a new calendar instance,
and adds it to the instance array.

```js
const datepicker = MCDatepicker.create({
	el: '#example'
});
```

#### Props

| Prop                    | Type   | Description    | Required |
| ----------------------- | ------ | -------------- | -------- |
| [`options`](options.md) | Object | Options object | Yes      |

#### Return

Returns a new calendar Instance.

<br />

---

<br />

### `remove()`

Removes an instance from the instance array.

```js
MCDatepicker.remove(instance);
```

#### Props

| Prop       | Type   | Default   | Description     | Required |
| ---------- | ------ | --------- | --------------- | -------- |
| `instance` | Object | undefined | Instance object | Yes      |

<br />

---

<br />

### `open()`

Opens the calendar UI and applies the settings of instance that are linked to the provided element id

```js
MCDatepicker.open('#datepicker');
```

#### Props

| Prop | Type   | Default   | Description | Required |
| ---- | ------ | --------- | ----------- | -------- |
| id   | String | undefined | Element id  | Yes      |

<br />

---

<br />

### `close()`

Hides the calendar UI.

```js
MCDatepicker.close();
```

<br />

---

<br />

## Instance

### `open()`

Opens the calendar UI and applies the settings of current instance.

```js
const datepicker = MCDatepicker.create({
	el: '#example'
});

datepicker.open();
```

<br />

---

<br />

### `close()`

Hides the calendar UI.

```js
const datepicker = MCDatepicker.create({
	el: '#example'
});

datepicker.close();
```

<br />

---

<br />

### `reset()`

Deletes the value of linked element and sets the picked date to `null`.

```js
const datepicker = MCDatepicker.create({
	el: '#example'
});

datepicker.reset();
```

<br />

---

<br />

### `destroy()`

Removes the calendar instance from instance array.

```js
const datepicker = MCDatepicker.create({
	el: '#example'
});

datepicker.destroy();
```

<br />

---

<br />

### `getDay()`

Returns the index of the weekday if a date was picked otherwise returns `null`.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	selectedDate: new Date()
});

const weekdayIndex = datepicker.getDay();
```

<br />

---

<br />

### `getDate()`

Returns the day of the month if a date was picked otherwise returns `null`.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	selectedDate: new Date()
});

const date = datepicker.getDate();
```

<br />

---

<br />

### `getMonth()`

Returns the index of the month if a date was picked otherwise returns `null`.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	selectedDate: new Date()
});

const month = datepicker.getMonth();
```

<br />

---

<br />

### `getYear()`

Returns the year if a date was picked otherwise returns `null`.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	selectedDate: new Date()
});

const month = datepicker.getYear();
```

<br />

---

<br />

### `getFullDate()`

Returns the date object if a date was picked otherwise returns `null`.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	selectedDate: new Date()
});

const fullDate = datepicker.getFullDate();
```

<br />

---

<br />

### `getFormatedDate()`

Returns the formated date if a date was picked otherwise it returns `null`.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	selectedDate: new Date()
});

const formatedDate = datepicker.getFormatedDate();
```

<br />

---

<br />

### `markDatesCustom()`

Pushes the provided callback to an array.
When the calendar table is updated it passes each date of the calendar table through the callback array and marks the date if at least one callback returns `true`.

```js
const datepicker = MCDatepicker.create({
	el: '#example'
});

datepicker.markDatesCustom((date) => date.getDate() == 15);
```

#### callback props

| Prop | Type   | Required |
| ---- | ------ | -------- |
| date | Object | No       |

<br />

---

<br />

### `setFullDate()`

This method sets the instance's picket date and updates the linked element's value if the instance has one.

If the instance is active the calendar updates its content based on the new provided date.

```js
const setFullDateBtn = document.querySelector('#setFullDateBtn');

const datepicker = MCDatepicker.create({
	el: '#example'
});

setFullDateBtn.onclick = () => {
	datepicker.setFullDate(new Date(2021, 1, 1));
};
```

| Prop | Type | Required |
| ---- | ---- | -------- |
| date | Date | Yes      |

<br />

---

<br />

### `setDate()`

This method changes the day of the month of the instance's picket date and updates the linked element's value if the instance has one.
If the picked date is `null` MCDatepicker creates a new date and uses it as a new picked date.

If the instance is active, the calendar updates its content based on the modified picked date.

```js
const setDateBtn = document.querySelector('#setDateBtn');

const datepicker = MCDatepicker.create({
	el: '#example'
});

setDateBtn.onclick = () => {
	datepicker.setDate(12);
};
```

| Prop | Type   | Required |
| ---- | ------ | -------- |
| date | Number | Yes      |

<br />

---

<br />

### `setMonth()`

This method sets the month for the instance's picked date and updates the linked element's value if the instance has one.
If the picked date is `null` MCDatepicker creates a new date and uses it as a new picked date.

If the instance is active, the calendar updates its content based on the modified picked date.

```js
const setMonthBtn = document.querySelector('#setMonthBtn');

const datepicker = MCDatepicker.create({
	el: '#example'
});

setMonthBtn.onclick = () => {
	datepicker.setMonth(4);
};
```

| Prop  | Type   | Required |
| ----- | ------ | -------- |
| Month | Number | Yes      |

<br />

---

<br />

### `setYear()`

This method sets the year for the instance's picked date and updates the linked element's value if the instance has one.
If the picked date is `null` MCDatepicker creates a new date and uses it as a new picked date.

If the instance is active, the calendar updates its content based on the modified picked date.

```js
const setYearBtn = document.querySelector('#setYearBtn');

const datepicker = MCDatepicker.create({
	el: '#example'
});

setYearBtn.onclick = () => {
	datepicker.setYear(2018);
};
```

| Prop | Type   | Required |
| ---- | ------ | -------- |
| year | Number | Yes      |

<br />

---

<br />
