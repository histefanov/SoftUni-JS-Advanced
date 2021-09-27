function createSortedList() {
  return {
    nums: [],
    add: function (num) {
      this.nums.push(num);
      this.nums.sort((a, b) => a - b);
      this.size++;
    },
    remove: function (index) {
      if (index >= 0 && index < this.nums.length) {
        this.nums.splice(index, 1);
        this.size--;
      }
    },
    get: function (index) {
      if (index >= 0 && index < this.nums.length) {
        return this.nums[index];
      }
    },
    size: 0,
  };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
