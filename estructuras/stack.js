class Stack{
    constructor(){
      this.items = {};
      this.top = 0;
    }
  
    push(data){
      this.top++;
      this.items[this.top] = data;
    }
  
    pop(){
      if (this.top){
        delete this.items[this.top];
        this.top--;
      }else{
        console.log("esta vacio")
      }
      
    }
  
    getZize(){
      return this.top;
    }
  
    pintar(){
      return this.items;
    }
  }
  
  var stack = new Stack();
  stack.push("luz");
  stack.push("ramon");
  stack.push("alexander");
  stack.push("luz");
  stack.push("ramon");
  stack.push("alexander");
  stack.pop();
  console.log(stack.pintar());
  console.log(stack.getZize());