const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener('resize',() => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

// const arr = ['red','blue','black','orange','purple','green','yellow',];

//     for(let i=0;i<50;i++){

//         let x2 = Math.random() * innerWidth;
//         let y2 = Math.random() * innerHeight;
//         let fill = Math.floor(Math.random() * arr.length);
        
//         ctx.beginPath();
//         ctx.fillStyle = arr[fill];
//         ctx.arc(x2,y2,50,0,Math.PI * 2,false);
//         ctx.fill();
//     }

//!                <-------- Variable --------->

let colorArr = [
    '#219ebc',
    '#ffb703',
    '#d90429',
    '#2a9d8f',
    '#0077b6',
    '#52796f',
    '#5e60ce',
    '#2d6a4f',
    '#d00000',
    '#ff8fab',
    '#f9844a',
    '#7b2cbf',
    '#ff0a54',
    '#38b000',
    '#f20089'
]
let circle = new  Circle()
let circleArr = []
let mouse = {
    x: undefined,
    y: undefined
}
let maxRadius = 40;
let minRadius = 5;

//!                    <-------------- event listerner ---------->


window.addEventListener('mousemove',function(e){
            mouse.x = e.x;
            mouse.y = e.y;
            
})
window.addEventListener('touchstart',function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    
})

//!                    <-------------- main function ---------->



function Circle(x,y,dx,dy,radius){
    
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.minRadius = 
    this.radius = radius;
    this.color = colorArr[Math.floor(Math.random() * colorArr.length)];

    this.draw = function() {

        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'white';
        ctx.fill();
        ctx.stroke();
    }

    this.update = function(){

        if(this.x + radius > innerWidth || this.x - radius < 0){ 
            this.dx =+ -this.dx
        }
        if(this.y + radius > innerHeight || this.y - radius < 0){
            this.dy =+ -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;

        //* interactivity

            if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
                if(this.radius < maxRadius){

                    this.radius += 3;
                }
            }else if(this.radius > minRadius){
                
                this.radius -= 3;
            }

        this.draw();
    }
}

//!                             <---------- circle creating code -------->

for(let i=0;i<300;i++){

    let radius = Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let dx = (Math.random() * 0.5) * 10;
    let y = Math.random() * (innerHeight -radius * 2) + radius;
    let dy = (Math.random() * 0.5) * 10;

    circleArr.push(new Circle(x,y,dx,dy,radius))
   

}

//!                          <--------- animation function ----------->

function animate(){

    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight)

    for(let i=0;i<circleArr.length;i++){
        circleArr[i].update();
    }
}

animate(); 

