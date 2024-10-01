
function selectOption(option) {
   
    if (option === 'yes') {
        
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; 
            displayhappy(); 
        });
    } else if (option === 'no') {
        document.getElementById('question').style.display = 'none'; 
        displaysad(); 
    } else {
        
        alert('Invalid option!');
    }
}


function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); 
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; 
        if (callback) {
            callback();
        }
    }, 2000); 
}


function displayquestion() {

    var imageContainer = document.getElementById('image-container');

    var question = new Image();

    question.src = 'question.gif'; 

    questionImage.alt = 'question';

    questionImage.onload = function() {
        imageContainer.appendChild(questionImage);
    };
}


function displayhappy() {

    document.getElementById('image-container').innerHTML = '';
    
    var imageContainer = document.getElementById('image-container');
    
    var happyImage = new Image();
   
    happyImage.src = 'happy.gif'; 
    
    happyImage.alt = 'happy';
    
    happyImage.onload = function() {
        imageContainer.appendChild(happyImage);
    
        document.getElementById('options').style.display = 'none';
    };
}



function displaysad() {

    document.getElementById('image-container').innerHTML = '';
    
    var imageContainer = document.getElementById('image-container');
    
    var sadImage = new Image();
   
    sadImage.src = 'sad.gif'; 
    
    sadImage.alt = 'sad';
    
    sadImage.onload = function() {
        imageContainer.appendChild(sadImage);
    
        document.getElementById('options').style.display = 'none';
    };
}

displayquestion();