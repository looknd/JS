//插入排序
var arr = [23,34,3,4,23,44,333,444];

var arrShow = (function insertionSort(array){

for (var i = 1; i < array.length; i++) {
	var key = array[i]; //存起来
	var j = i - 1; // j=i的后一位，这里的j--，也是为了比i小一位。
	while (j >= 0 && array[j] > key) {
		array[j + 1] = array[j];
		j--; //这里的j--，就是因为进入这个循环，就是要把较小的数放在前面，所以j--，在出去欧的array【j+1】的时候，index就是小1位的；
		// console.log(j)
	}
	array[j + 1] = key;//这里是如果不大于之前的就存起来下一次再比。
}
// console.log(i);//8
// console.log(j);//6
	return array;
})(arr);

console.log(arrShow);//[3, 4, 23, 23, 34, 44, 333, 444]

// 十进制转二进制
 function divideBy2(decnumber){
 	var remstack = new Stack(),
 		rem,
 		binatyString = '';
 	while(decnumber >0){
 		rem = Math.floor(decnumber % 2)
 		remstack.push(rem)
 		decnumber = Math.floor(decnumber / 2);
 	}
 	while(! remstack.isEmpty()){
 		binatyString += remstack.pop().toString() //这里是倒着把数值拼接在一起
 	}
 	return binatyString
 }


 console.log(divideBy2(233))//11101001 //在没有pop之前，在栈里是10010111，
 console.log(divideBy2(10))//1010
 console.log(divideBy2(1000))//1111101000

 //转换为任意进制

 function baseConverter(decnumber,base){
 	var remstack = new Stack(),
 		rem,
 		baseString = '',
 		digits = '0123456789ABCDEF'

 	while(decnumber > 0){
 		rem = Math.floor(decnumber % base)
 		remstack.push(rem)
 		decnumber = Math.floor(decnumber /base)
 	}
 	while(!remstack.isEmpty()){
 		baseString += digits[decnumber.pop()]
 	}
 	return baseString
 }

console.log(100345,2) //1100011111111101
console.log(100345,8) //303771
console.log(100345,16) //187F9
//十进制，余数为0或1. 八进制，余数为0-8之间的数。
//十六进制，0-8之间的数加上A,B,C,D,E,F(对应10，11，12，13，14，15)

//最小优先级队列
function PriorityQueue () {
	var items = [];
	function QueueElement (element,prority){
		this.element = element
		this.prority =prority
	}
	this.enqueue = function(element,prority){
		var queueElement = new QueueElement(element,prority)
		if(items.isEmpty()){
			items.push(queueElement)
		}else{
			for(var i =0 ;i<items.length; i++){
				if(queueElement.prority < items.prority){
						items.splice(i,0,queueElement)
						added = true;
						break
				}
			}
		}
		if(!added){
			items.push(queueElement)
		}
	}
}
var PriorityQueue = new PriorityQueue;
console.log(PriorityQueue('json'),1)
console.log(PriorityQueue('socct'),2)
console.log(PriorityQueue('bob'),1)
//我们这里实现的优先级成为最小优先级，因为优先级的值较小的元素被放置在队列最前面(1代表最高级)。
//最大优先级队列与之相反，把优先级的值较大的元素放置在队列最前面
















