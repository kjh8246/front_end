const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log('1.toString')
console.log(fruits.toString())
console.log('2.join')
console.log(fruits.join('**'))  //지정된 문자열 '**' 을 이용하여 배열값들을 연결합니다.
let fruit = fruits.pop          //맨 마지막 값부터 하나씩 추출(뽑아오기)
console.log('3.pop')
console.log(fruits)
console.log(fruit)
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.pop())
console.log(fruits.pop())
console.log(fruits.pop())
console.log(fruits)
console.log('4.push')
fruits.push('키위')             //배열에 맨 마지막 위치에 새로운 값 추가. 리턴값 없음
console.log(fruits)
fruits.push('banana')
fruits.push('Mango')
fruits.push('Apple')
console.log(fruits)
console.log('5.shift(), unshift() 는 생략(개인연습)')  //pop , push 메소드와 방향만 다릅니다
console.log('6.delete')
delete fruits[1];        //특정요소값을 지우기 -> undefined
console.log('delete item : '+fruits[1])
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const result = arr1.concat(arr2)
console.log(result)
console.log('8.splice')
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2,0,"Lemon","Kiwi");
console.log(fruits2)
const del = fruits2.splice(4, 1, "래몬", "키위");
console.log(fruits2)

console.log(del)
fruits2.splice(2,2);
console.log(fruits2)
console.log('9.slice')
const fruits3 = ["Banana", "Orange", "Lemon","Apple", "Mango"];
const citrus = fruits3.slice(1,3);
console.log(citrus)
console.log(fruits3.slice(3))







