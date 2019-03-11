'use strict';

class StrMatch {
    constructor() {}

    match(str, lis) {
        if (Array.isArray(lis) == false) {
            let reg = new RegExp(str, lis);
            return reg.compile();
        }

        return lis.map(x => {
            return str.replace(x, "*");
        }).all(x => x == true);
    }
}