var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validateInputType(type) {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var arg = args_1[_a];
                if (arg === null || arg === undefined) {
                    throw new Error("Argument '" + arg + "' cannot be null or undefined");
                }
                if (type === "number") {
                    if (typeof arg !== "number" ||
                        arg < 0 ||
                        /[^\d]/.test(arg.toString())) {
                        throw new Error("Argument '" + arg + "' is not a valid number");
                    }
                }
                else if (type === "string") {
                    if (typeof arg !== "string" || /[^\D]/.test(arg.toString())) {
                        throw new Error("Argument '" + arg + "' is not a valid string");
                    }
                }
                else if (type === "email") {
                    if (typeof arg !== "string" ||
                        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(arg)) {
                        throw new Error("Argument '" + arg + "' is not a valid email");
                    }
                }
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.method1 = function (str) {
        console.log("Method1:", str);
    };
    MyClass.prototype.method2 = function (num) {
        console.log("Method2:", num);
    };
    MyClass.prototype.method3 = function (email) {
        console.log("Method3:", email);
    };
    __decorate([
        validateInputType("string")
    ], MyClass.prototype, "method1");
    __decorate([
        validateInputType("number")
    ], MyClass.prototype, "method2");
    __decorate([
        validateInputType("email")
    ], MyClass.prototype, "method3");
    return MyClass;
}());
var obj = new MyClass();
obj.method1("Hello@gmail.com");
obj.method2(369);
obj.method3("abc@gmail.com");
