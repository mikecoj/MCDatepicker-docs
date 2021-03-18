---
id: event-hooks
title: Event Hooks
sidebar_label: Event Hooks
---

## `onOpen()`

### Props

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

### Props

```js
const datepicker = MCDatepicker.create({
	el: '#datepicker'
});

datepicker.onClose(() => console.log('The Datepicker is closed'));
```

<br />

---

<br />

## `onSelect()`

### Props

```js
const datepicker = MCDatepicker.create({
	el: '#datepicker'
});

datepicker.onSelect((date) => console.log('Selected date: ' + date));
```

<br />

---

<br />

## `onMonthChange()`

### Props

```js
const datepicker = MCDatepicker.create({
	el: '#datepicker'
});

datepicker.onMonthChange((month) => console.log('Month changed, new month: ' + month));
```

<br />

---

<br />

## `onYearChange()`

### Props

```js
const datepicker = MCDatepicker.create({
	el: '#datepicker'
});

datepicker.onYearChange((year) => console.log('Year changed, new year: ' + year));
```
