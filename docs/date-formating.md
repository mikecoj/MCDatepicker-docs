---
id: date-formating
title: Date Formating
sidebar_label: Date Formating
---

## Date Formatting Tokens

The Formatter is not case-sensitive and accepts either lower-case or upper-case characters. Both `dd` and `DD`, will work perfectly fine.

| Code | Description                                              | Example |
| ---- | -------------------------------------------------------- | ------- |
| d    | Day of the month, 1 digit without leading zeros          | 5       |
| dd   | Day of the month, 2 digits with leading zeros            | 05      |
| ddd  | A sort textual representation of a day                   | Mon     |
| dddd | A full textual representation of a day                   | Monday  |
| m    | Numeric representation of a month, without leading zeros | 1       |
| mm   | Numeric representation of a month, with leading zero     | 01      |
| mmm  | A short textual representation of a month                | Jan     |
| mmmm | A full textual representation of a month                 | January |
| yy   | A two digit representation of a year                     | 92      |
| yyyy | A full numeric representation of a year, 4 digits        | 1992    |

<br />

---

<br />

## Separator Tokens

|        Code         |  Glyph   | Description          | Example          |
| :-----------------: | :------: | -------------------- | ---------------- |
|      (U+002E)       |   `.`    | Full Stop            | dd.mm.yy         |
|      (U+002D)       |   `-`    | Hyphen-minus         | dd-mm-yy         |
|      (U+002C)       |   `,`    | Comma                | dd,mm,yy         |
|      (U+0020)       |   ` `    | Space                | dd mm yy         |
| (U+002C) + (U+0020) | ` ,` ` ` | Comma + Space        | dddd, dd, mm, yy |
