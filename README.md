**Repo Owner:** Ben Guaraldi [@benguaraldi](https://github.com/benguaraldi)


# DHIS2 Helpers
This is a set of scripts written in JavaScript/Node.js which can help you load data/metadata into DHIS2 instance.

## List of loaders
- Users
- Approvals
- Data Values
- Duplicates


## Usage
### Server credentials
Set these `env` variables first:
```shell
DHIS_BASEURL=https://www.dhis2.org/
DHIS_USERNAME=admin
DHIS_PASSWORD=Secret!
```

Then you can use loading methods via examples below.

### Users
Assume you have a list of user objects. This script will push them for you to the server.
```javascript
import {insertUser} from "@pepfar-react-lib/dhis2-helpers";
const users = require('./mixedUsers.json');  // JSON with DHIS2 user objects

users.forEach(u=>{
    insertUser(u);
});
```

### Data values
Data value loader expects data as a URL string
```javascript
let query = `de=aaa&co=bbb&ds=ccc&ou=ddd&pe=eee&value=fff&cc=ggg&cp=hhh`;

insertDataValue(query);
```


### Duplicates

You can specify a list of duplicates:
```javascript
const Rwanda1:DedupeValueSet = {
    orgUnitId: 'xxx',
    dataSet: 'yyy',
    period: '2020Q4',
    dataElement_de: "zzz",
    categoryOptionCombo_co: "aaa",
    dataValues: [{
        value: 10010,
        categoryOption_cp: 'bbb',
    },{
        value: 10030,
        categoryOption_cp: 'ccc',
    }]
};

const Rwanda2:DedupeValueSet = {
    orgUnitId: 'xxx',
    dataSet: 'yyy',
    period: '2020Q4',
    dataElement_de: "zzz",
    categoryOptionCombo_co: "aaa",
    dataValues: [{
        value: 10020,
        categoryOption_cp: 'bbb',
    },{
        value: 10040,
        categoryOption_cp: 'ccc',
    }]
};

export const dedupeValueSets:DedupeValueSet[] = [Rwanda1,Rwanda2];
```

Then you can use dedupe loader:
```javascript
import {dedupeValueSets} from "./dataValues.data";
import {insertDedupes} from "@pepfar-react-lib/dhis2-helpers";

insertDedupes(dedupeValueSets);
```
