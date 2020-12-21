// Final Project


//loads sound
function preload() {
    Jump = loadSound('jump.wav')
}


// for moving clouds
    var cloud1;
    var cloud2;
    var cloud3;
    
// player lives + jumping max
    var playerLives = [5, 4, 3, 2, 1]
    
        function setup() {
            createCanvas(600, 500);
            
          // player's starting width and height
            playerWidth = 30
            playerHeight = height - 69
    
          // moving platform starting point
            platformX = 399
            platformHeight = height - 14
    
          // background color
            r = 0
            b = 170
            g = 255
            
            cloud1 = new Cloud();
            cloud2 = new Cloud();
            cloud3 = new Cloud();
        }

        function draw() {
          
          // no cursor + background color
            noCursor()
            background(r, b, g)
            
            // makes platforms with grass on it
            blocks(0, height - 30)
            blocks(99, height - 30)
            blocks(299, height - 30)
            blocks(499, height - 30)
          
            //displays spikes
            spikes(199, height)
          
            //displays sun
            sun()
             
            // displays still clouds
            clouds(50)
            clouds(250)
            clouds(450)
            clouds(650)
            
            //displays clouds movement
            cloud1.move();
            cloud1.display();
            cloud2.move();
            cloud2.display();
            cloud3.move();
            cloud3.display();
            
            //makes platform
             
            platform()
            
            //creates mountain
            
            fill("brown")
            stroke("brown")
            rect(499, height/3, width, height-64)
            blocks(498, height/3)
            
            //create flag
            stroke(0)
            strokeWeight(5)
            line(width-30, (height/3)-13, width-30, (height/3)-60)
            
            fill(255, 0, 0)
            strokeWeight(2)
            triangle(width-30, (height/3)-24, width-30, (height/3)-60,                 width-70, (height/3)-23.5)
            
            //creates and makes player move
            player()
            
            //displays lives
            
            textSize(25)
            fill(0)
            text("Player Lives: " + playerLives.length, 20, 20)

          
        }
        
         function sun() {
            //makes sun appear in the middle of the screen
            fill("yellow")
            strokeWeight(10)
            stroke("orange")
            ellipse(width/2, height/2, 200, 200)
            
            
        }
        
                function player() {
          
            //draws the character
            stroke("black")
            strokeWeight(1)
            fill(255)
            ellipse(playerWidth, playerHeight, 20, 20)
            rect(playerWidth-10, playerHeight+10, 20, 23.85)
                        
            // left key function
            if (keyIsDown(LEFT_ARROW)){
                playerWidth -= 5
            }
            
            // right key function
            if (keyIsDown(RIGHT_ARROW)){
                playerWidth += 5
            }

          // player will not be able to move out of the left side or max height
            if (playerWidth < 0) {
              playerWidth = 1
              playerHeight = height - 64
            }
            
            //once player reaches spikes, player will fall into them
            
            if (playerWidth >= 199 && playerWidth <= 299) {
                playerHeight += 3
            }
            
                // if player height is below the dirt platform, then they lose a life and restart at the starting point
            if (playerHeight >= height-55) {
                playerLives.splice(0,1)
                playerWidth = 30
                playerHeight = height - 64
            }
          
                  
          // not sure, but if removed jump function does not work
            if (playerHeight <= height - 69) {
                playerHeight += 5
            }
            if (playerHeight <= height - 265) {
                playerHeight += 200
            }
            
            //once player reaches platform

            if (playerWidth > platformX && playerWidth < 499) {
                if (playerHeight > platformHeight) {
                    playerHeight += 5
                } else if (playerWidth <= platformHeight) {
                    playerHeight -= 20
                }
            }

          // once player reaches the top of the mountain, their height is fixed to the mountain height
            if (playerWidth >= 499) {
                playerHeight = (height/3)-35
            }
          
          // "you lose" appears once player loses their lives
          
            if (playerLives.length == 0) {
                textSize(25)
                fill(0)
                text("You Lose!", (width/2)-50, height-250)
                noLoop();
            }
            
          // if player reaches the width location of the flag, then they win
            if (playerWidth >= width-30) {
                textSize(25)
                fill(0)
                    text("You Win!", (width/2)-50, height-250)
                noLoop();
            }
      }
      
        // jump function (work in progess)
       function keyPressed() {
         if (key == "w" || key == "W") {
           Jump.play();
           playerHeight -= 200
         }
       }
      
      function blocks(w, h) {
            
            //creates dirt (brown area) on platform
            fill("brown")
            stroke("brown")
            strokeWeight(1)
            rect(w, h, 99, 30)
            fill("green")
            strokeWeight(2)
            stroke("green")
            
            //creates grass
            triangle(w, h+1, w+33, h+1, w+16, h+24)
            triangle(w+33, h+1, w+66, h+1, w+49, h+24)
            triangle(w+66, h+1, w+99, h+1, w+83, h+24)
        }
        
        
        //creates and randomizes cloud movement
        
        function Cloud(){
        this.x = random(width);
        this.y = random(height/2);
        this.speed = random(2,6);
        
        this.move = function(){
          this.x += this.speed;
          if(this.x > width){
            this.x = 0;
          }
        }
        
        this.display = function(){
            fill("white")
            stroke("grey")
            strokeWeight(2)
            ellipse(this.x,this.y, 70, 50)
            ellipse(this.x,this.y, 70, 50)
            ellipse(this.x,this.y, 70, 50)
        }
        
        }
        
        function clouds(w2) {
            
            //makes clouds
            
            fill("white")
            stroke("white")
            ellipse(w2, 30, 50, 50)
            ellipse(w2+20, 40, 50, 50)
            ellipse(w2+40, 30, 50, 50)
            
            ellipse(w2+100, 40, 50, 50)
            ellipse(w2+120, 30, 50, 50)
            ellipse(w2+140, 40, 50, 50)
        }
        
        function platform() {
            
            //creates moving platform
            stroke(251, 251, 216)
            fill(251, 251, 216)
            rect(platformX, platformHeight, 99, 30)
            platformHeight -= 5
          
           //if platforms reach the top of screen, reset to default height
            if (platformHeight <= 0) {
                platformHeight = height - 20
            }
        }
        
        function spikes(spikeWidth, spikeHeight) {
            fill(0)
            stroke(0)
            triangle(spikeWidth, spikeHeight+1, spikeWidth+33, spikeHeight+1, spikeWidth+16, spikeHeight-24)
            triangle(spikeWidth+33, spikeHeight+1, spikeWidth+66, spikeHeight+1, spikeWidth+49, spikeHeight-24)
            triangle(spikeWidth+66, spikeHeight+1, spikeWidth+99, spikeHeight+1, spikeWidth+83, spikeHeight-24)
            
       }