'use strict';

function Table() {
    return {
        get: get
    };

    function get() {
        return "The Table get value";
    }
};

module.exports = Table;
