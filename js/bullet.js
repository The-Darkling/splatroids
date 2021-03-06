//bullets, fired by the player.
function Bullet(newX, newY) {
    "use strict";
    this.angle = 0.785398;
    
    this.circRad = 11;
    
    this.position = new Vector(newX, newY);
    this.velocity = new Vector(0, 0);
    this.direction = new Vector(this.circRad*Math.cos(this.angle), this.circRad*Math.sin(this.angle));
    
    
    
    this.draw = function() {
        ctx.fillStyle = "grey";
        
        ctx.beginPath();
        
        ctx.save();
        ctx.translate(this.position.x + this.circRad/2, this.position.y - this.circRad/2);
        ctx.rotate(this.direction.direction());
        ctx.translate(-this.circRad/2, -this.circRad/2);
        
        ctx.moveTo(this.circRad/4, 3 * this.circRad/4);
        ctx.arc(this.circRad/4, 3 * this.circRad/4, this.circRad/2, 0, Math.PI, false);
        ctx.moveTo(-this.circRad/4, 3 * this.circRad/4);
        ctx.lineTo(3 * this.circRad/4, 3 * this.circRad/4);
        ctx.lineTo(3 * this.circRad/4, -this.circRad/4);
        ctx.lineTo(-this.circRad/4, -this.circRad/4);
        ctx.lineTo(-this.circRad/4, 3 * this.circRad/4);
        
        ctx.restore();
                
        ctx.fill();
    };
    
};