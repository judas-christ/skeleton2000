export default function test(arg) {
  return () => console.log(arg)
}

export class TestClass {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}
