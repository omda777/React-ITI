
class Shape {
    #color ;
    constructor(color){
        if(this.constructor.name === "Shape"){
            throw new Error("Cannot create instance of abstract class");
        }
        this.#color = color;
    }

    set color(val){
        this.#color = val;
    }

    get color(){
        return this.#color;
    }

    drawShape () {
        console.log("color : " , this.#color);
    }
}

export default Shape ;