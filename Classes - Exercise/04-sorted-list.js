class List {
    #innerArray;

    constructor(array = []) {
        this.#innerArray = array;
        this.size = this.#innerArray.length;
    }

    add(element) { 
        let currentIndex;

        //binary search:
        if (this.size == 0) {
            currentIndex = 0;
        } else {
            let start = 0;
            let end = this.size - 1;
            let currentElement;

            while (start <= end) {
                currentIndex = (start + end) / 2 | 0;
                currentElement = this.#innerArray[currentIndex];

                if (currentElement < element) {
                    start = currentIndex + 1;
                } else if (currentElement > element) {
                    end = currentIndex - 1;
                }
            }

            currentIndex = currentElement < element ? currentIndex + 1 : currentIndex;
        }

        this.#innerArray.splice(currentIndex, 0, element);
        this.size++;      
    }

    remove(index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error('Index out of bounds.');
        }
        this.#innerArray.splice(index, 1);
        this.size--;
    }

    get(index) {
        if (index < 0 || index > this.size - 1) {
            throw new Error('Index out of bounds.');
        }
        return this.#innerArray[index];
    }
}

let list = new List();
list.add(1);
list.add(2);
list.add(4);
list.add(3);
list.add(-5);
console.log(list.size)