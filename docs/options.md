---
id: configuration
title: Configuration
---

|       Option        |  Type   |    Default     | Description                                                                     |
| :-----------------: | :-----: | :------------: | ------------------------------------------------------------------------------- |
|         el          | String  |     `null`     | The id of the input to be linked                                                |
|     dateFormat      | String  | `DD-MMM-YYYY`  | The date format to be applied to the returned date                              |
|      bodyType       | String  |    `modal`     | Body type of the calendar, currently suports only 2 types: 'modal' and 'inline' |
| showCalendarDisplay | Boolean |     `true`     | Shows or hide the calendar display, works only on desktop                       |
|   customWeekDays    |  Array  |  EN Weekdays   | The datepicker uses custom weekdays if they are present                         |
|    customMonths     |  Array  | EN Month names | The datepicker uses custom month names if they are pressent                     |
|    firstWeekday     | Number  |      `0 `      | Sets the firs weekday, accepts numbers 0 to 6                                   |
|    selectedDate     |  Date   |     `null`     | Sets the default picked date                                                    |
|   disableWeekends   | Boolean |    `false`     | Disables weekends                                                               |
|   disableWeekDays   |  Array  |      `[]`      | Disables the weekdays, accept numbers 0-6                                       |
|    disableDates     |  Array  |      `[]`      | Allows to disable specific dates, accepts date obects                           |
|      markDates      |  Array  |      `[]`      | Allows to mark spcific dates, accepts date obects                               |

#### el

```js
const datepicker = MCDatepicker.create({
	el: '#example'
});
```

<br />

---

<br />

#### dateFormat

```js
const datepicker = MCDatepicker.create({
	dateFormat: 'dddd, dd-mmmm-yy'
});
```

<br />

---

<br />

#### bodyType

```js
const datepicker = MCDatepicker.create({
	bodyType: 'inline'
});
```

<br />

---

<br />

#### showCalendarDisplay

```js
const datepicker = MCDatepicker.create({
	showCalendarDisplay: 'false'
});
```

<br />

---

<br />

#### customWeekDays

```js
const datepicker = MCDatepicker.create({
	customWeekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
});
```

<br />

---

<br />

#### customMonths

```js
const datepicker = MCDatepicker.create({
	customMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
});
```

<br />

---

<br />

#### firstWeekday

```js
const datepicker = MCDatepicker.create({
	firstWeekday: 1
});
```

<br />

---

<br />

#### selectedDate

```js
const datepicker = MCDatepicker.create({
	selectedDate: new Date()
});
```

<br />

---

<br />

#### disableWeekends

```js
const datepicker = MCDatepicker.create({
	disableWeekends: true
});
```

<br />

---

<br />

#### disableWeekDays

```js
const datepicker = MCDatepicker.create({
	disableWeekDays: [2, 3]
});
```

<br />

---

<br />

#### disableDates

```js
const datepicker = MCDatepicker.create({
	disableDates: [new Date(2021, 5, 6), new Date(2021, 4, 15)]
});
```

<br />

---

<br />

#### markDates

```js
const datepicker = MCDatepicker.create({
	markDates: [new Date(2021, 4, 4), new Date(2021, 6, 11)]
});
```
