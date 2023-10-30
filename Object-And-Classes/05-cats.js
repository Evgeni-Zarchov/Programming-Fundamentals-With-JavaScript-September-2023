function animals(data) {

    class Cats {
        constructor(name, age) {
            this.name = name;
            this.age = age;

        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let cat of data) {
        let [name, age] = cat.split(' ');
        let animals = new Cats(name, age);
        animals.meow();
    }
}
animals(['Mellow 2', 'Tom 5']);