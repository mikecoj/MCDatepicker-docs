---
id: configuration
title: Configuration
---

| Option  |  Type  |       Default       | Description |
|:-------:|:------:|---------------------|-------------|
|    el: | String | null | The id of the input to be linked |
| dateFormat: | String | 'DD-MMM-YYYY' | the date format to be aplied to the retuned date |
| bodyType: | String | 'modal' | body type of the calendar, currently suports only 2 types: 'modal' and 'inline' |
| showCalendarDisplay | Boolean | true | shows or hide the calendar dysplay, works only on desktop |
| customWeekDays | Array | EN Weekdays | datepicker uses custom weekdays if they are present |
| firstWeekday | Number | 0 | Sets the firs weekday, accepts numbers 0 to 6 |
| customMonths | Array | EN Month names| datepicker uses custom month names if they are pressent |
| selectedDate | Date | null | sets the default picked date |
| disableWeekends | Boolean | false | disable weekends so they are not clickable |
| disableWeekDays | Array | [] | disable the weekdays equal to specified number, accept numbers 0-6 |
| disableDates | Array | [] | allows to disable specific dates, accepts date obects |
| markDates | Array | [] | allows to mark spcific dates, accepts date obects |


#### el

```js
const myDatePicker = MCDatepicker.create({ 
      el: '#example' 
})
```

<br />

---

<br />

#### dateFormat

```js
const myDatePicker = MCDatepicker.create({ 
      dateFormat: 'dddd, dd-mmmm-yy' 
})
