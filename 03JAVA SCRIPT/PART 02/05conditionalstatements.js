console.log(" ")
console.log('conditional operators')
age = 35
if (age >= 18) {
    console.log('you can vote')
}
//nested if else
let marks = 45
if (marks >= 33) {
    console.log("Pass")
    if (marks >= 80) {
        console.log(' grade A')
    }
    else {
        console.log('grade B')
    }
}
else {
    console.log('fail')
}
//switch statement
console.log(' ')
console.log('switch statement')
let color = 'red'
switch (color) {
    case 'red':
        console.log('stop')
        break;
    case 'yellow':
        console.log('slow down')
        break
    case 'red':
    console.log('GO')
    break
    default:
        console.log('Broken light')

}