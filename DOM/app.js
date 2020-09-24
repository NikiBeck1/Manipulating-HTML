document.addEventListener('DOMContentLoaded', function() {

    let friends = ['Britt', 'Blake', 'Dalton', 'Meagan', 'Jasmine', 'Jordan', 'Tres', 'Josh', 'Landon'];
    let friendCounter  = 0;
    // let button = document.createElement('button');
    // let btnText = document.createTextNode('Click Me!');
    // button.appendChild(btnText);
    // document.body.appendChild(button);

    // button.addEventListener('click', function(){
    //     alert('Hello There!');
    // })
    
    document.getElementById('boxButton');
    boxButton.addEventListener('click', function() {
        let message = document.getElementById('textBox').value;
        alert(message);
    })

    
    let div = document.createElement('div');
    div.className = 'Square';
    document.body.appendChild(div);
    div.style.backgroundColor = "black";
    div.style.width = '100px';
    div.style.height = '100px';
    div.addEventListener('mouseenter', function() {
        let hover = div.style.backgroundColor = 'tomato';
        div.appendChild(hover);
    })
    div.addEventListener("mouseleave", function() { 
        div.style.backgroundColor = "black";
    })
    
    let para = document.createElement('p');
    let text = document.createTextNode("When I click this statement it will change colors.")
    para.appendChild(text);
    document.body.appendChild(para);

    para.addEventListener('click', function() {
        para.style.color = "tomato";
    })

    let button = document.createElement('button');
    let btnText = document.createTextNode('My Name!');
    button.appendChild(btnText);
    document.body.appendChild(button);
    
    
    let box = document.createElement('div');
    document.body.appendChild(box);
    box.style.backgroundColor = 'tomato';
    box.style.height = '30px';
    box.style.width = '80px';
    box.style.marginTop = '10px';

    button.addEventListener('click', function() {
        let span = document.createElement('span');
        span.style.color = 'white';
        let spanText = document.createTextNode("Niki Beck!");
        spanText.className = "spanText";
        span.appendChild(spanText);
        box.appendChild(span);
    })

    let secondButton = document.createElement('button');
    let secondBtnText = document.createTextNode('My Friends!');
    secondButton.appendChild(secondBtnText);
    document.body.appendChild(secondButton);
    secondButton.style.marginTop = '10px';
    

    secondButton.addEventListener('click', function() {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        if (friends[friendCounter]) {
            li.innerText = friends[friendCounter];
            ul.appendChild(li);
            document.body.appendChild(ul);
            friendCounter++;
        }
    })


})