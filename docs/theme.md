---
id: theme
title: Theme
---

:::info

This page lists all available properties of the `theme` object and its purpose.
All properties are optional.

:::

## `theme_color`

The `theme_color` property sets the default color of the theme. It is used across the whole calendar component (_ ex: calendar display background _), but can be overridden by other properties, in case a more specific one is setted.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		theme_color: '#38ada9'
	}
});
```

<br />

---

<br />

## `main_background`

The `main_background` property sets the background color of the main container of the datepicker.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		main_background: '#f5f5f6'
	}
});
```

<br />

---

<br />

## `active_text_color`

The `active_text_color` property sets the color of the text of the active day.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		active_text_color: 'rgb(0, 0, 0)'
	}
});
```

<br />

---

<br />

## `inactive_text_color`

The `inactive_text_color` property sets the color of the text of the inactive day.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		inactive_text_color: 'rgba(0, 0, 0, 0.2)'
	}
});
```

<br />

---

<br />

## `display`

The `display` property takes an object with two options, `background` and `foreground`, that sets the background and the text colors of the calendar display.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		display: {
			foreground: 'rgba(255, 255, 255, 0.8)',
			background: '#38ada9'
		}
	}
});
```

<br />

---

<br />

## `picker`

Similar to the `display` property, the `picker` property takes an object with two options, `background` and `foreground`, that sets the background and the text colors of the calendar picker.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		picker: {
			foreground: 'rgb(0, 0, 0)',
			background: '#f5f5f6'
		}
	}
});
```

<br />

---

<br />

## `picker_header`

The `picker_header` property takes an object with two options, `active` and `inactive`, that sets the text color of the calendar picker header (month name, year and navigation rows).

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		picker_header: {
			active: '#818181',
			inactive: 'rgba(0, 0, 0, 0.2)'
		}
	}
});
```

<br />

---

<br />

## `weekday`

The `weekday` property accepts one option, `foreground` that sets the text color of the calendar weekdays.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		weekday: {
			foreground: '#38ada9'
		}
	}
});
```

<br />

---

<br />

## `button`

The `button` property takes an object with two properties, `success` and `danger`, that represents the type of the button, and sets the text color of the button.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		button: {
			success: {
				foreground: '#38ada9'
			},
			danger: {
				foreground: '#e65151'
			}
		}
	}
});
```

<br />

---

<br />

## `date`

The `date` property takes an object with tree properties, `active`, `inactive`, and `marcked`, that represents the type of the date.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		date: {
			active: {
				default: {
					foreground: 'rgb(0, 0, 0)'
				},
				picked: {
					foreground: '#ffffff',
					background: '#38ada9'
				},
				today: {
					foreground: 'rgb(0, 0, 0)',
					background: 'rgba(0, 0, 0, 0.2)'
				}
			},
			inactive: {
				default: {
					foreground: 'rgba(0, 0, 0, 0.2)'
				},
				picked: {
					foreground: '#38ada9',
					background: '#38ada9'
				},
				today: {
					foreground: 'rgba(0, 0, 0, 0.2)',
					background: 'rgba(0, 0, 0, 0.2)'
				}
			},
			marcked: {
				foreground: '#38ada9'
			}
		}
	}
});
```

<br />

---

<br />

### `date.active`

The `active` date type has tree states `default`, `picked`, and `today`. Each state has a `foreground` option that sets the text color of the date. The `picked` and `today` states also have a `background` option that sets the background color of the date.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		date: {
			active: {
				default: {
					foreground: 'rgb(0, 0, 0)'
				},
				picked: {
					foreground: '#ffffff',
					background: '#38ada9'
				},
				today: {
					foreground: 'rgb(0, 0, 0)',
					background: 'rgba(0, 0, 0, 0.2)'
				}
			}
		}
	}
});
```

<br />

---

<br />

### `date.inactive`

Similar to the `active` date type, the `inactive` date type has tree states `default`, `picked`, and `today`. Each state has a `foreground` option . The `picked` and `today` states also have a `background` option.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		date: {
			inactive: {
				default: {
					foreground: 'rgba(0, 0, 0, 0.2)'
				},
				picked: {
					foreground: '#38ada9',
					background: '#38ada9'
				},
				today: {
					foreground: 'rgba(0, 0, 0, 0.2)',
					background: 'rgba(0, 0, 0, 0.2)'
				}
			}
		}
	}
});
```

<br />

---

<br />

### `date.marcked`

The `marcked` date type has a `foreground` option that sets the text color of the marcked date.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		date: {
			marcked: {
				foreground: '#38ada9'
			}
		}
	}
});
```

<br />

---

<br />

## `month_year_preview`

The `month_year_preview` property takes an object with two properties, `active` and `inactive`, that represents the type of the month and year preview cells. Both types accepts the following properties, `default` and `picked`.

The `picked` preview cell accepts two options `foreground` and `background`, that sets the text color of the preview cell and respectively the background.

The `active` preview cell accepts only one option, `foreground`.

```js
const datepicker = MCDatepicker.create({
	el: '#example',
	theme: {
		month_year_preview: {
			active: {
				default: {
					foreground: 'rgb(0, 0, 0)'
				},
				picked: {
					foreground: 'rgb(0, 0, 0)',
					background: 'rgba(0, 0, 0,0.2)'
				}
			},
			inactive: {
				default: {
					foreground: 'rgba(0, 0, 0, 0.2)'
				},
				picked: {
					foreground: 'rgba(0, 0, 0, 0.2)',
					background: 'rgba(0, 0, 0, 0.2)'
				}
			}
		}
	}
});
```

<br />

---

<br />

## Defaults

Default theme configuration object:

```js
const defaultTheme = {
	theme_color: '#38ada9',
	main_background: '#f5f5f6',
	active_text_color: 'rgb(0, 0, 0)',
	inactive_text_color: 'rgba(0, 0, 0, 0.2)',
	display: {
		foreground: 'rgba(255, 255, 255, 0.8)',
		background: '#38ada9'
	},
	picker: {
		foreground: 'rgb(0, 0, 0)',
		background: '#f5f5f6'
	},
	picker_header: {
		active: '#818181',
		inactive: 'rgba(0, 0, 0, 0.2)'
	},
	weekday: {
		foreground: '#38ada9'
	},
	button: {
		success: {
			foreground: '#38ada9'
		},
		danger: {
			foreground: '#e65151'
		}
	},
	date: {
		active: {
			default: {
				foreground: 'rgb(0, 0, 0)'
			},
			picked: {
				foreground: '#ffffff',
				background: '#38ada9'
			},
			today: {
				foreground: 'rgb(0, 0, 0)',
				background: 'rgba(0, 0, 0, 0.2)'
			}
		},
		inactive: {
			default: {
				foreground: 'rgba(0, 0, 0, 0.2)'
			},
			picked: {
				foreground: '#38ada9',
				background: '#38ada9'
			},
			today: {
				foreground: 'rgba(0, 0, 0, 0.2)',
				background: 'rgba(0, 0, 0, 0.2)'
			}
		},
		marcked: {
			foreground: '#38ada9'
		}
	},
	month_year_preview: {
		active: {
			default: {
				foreground: 'rgb(0, 0, 0)'
			},
			picked: {
				foreground: 'rgb(0, 0, 0)',
				background: 'rgba(0, 0, 0,0.2)'
			}
		},
		inactive: {
			default: {
				foreground: 'rgba(0, 0, 0, 0.2)'
			},
			picked: {
				foreground: 'rgba(0, 0, 0, 0.2)',
				background: 'rgba(0, 0, 0, 0.2)'
			}
		}
	}
};
```
