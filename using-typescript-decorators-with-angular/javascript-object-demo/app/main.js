var JavaScriptObjectDemo;
(function (JavaScriptObjectDemo) {
    function displayObjectProperties(obj) {
        console.group('Object Properties:');
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                console.log(prop + ": " + obj[prop]);
            }
        }
        console.groupEnd();
    }
})(JavaScriptObjectDemo || (JavaScriptObjectDemo = {}));
