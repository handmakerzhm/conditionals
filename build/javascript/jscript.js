
/*Example: 1
Simple conditional check: For example, if you change any text or the name in the variable the condition does not check out.*/

// let name = 'Javascript';

// if(name === 'Javascript'){
// //Normal test
// alert('This is Javascript. Try the next 3 examples for more conditional statements.');
// //Test used with a template literal
// alert(`Remember this is ${name}....`);
// }


/*Example:2
The example below checks out if you enter the correct answer. Else, you get the alert of the next condition. This is used to check two conditions. */


//  let name = prompt('what is the programming language for web development?');

//  if(name === 'javascript'){
//     // alert('Correct answer is Javascript');
//     alert(`Correct answer is ${name}`);
//  }else{
//     alert(`Incorrect answer try again`);
// }

/*Example: 3 
The example below just combines some examples of different code that I've learned, on my adventure. The goal is creating some basic beginner friendly examples, that displays how they can be used together. */

// let color = prompt('What color do you prefer for the background color? green,or sienna?');

// let color1 = 'green';
// let color2 = 'sienna';

// let websiteBackground = document.querySelector('body');

// if(color === 'green'){
    // alert('Correct answer is Javascript');

//    alert(`You prefer ${color1} for the background`);
//     websiteBackground.style.backgroundColor='green';

//  }else if(color === 'sienna'){
//     alert(`You prefer ${color2} for the background`);

//     websiteBackground.style.backgroundColor='sienna';

// }else{
//     alert('Sorry :-(  The value does not match the available options. :-)');

    // websiteBackground.style.backgroundColor='darkgrey';
// }

// setTimeout (()=> 
// alert('This is Javascript!....{;-)'), 1500);

/*Example:4 */
let color = prompt('What color do you prefer for the background color? black,blue,grey,purple,red?');

let color1 = 'red';
let color2 = 'blue';
let color3 = 'purple';
let color4 = 'grey';
let color5 = 'black;'

let websiteBackground = document.querySelector('body');

if(color==='red'){
    // alert('Correct answer is Javascript');
    alert(`You prefer ${color1} for the background`);
    websiteBackground.style.backgroundColor='red';
 }else if(color === 'blue'){
    alert(`You prefer ${color2} for the background`);
    websiteBackground.style.backgroundColor='blue';
}else if(color === 'purple'){
    alert(`You prefer ${color3} for the background`);
    websiteBackground.style.backgroundColor='purple';
}
else if(color === 'grey'){
    alert(`You prefer ${color4} for the background`);
    websiteBackground.style.backgroundColor='grey';
}
else if(color === 'black'){
    alert(`You prefer ${color5} for the background`);
    websiteBackground.style.backgroundColor='black';
}else{
    alert('Sorry :-(  The value does not match the available options. :-)');
    websiteBackground.style.backgroundColor='orangered';
}

setTimeout (()=> 
alert('This is Javascript...{;-)'), 1500);