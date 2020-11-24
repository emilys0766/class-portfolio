    var cloud1;
    var cloud2;
    var cloud3;
    
    var playerLives = [5, 4, 3, 2, 1]
    var maxJump = [1]
    
        function setup() {
            createCanvas(600, 500);
            
            playerWidth = 30
            playerHeight = height - 69.85
            platformHeight = height - 64.85
    
            
            r = 0
            b = 170
            g = 255
            
            cloud1 = new Cloud();
            cloud2 = new Cloud();
            cloud3 = new Cloud();
        }

        function draw() {
            noCursor()
            background(r, b, g) //(WOT)
            
            // makes platforms with grass on it
            blocks(0, height - 30)
            blocks(99.9, height - 30)
            blocks(299.7, height - 30)
            blocks(499.8, height - 30)
            
            //displays spikes
            spikes(199.8, height)
            
            
            //displays sun
            sun()
            
            //constrains user
            
             // var leftWall = 0;
             // var rightWall = width;
             
            
            
            clouds(50)
            clouds(250)
            clouds(450)
            clouds(650)
            
            //displays clouds
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
            rect(499.7, height/3, width, height-64.84)
            blocks(498.7, height/3.2)
            
            //create flag
            stroke(0)
            strokeWeight(5)
            line(width-30, (height/3)-13, width-30, (height/3)-60)
            
            fill(255, 0, 0)
            strokeWeight(2)
            triangle(width-30, (height/3)-24, width-30, (height/3)-60, width-70, (height/3)-23.5)
            
            //creates and makes player move
            player()
            
            //displays lives
            
            textSize(25)
            fill(0)
            text("Player Lives: " + playerLives.length, 20, 20)
            
            // var playerConstrain = constrain(playerWidth, leftWall, rightWall)
        }
        
         function sun() {
            //makes sun appear in the middle of the screen
            fill("yellow")
            strokeWeight(10)
            stroke("orange")
            ellipse(width/2, height/2, 200, 200)
            
            
        }
        
        function player() {
            //draws character
            stroke("black")
            strokeWeight(1)
            fill(255)
            ellipse(playerWidth, playerHeight, 20, 20)
            rect(playerWidth-10, playerHeight+10, 20, 23.85)
                        
            // left key = move left
            if (keyIsDown(LEFT_ARROW)){
                playerWidth -= 5
            }
            
            //right key = move right
            if (keyIsDown(RIGHT_ARROW)){
                playerWidth += 5
            }
            
            //if player reaches platforms and fails, they lose
            
            if (playerWidth >= 399.6 && playerWidth <= 499.7) {
                playerHeight += 3
            }
            
            if (playerWidth >= 199.8 && playerWidth <= 299.7) {
                playerHeight += 3
            }
                
            if (playerWidth >= 499.8) {
               playerHeight = height - 64.85
            }    
            
                
            if (playerHeight >= height-55.85 || playerWidth <= 0) {
                playerLives.splice(0,1)
                playerWidth = 30
                playerHeight = height - 64.85
            }
            
            if (playerLives.length == 0) {
                textSize(25)
                fill(0)
                text("You Lose!", (width/2)-50, height-250)
                noLoop();
            }
            
            if (playerWidth >= width-30) {
                textSize(25)
                fill(0)
                    text("You Win!", (width/2)-50, height-250)
                noLoop();
            }
            
                        //makes player able to move on top of mountain
            if (playerWidth >= 499.7) {
                playerHeight = (height/3)-50.5
            }
            
            //if player moves out to left of the screen they lose a point
        
      }
      
      function blocks(w, h) {
            
            //creates dirt (brown area) on platform
            fill("brown")
            stroke("brown")
            strokeWeight(1)
            rect(w, h, 99.9, 30)
            fill("green")
            strokeWeight(2)
            stroke("green")
            
            //creates grass
            triangle(w, h+1, w+33.3, h+1, w+16.4, h+24.85)
            triangle(w+33.3, h+1, w+66.6, h+1, w+49.7, h+24.85)
            triangle(w+66.6, h+1, w+99.9, h+1, w+83, h+24.85)
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
            
            //creates platform
            stroke(251, 251, 216)
            fill(251, 251, 216)
            rect(399.6, platformHeight, 99.9, 30)
            
            //if platforms reach the top of screen, reset to default height
            platformHeight -= 5
            
            
            //If player reaches platform, they ride on it. If they go off the platform, player glides down. (WOT)
            
            if (platformHeight <= 0) {
                platformHeight = height - 30
            }
            
            if (playerWidth >= 299.7 + 99.9 && playerWidth <= 499.8 /* && playerHeight == platformHeight*/) {
                playerHeight = platformHeight - 30
            }
            else if (playerHeight <= height - 69.85) {
                playerHeight += 5
            }
        }
        
        function spikes(spikeWidth, spikeHeight) {
            
            //creates spikes
            fill(0)
            stroke(0)
            triangle(spikeWidth, spikeHeight+1, spikeWidth+33.3, spikeHeight+1, spikeWidth+16.4, spikeHeight-24.85)
            triangle(spikeWidth+33.3, spikeHeight+1, spikeWidth+66.6, spikeHeight+1, spikeWidth+49.7, spikeHeight-24.85)
            triangle(spikeWidth+66.6, spikeHeight+1, spikeWidth+99.9, spikeHeight+1, spikeWidth+83, spikeHeight-24.85)
            
        }
      
       function keyPressed() {
         if (key == "w" || key == "W") {
           playerHeight -= 200
           maxJump.splice(0, 1)
         }
         if (maxJump.length == 0) {
           playerHeight = height - 69.85
           maxJump.push(0, 1)
         }
       }