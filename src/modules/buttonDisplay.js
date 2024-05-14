/*global document, console window*/

import calculator from "./calculator";
import memory from "./memory";

const buttonDislplay = () => {
    let currentNo = '';
    let isSolved = false;
    const display = document.getElementById('recent');
    const container = document.getElementById('button-container');
    const inputs = document.getElementById('inputs');
    const buttons = [
        {key: 'MC', func: () => {
            memory.clearMemory();
            memory.displayMemory();
        }},
        {key: 'MR', func: (arr, display) => {
            memory.recallMemory(display);
            memory.displayMemory();
            currentNo = display.innerHTML;
            console.log(currentNo);
        }},
        {key: 'M+', func: (arr, display) => {
            memory.addMemory(Number(display.innerHTML));
            memory.displayMemory();
        }},
        {key: 'M-', func: (arr, display) => {
            memory.removeMemory(Number(display.innerHTML));
            memory.displayMemory();
        }},
        {key: 'C', func: (arr, display) => {
            display.innerHTML = '0';
            currentNo = '';
        }},
        {key: 'CE', func: (arr, display, display2) => {
            display.innerHTML = '0';
            display2.innerHTML = '';
            arr.length = 0;
        }},
        {key: 'Del', func: (arr, display) => {
            if(display.innerHTML == 0){
                return;
            }else if(display.innerHTML.length == 1){
                display.innerHTML = '0';
            }else{
                currentNo = currentNo.slice(0, -1);
                display.innerHTML = display.innerHTML.slice(0, -1);
            }
        }},
        {key: '&#247', func: (arr, display, display2) => {
            if(display2.innerHTML == ''){
                arr.push(Number(currentNo), '&#247');
                currentNo = '';
                if(display.innerHTML.charAt(0) == '-'){
                display2.innerHTML = `(${display.innerHTML})` + '&#247';
                }else{
                display2.innerHTML += display.innerHTML + ' &#247 ';
                }     
                display.innerHTML = '0';
                console.log(calculator.numbers);
            }else{
                isSolved = true;
                if(arr[arr.length - 1] == 'X'){
                    display.innerHTML = calculator.multiplication(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else if(arr[arr.length - 1] == '-'){
                    display.innerHTML = calculator.subtraction(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else if(arr[arr.length - 1] == '+'){
                    display.innerHTML = calculator.addition(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else if(arr[arr.length - 1] == '&#247'){
                    display.innerHTML = calculator.division(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else{
                    display.innerHTML = 'Error';
                    display2.innerHTML = '';
                    arr.length = 0;
                }
            }
            
        }},
        {key: 7, func: (arr, display) => {
            if(display.innerHTML == '0'){
                display.innerHTML = '7';
                currentNo = '7';
                return;
            }else if(isSolved == true){
                display.innerHTML = '7';
                isSolved = false;
                currentNo = '7';
                arr.length = 0;
            }else{
                display.innerHTML += '7';
                currentNo += '7';
            }
        }},
        {key: 8, func: (arr, display) => {
            
            if(display.innerHTML == '0'){
                display.innerHTML = '8';
                currentNo = '8';
                return;
            }else if(isSolved == true){
                display.innerHTML = '8';
                isSolved = false;
                currentNo = '8';
                arr.length = 0;
            }else{
                display.innerHTML += '8';
                currentNo += '8';
            }
        }},
        {key: 9, func: (arr, display) => {
            
            if(display.innerHTML == '0'){
                display.innerHTML = '9';
                currentNo = '9';
                return;
            }else if(isSolved == true){
                display.innerHTML = '9';
                isSolved = false;
                currentNo = '9';
                arr.length = 0;
            }else{
                display.innerHTML += '9';
                currentNo += '9';
            }
        }},
        {key: 'X', func: (arr, display, display2) => {
            if(display2.innerHTML == ''){
                arr.push(Number(currentNo), 'X');
                currentNo = '';
                if(display.innerHTML.charAt(0) == '-'){
                display2.innerHTML = `(${display.innerHTML})` + ' X ';
                }else{
                display2.innerHTML += display.innerHTML + ' X ';
                }     
                display.innerHTML = '0';
            }else{
                isSolved = true;
                if(arr[arr.length - 1] == 'X'){
                    display.innerHTML = calculator.multiplication(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else if(arr[arr.length - 1] == '-'){
                    display.innerHTML = calculator.subtraction(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else if(arr[arr.length - 1] == '+'){
                    display.innerHTML = calculator.addition(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else if(arr[arr.length - 1] == '&#247'){
                    display.innerHTML = calculator.division(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else{
                    display.innerHTML = 'Error';
                    display2.innerHTML = '';
                    arr.length = 0;
                }
            }
            
            console.log(calculator.numbers);
        }},
        {key: 4, func: (arr, display) => {
            
            if(display.innerHTML == '0'){
                display.innerHTML = '4';
                currentNo = '4';
                return;
            }else if(isSolved == true){
                display.innerHTML = '4';
                isSolved = false;
                currentNo = '4';
                arr.length = 0;
            }else{
                display.innerHTML += '4';
                currentNo += '4'
            }
        }},
        {key: 5, func: (arr, display) => {
            
            if(display.innerHTML == '0'){
                display.innerHTML = '5';
                currentNo = '5';
                return;
            }else if(isSolved == true){
                display.innerHTML = '5';
                isSolved = false;
                currentNo = '5';
                arr.length = 0;
            }else{
                display.innerHTML += '5';
                currentNo += '5'
            }
        }},
        {key: 6, func: (arr, display) => {
            
            if(display.innerHTML == '0'){
                display.innerHTML = '6';
                currentNo = '6';
                return;
            }else if(isSolved == true){
                display.innerHTML = '6';
                isSolved = false;
                currentNo = '6';
                arr.length = 0;
            }else{
                display.innerHTML += '6';
                currentNo += '6'
            }
        }},
        {key: '-', func: (arr, display, display2) => {
            if(display2.innerHTML == ''){
                arr.push(Number(currentNo), '-');
                currentNo = '';
                if(display.innerHTML.charAt(0) == '-'){
                    display2.innerHTML = `(${display.innerHTML})` + ' - ';
                }else{
                    display2.innerHTML += display.innerHTML + ' - ';
                }     
                display.innerHTML = '0';
            }else{
                isSolved = true;
                if(arr[arr.length - 1] == 'X'){
                    display.innerHTML = calculator.multiplication(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else if(arr[arr.length - 1] == '-'){
                    display.innerHTML = calculator.subtraction(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else if(arr[arr.length - 1] == '+'){
                    display.innerHTML = calculator.addition(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else if(arr[arr.length - 1] == '&#247'){
                    display.innerHTML = calculator.division(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else{
                    display.innerHTML = 'Error';
                    display2.innerHTML = '';
                    arr.length = 0;
                }
            }
            console.log(calculator.numbers);
        }},
        {key: 1, func: (arr, display) => {
            
            if(display.innerHTML == '0'){
                display.innerHTML = '1';
                currentNo = '1';
                return;
            }else if(isSolved == true){
                display.innerHTML = '1';
                isSolved = false;
                currentNo = '1';
                arr.length = 0;
            }else{
                display.innerHTML += '1';
                currentNo += '1'
            }
        }},
        {key: 2, func: (arr, display) => {
            
            if(display.innerHTML == '0'){
                display.innerHTML = '2';
                currentNo = '2';
                return;
            }else if(isSolved == true){
                display.innerHTML = '2';
                isSolved = false;
                currentNo = '2';
                arr.length = 0;
            }else{
                display.innerHTML += '2';
                currentNo += '2'
            }
        }},
        {key: 3, func: (arr, display) => {
            
            if(display.innerHTML == '0'){
                display.innerHTML = '3';
                currentNo = '3';
                return;
            }else if(isSolved == true){
                display.innerHTML = '3';
                currentNo = '3';
                isSolved = false;
                arr.length = 0;
            }else{
                display.innerHTML += '3';
                currentNo += '3'
            }
        }},
        {key: '+', func: (arr, display, display2) => {
            if(display2.innerHTML == ''){
                arr.push(Number(currentNo), '+');
                currentNo = '';
                if(display.innerHTML.charAt(0) == '-'){
                    display2.innerHTML = `(${display.innerHTML})` + ' + ';
                }else{
                    display2.innerHTML += display.innerHTML + ' + ';
                }     
                display.innerHTML = '0';
            }else{
                isSolved = true;
                if(arr[arr.length - 1] == 'X'){
                    display.innerHTML = calculator.multiplication(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else if(arr[arr.length - 1] == '-'){
                    display.innerHTML = calculator.subtraction(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else if(arr[arr.length - 1] == '+'){
                    display.innerHTML = calculator.addition(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else if(arr[arr.length - 1] == '&#247'){
                    display.innerHTML = calculator.division(arr[arr.length - 2], display.innerHTML);
                    display2.innerHTML = '';
                    arr.length = 0;
                    
                } else{
                    display.innerHTML = 'Error';
                    display2.innerHTML = '';
                    arr.length = 0;
                }
            }
            
            console.log(calculator.numbers);
        }},
        {key: '±', func: (arr, display) => {
            if(display.innerHTML != 0){
                currentNo = '-' + currentNo;
                display.innerHTML = `(-${display.innerHTML})`;
            }else{
                window.alert('There is no negative 0, You Moron!!');
            }
        }},
        {key: 0, func: (arr, display) => {
            
            if(display.innerHTML == 0){
                display.innerHTML = '0';
                currentNo = '0';
                return;
            }else if(isSolved == true){
                display.innerHTML = '0';
                isSolved = false;
                currentNo = '0';
                arr.length = 0;
            }else{
                display.innerHTML += '0';
                currentNo += '0'
            }
        }},
        {key: '.', func: (arr, display) => {
            if(isSolved == true){
                display.innerHTML = '0.';
                isSolved = false;
            }else{
                display.innerHTML += '.';
                currentNo += '.';
            }
        }},
        {key: '=', func: (arr, display, display2) => {
            isSolved = true;
            if(arr[arr.length - 1] == 'X'){
                display.innerHTML = calculator.multiplication(arr[0], display.innerHTML);
                display2.innerHTML = '';
                arr.length = 0;
                currentNo = display.innerHTML;
                
            } else if(arr[arr.length - 1] == '-'){
                display.innerHTML = calculator.subtraction(arr[0], display.innerHTML);
                display2.innerHTML = '';
                arr.length = 0;
                currentNo = display.innerHTML;
                
            } else if(arr[arr.length - 1] == '+'){
                display.innerHTML = calculator.addition(arr[0], display.innerHTML);
                display2.innerHTML = '';
                arr.length = 0;
                currentNo = display.innerHTML;
                
            } else if(arr[arr.length - 1] == '&#247'){
                display.innerHTML = calculator.division(arr[0], display.innerHTML);
                display2.innerHTML = '';
                arr.length = 0;
                currentNo = display.innerHTML;
                
            } else{
                display.innerHTML = 'Error';
                display2.innerHTML = '';
                arr.length = 0;
                currentNo = display.innerHTML;
            }
        }}
    ]

    buttons.forEach(button => {
        const buttonContainer = document.createElement('button');
        buttonContainer.innerHTML = button.key;
        buttonContainer.classList.add('button');
        buttonContainer.addEventListener('click',()=>{
            button.func(calculator.numbers, display, inputs);
        });
        container.appendChild(buttonContainer);
    })

}

export default buttonDislplay;