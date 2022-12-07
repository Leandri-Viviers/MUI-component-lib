# MUI-datatable

Library to easily generate complex datatables in MUI

## Installation

Using npm:

```bash
npm i @leandri/mui-datatable
```

## Example

1. Import the required type renderers:

```ts
import { text } from 'mui-datatable'
```

2. Define the data:

```ts
const data = [
  { id: 1, firstname: 'Olivia', lastname: 'Thompson' },
  { id: 2, firstname: 'Emma', lastname: 'Jones' },
  { id: 3, firstname: 'Stephen', lastname: 'Roberts' },
]
```

3. Define the columns:

```ts
const columns = [
  text({ key: 'id', name: 'ID' }),
  text({ key: 'firstname', name: 'First Name' }),
  text({ key: 'lastname', name: 'Last Name' }),
]
```

4. Add the datatable:

```tsx
import { Datatable } from 'mui-datatable'

const Home = () => (
  <Paper>
    <Datatable rows={data} columns={columns} />
  </Paper>
)
```

# Type renderers

## Text

### Props

| Name      | Type             | Required | Default |
| --------- | ---------------- | -------- | ------- |
| key       | number \| string | Required | -       |
| name      | string           | Required | -       |
| formatter | function         | Optional | -       |
| align     | [align][1]       | Optional | left    |

[1]: (https://mui.com/material-ui/api/table-cell/)

### Example

```ts
import { text } from 'mui-datatable'

const rows = [
  { id: 1, firstname: 'Olivia', lastname: 'Thompson' },
  { id: 2, firstname: 'Emma', lastname: 'Jones' },
  { id: 3, firstname: 'Stephen', lastname: 'Roberts' },
]

const columns = [
  text({ key: 'id', name: 'ID' }),
  text({ key: 'firstname', name: 'First Name' }),
  text({ key: 'lastname', name: 'Last Name' }),
  text({
    key: 'fullname',
    name: 'Full Name',
    formatter: (row) => `${row.firstname} ${row.lastname}`,
    align: 'justify',
  }),
]
```

### Output

![Text Renderer Example](https://github.com/lijan3/React-component-lib/blob/main/assets/TextExample.png?raw=true)

## Number

### Props

| Name  | Type             | Required | Default |
| ----- | ---------------- | -------- | ------- |
| key   | number \| string | Required | -       |
| name  | string           | Required | -       |
| align | [align][1]       | Optional | right   |

### Example

```ts
import { text, number } from 'mui-datatable'

const rows = [
  { id: 1, name: 'Olivia', age: 18 },
  { id: 2, name: 'Emma', age: 30 },
  { id: 3, name: 'Stephen', age: 28 },
]

const columns = [
  text({ key: 'name', name: 'First Name' }),
  number({
    key: 'age',
    name: 'Age',
    align: 'left',
  }),
]
```

## Decimal

### Props

| Name      | Type             | Required | Default |
| --------- | ---------------- | -------- | ------- |
| key       | number \| string | Required | -       |
| name      | string           | Required | -       |
| precision | number           | Optional | 2       |
| prefix    | string           | Optional | -       |
| suffix    | string           | Optional | -       |
| align     | [align][1]       | Optional | right   |

### Example

```ts
import { text, decimal } from 'mui-datatable'

const rows = [
  { id: 1, name: 'Olivia', progress: 62 },
  { id: 2, name: 'Emma', progress: 100 },
  { id: 3, name: 'Stephen', progress: 86 },
]

const columns = [
  text({ key: 'name', name: 'First Name' }),
  decimal({
    key: 'progress',
    name: 'Progress',
    suffix: '%',
  }),
]
```
