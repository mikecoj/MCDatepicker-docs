---
id: event-hooks
title: Event Hooks
sidebar_label: Event Hooks
---

:::info

All methods listed below can be used multiple times.

:::

## `onOpen()`

Subscribes the provided callback to an event that gets triggered each time the calendar shows up.

```js
const datepicker = MCDatepicker.create({
	el: '#datepicker'
});

datepicker.onOpen(() => console.log('The Datepicker is openned'));
```

<br />

---

<br />

## `onClose()`

Subscribes the provided callback to an event that gets triggered when the calendar is closed.

```js
const datepicker = MCDatepicker.create({
	el: '#datepicker'
});

datepicker.onClose(() => console.log('The Datepicker is closed'));
```

<br />

---

<br />

## `onCancel()`

Subscribes the provided callback to an event that gets triggered when the calendar is closed by clicking the cancel button.

```js
const datepicker = MCDatepicker.create({
	el: '#datepicker'
});

datepicker.onCancel(() => console.log('The Datepicker is closed'));
```

<br />

---

<br />

## `onSelect()`

Subscribes the provided callback to an event that gets triggered when the calendar's OK button is clicked.

```js
const datepicker = MCDatepicker.create({
	el: '#datepicker'
});

datepicker.onSelect((date, formatedDate) => console.log('Selected date: ' + date));
```

#### callback props

| Prop         | Type   | Required |
| ------------ | ------ | -------- |
| date         | Object | No       |
| formatedDate | String | No       |

<br />

---

<br />

## `onMonthChange()`

Subscribes the provided callback to an event that gets triggered when the month is changed.

```js
const datepicker = MCDatepicker.create({
	el: '#datepicker'
});

datepicker.onMonthChange(() => console.log('The month has been changed'));
```

<br />

---

<br />

## `onYearChange()`

Subscribes the provided callback to an event that gets triggered when the year is changed.

```js
const datepicker = MCDatepicker.create({
	el: '#datepicker'
});

datepicker.onYearChange(() => console.log('The year has been changed'));
```
