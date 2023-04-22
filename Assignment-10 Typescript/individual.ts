function validateInputType(type: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      for (let arg of args) {
        if (arg === null || arg === undefined) {
          throw new Error(`Argument '${arg}' cannot be null or undefined`);
        }
        if (type === "number") {
          if (
            typeof arg !== "number" ||
            arg < 0 ||
            /[^\d]/.test(arg.toString())
          ) {
            throw new Error(`Argument '${arg}' is not a valid number`);
          }
        } else if (type === "string") {
          if (typeof arg !== "string" || /[^\D]/.test(arg.toString())) {
            throw new Error(`Argument '${arg}' is not a valid string`);
          }
        } else if (type === "email") {
          if (
            typeof arg !== "string" ||
            !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(arg)
          ) {
            throw new Error(`Argument '${arg}' is not a valid email`);
          }
        }
      }
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}
class MyClass {
  @validateInputType("string")
  public method1(str: string) {
    console.log("Method1:", str);
  }
  @validateInputType("number")
  public method2(num: number) {
    console.log("Method2:", num);
  }
  @validateInputType("email")
  public method3(email: string) {
    console.log("Method3:", email);
  }
}
const obj = new MyClass();
obj.method1("Hello@gmail.com");
obj.method2(369);
obj.method3("abc@gmail.com");
