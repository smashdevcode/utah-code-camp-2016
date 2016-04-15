System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HEROES;
    return {
        setters:[],
        execute: function() {
            exports_1("HEROES", HEROES = [
                { name: 'Captain America', team: 'Blue' },
                { name: 'Iron Man', team: 'Red' },
                { name: 'War Machine', team: 'Red' },
                { name: 'Ant-Man', team: 'Blue' }
            ]);
        }
    }
});
//# sourceMappingURL=mock-heroes.js.map