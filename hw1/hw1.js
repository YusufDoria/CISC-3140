// -------------------------
// Part 1: Array functions
// -------------------------

function sum(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

function average(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total / array.length
}

function min(array) {
    let smallest = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i]
        }
    }
    return smallest
}

function max(array) {
    let largest = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]
        }
    }
    return largest
}

console.log("sum([1,2,3,4,5])")
console.log(sum([1,2,3,4,5]))

console.log("average([1,2,3,4,5])")
console.log(average([1,2,3,4,5]))

console.log("min([3,7,2,9,5])")
console.log(min([3,7,2,9,5]))

console.log("max([3,7,2,9,5])")
console.log(max([3,7,2,9,5]))


// -------------------------
// Part 2: String functions
// -------------------------

function capitalize(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        result += str[i].toUpperCase()
    }
    return result
}

function reverse(str) {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

function countVowels(str) {
    let count = 0
    let vowels = "aeiouAEIOU"

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++
        }
    }
    return count
}

console.log("capitalize('hello')")
console.log(capitalize("hello"))

console.log("reverse('hello')")
console.log(reverse("hello"))

console.log("countVowels('hello world')")
console.log(countVowels("hello world"))


// -------------------------
// Part 3: Object methods
// -------------------------

let student = {
    name: "Yusuf",
    grades: [90, 85, 88, 92],

    getAverage: function () {
        let total = 0
        for (let i = 0; i < this.grades.length; i++) {
            total += this.grades[i]
        }
        return total / this.grades.length
    },

    isHonorRoll: function () {
        if (this.getAverage() >= 90) {
            return true
        } else {
            return false
        }
    }
}

console.log("student.getAverage()")
console.log(student.getAverage())

console.log("student.isHonorRoll()")
console.log(student.isHonorRoll())
