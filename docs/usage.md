---
id: usage
title: Usage
sidebar_label: Usage
---

In order to use MCDatepicker you need an `<input />` tag, `type` of `text`

```html
<input id="datepicker" type="text" />
```

If you’re using a bundler, e.g. webpack, you’ll need to add a [SASS loader](https://webpack.js.org/loaders/sass-loader/) to webpack, and import ` MCDatepicker`

```javascript
import MCDatepicker from 'mc-datepicker';
```

#### 1. Create a new instance, and attach it to an input tag

```javascript
const picker = MCDatepicker.create({
	el: '#datepicker'
});
```

#### 2. Customize the datepicker by adding more options

```javascript
const picker = MCDatepicker.create({
	el: '#datepicker',
	disableWeekends: true
});
```

#### 3. Use methods to manipulate the datepicker

```javascript
btn.onclick = () => picker.open();
```
