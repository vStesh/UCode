const magician = {
    _hat: './assets/images/hat.png', 
    _getPortrait(){
        if (this._portrait) return this._portrait;
        else return './assets/images/magician.png'; 
    },
    'do magic'(){
        console.log(`ABRACADABRA The prototype of ${this.name} is `);
        console.log(Object.getPrototypeOf(this)); 
    }
};