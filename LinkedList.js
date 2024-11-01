export default class LinkedList{
    constructor(){
        this.head = null
    }

    append(key, value){
        const newNode = new Node(key, value);
        if(this.head == null){
            this.head = newNode;
        }
        else{
            let temp = this.head;
            while(temp.nextNode){
                temp = temp.nextNode;
            }
            temp.nextNode = newNode;
        }
    }

    prepend(key, value){
        const newNode = new Node(key, value);
        if(this.head == null){
            this.head = newNode;
        }
        else{
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    size(){
        if(this.head == null){
            return "0";
        }
        else{
            let output = 0;
            let temp = this.head;
            while(temp.nextNode){
                output += 1;
                temp = temp.nextNode;
            }
            return output + 1;
        }
    }

    getHead(){
        return this.head;
    }

    getTail(){
        if(this.head == null){
            return "0";
        }
        else{
            let temp = this.head;
            while(temp.nextNode){
                temp = temp.nextNode;
            }
            return temp;
        }
    }

    at(index){
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.nextNode;
        }
        return temp;
    }

    pop(){
        if(this.head == null){
            return;
        }
        else{
            let temp = this.head;
            let previous;
            while(temp.nextNode){
                previous = temp;
                temp = temp.nextNode;
            }
            previous.nextNode = null;
        }
    }

    contains(value){
        if(this.head == null){
            return false;
        }
        else{
            let temp = this.head;
            while(temp.nextNode){
                if(temp.value == value){
                    return true;
                }
                temp = temp.nextNode;
            }
            if(temp.value == value){
                return true;
            }
            return false;
        }
    }
    containsKey(key){
        if(this.head == null){
            return false;
        }
        else{
            let temp = this.head;
            while(temp.nextNode){
                if(temp.key == key){
                    return true;
                }
                temp = temp.nextNode;
            }
            if(temp.key == key){
                return true;
            }
            return false;
        }
    }

    find(value){
        if(this.head == null){
            return "null";
        }
        else{
            let index = 0;
            let temp = this.head;
            while(temp.nextNode){
                if(temp.value == value){
                    return index;
                }
                temp = temp.nextNode;
                index += 1;
            }
            if(temp.value == value){
                return index;
            }
            return "null";
        }
    }
    findKey(key){
        if(this.head == null){
            return null;
        }
        else{
            let index = 0;
            let temp = this.head;
            while(temp.nextNode){
                if(temp.key == key){
                    return index;
                }
                temp = temp.nextNode;
                index += 1;
            }
            if(temp.key == key){
                return index;
            }
            return null;
        }
    }

    toString(){
        if(this.head == null){
            return "null";
        }
        else{
            let output = "";
            let temp = this.head;
            while(temp.nextNode){
                output += `( ${temp.value} ) -> `;
                temp = temp.nextNode;
            }
            return output + `( ${temp.value} ) -> ` + "null";
        }
    }

    insertAt(key, value, index){
        const newNode = new Node(key, value);
        if(this.head == null){
            this.head = newNode;
            return;
        }
        else{
            let temp = this.head;
            let previous;
            for(let i = 0; i < index; i++){
                previous = temp;
                temp = temp.nextNode;
            }
            if(previous){
                previous.nextNode = newNode;
                newNode.nextNode = temp;
            }
            else{
                this.head = newNode;
                newNode.nextNode = temp;
            }
            return;
        }
    }

    removeAt(index){
        if(this.head == null){
            return;
        }
        else{
            let temp = this.head;
            let next, previous;
            let dontSkip = 1;
            for(let i = 0; i < index; i++){
                if(i+1 == this.size()){
                    dontSkip = 0;
                    break;
                }
                previous = temp;
                temp = temp.nextNode;
                next = temp.nextNode; 
            }
            if(dontSkip)next = temp.nextNode; 
            if(previous && next){
                previous.nextNode = next;
            }
            else if(previous){
                previous.nextNode = null;
            }
            else{
                this.head = next;
            }
            return;
        }
    }
    updateValue(index, value){
        if(this.head == null){
            return;
        }
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.nextNode;
        }
        temp.value = value;
    }
}

class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }
}