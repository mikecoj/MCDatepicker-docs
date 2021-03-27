---
id: configuration
title: Configuration
---

|                    Option                     |  Type   |    Default     | Description                                 |
| :-------------------------------------------: | :-----: | :------------: | ------------------------------------------- |
|                  [`el`](#el)                  | String  |     `null`     | The ID of the instance's linked element.    |
|          [`dateFormat`](#dateformat)          | String  | `DD-MMM-YYYY`  | Sets the format of the returned date.       |
|            [`bodyType`](#bodytype)            | String  |    `modal`     | Sets the calendar mode.                     |
| [`showCalendarDisplay`](#showcalendardisplay) | Boolean |     `true`     | Shows or hides the calendar display.        |
|      [`customWeekDays`](#customweekdays)      |  Array  |  EN Weekdays   | Sets custom calendar weekdays.              |
|        [`customMonths`](#custommonths)        |  Array  | EN Month names | Sets custom calendar months name.           |
|         [`customOkBTN`](#customokbtn)         | String  |      `OK`      | Sets custom OK button label.                |
|      [`customClearBTN`](#customclearbtn)      | String  |    `Clear`     | Sets custom Clear button label.             |
|     [`customCancelBTN`](#customcancelbtn)     | String  |    `CANCEL`    | Sets custom CANCEL button label.            |
|        [`firstWeekday`](#firstweekday)        | Number  |      `0 `      | Sets first weekday of the calendar.         |
|        [`selectedDate`](#selecteddate)        |  Date   |     `null`     | Sets the default picked date.               |
|             [`minDate`](#mindate)             |  Date   |     `null`     | Sets the min selectable date.               |
|             [`maxDate`](#maxdate)             |  Date   |     `null`     | Sets the max selectable date.               |
|        [`jumpToMinMax`](#jumptominmax)        | Boolean |     `true`     | Jumps to min \| max dates using year arrows |
|     [`disableWeekends`](#disableweekends)     | Boolean |    `false`     | Disables weekends.                          |
|     [`disableWeekDays`](#disableweekdays)     |  Array  |      `[]`      | Disables specific days of the week.         |
|        [`disableDates`](#disabledates)        |  Array  |      `[]`      | Disables specific dates.                    |
|           [`markDates`](#markdates)           |  Array  |      `[]`      | Mark specific dates.                        |

### el

This option specifies the id of the `<input>` element that the instance needs to be linked to. The id needs to be specified as a css selector.

```js
const datepicker = MCDatepicker.create({
	el: '#example'
});
```

:::important

This option is required

:::

<br />

---

<br />

### dateFormat

This option is used to specify the format of the returned date. By default is set to `DD-MMM-YYYY`. More details about the valid formats can be found [here](date-formating.md)

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	dateFormat: 'dddd, dd-mmmm-yy'
});
```

<br />

---

<br />

### bodyType

This option sets the calendar UI type, currently, it supports only 2 types: `modal` and `inline`

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	bodyType: 'inline'
});
```

<br />

---

<br />

### showCalendarDisplay

Use this option to show or hide the calendar display in the `modal` mode.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	showCalendarDisplay: 'false'
});
```

:::note

This option works only on desktop!

:::

<br />

---

<br />

### customWeekDays

Add an array of custom weekdays, they will be used to display weekdays when a date is picked, also these custom weekdays are used by calendar table.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	customWeekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
});
```

:::important

The array should start with Sunday

:::

<br />

---

<br />

### customMonths

Similar to `customWeekDays` this option will be used to display the month of the picked day, also they are used in the calendar table.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	customMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
});
```

<br />

---

<br />

### customOkBTN

Use this option to set a custom label of the OK button

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	customOkBTN: 'ok'
});
```

<br />

---

<br />

### customClearBTN

Use this option to set a custom label of the Clear button

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	customClearBTN: 'Șterge'
});
```

<br />

---

<br />

### customCancelBTN

Use this option to set a custom label of the CANCEL button

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	customCancelBTN: 'Anulează'
});
```

<br />

---

<br />

### firstWeekday

If you are living in Europe, you probably need the calendar to start on Monday. This option allows you to set the first weekday of the calendar table. Accepts numbers from 0 to 6, where 0 represents Sunday.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	firstWeekday: 1
});
```

<br />

---

<br />

### selectedDate

Use this option to set a picked date when the calendar is rendered for the first time. By default, the option is set to null.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	selectedDate: new Date()
});
```

<br />

---

<br />

### minDate

Use this option to set the smallest selectable date. By default, the option is set to null.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	minDate: new Date(2020, 10, 25)
});
```

<br />

---

<br />

### maxDate

Use this option to set the biggest selectable date. By default, the option is set to null.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	maxDate: new Date(2021, 5, 15)
});
```

<br />

---

<br />

### jumpToMinMax

Jumps to min \| max dates if the prev \| next year is out of min \| max dates

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	minDate: new Date(2020, 10, 25),
	maxDate: new Date(2021, 5, 15),
	jumpToMinMax: 'false'
});
```

<br />

---

<br />

### disableWeekends

By enabling this option, you are disabling Saturday and Sunday so they cannot be selected.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	disableWeekends: true
});
```

<br />

---

<br />

### disableWeekDays

Similar to `disableWeekends` , this option disables custom weekdays.
You need to add an array of indexes that represents the weekdays you want to disable. Accepts numbers from 0 to 6, where 0 represents Sunday.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	disableWeekDays: [2, 3]
});
```

<br />

---

<br />

### disableDates

If you want to disable a specific date, this option allows you to disable any date you want. Accepts an array of dates objects.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	disableDates: [new Date(2021, 5, 6), new Date(2021, 4, 15)]
});
```

<br />

---

<br />

### markDates

This option allows you to mark custom dates. Accepts an array of dates objects.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	markDates: [new Date(2021, 4, 4), new Date(2021, 6, 11)]
});
```
