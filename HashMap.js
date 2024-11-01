import LinkedList from "./LinkedList.js";

export default class HashMap{
    constructor(loadFactor = 0.75){
        this.bucketSize = 16;
        this.buckets = [];
        this.loadFactor = loadFactor;
        this.currentEntries = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.bucketSize;
        }
        return hashCode;
      } 
    
    set(key, value){
        const hashValue = this.hash(key);
        if(this.buckets[hashValue]){
            let keyLocation = this.buckets[hashValue].findKey(key);
            if(keyLocation !== null){
                updateValue(keyLocation, value);
            }
            else{
                this.buckets[hashValue].append(key, value);
            }
        }
        else{
            this.buckets[hashValue] = new LinkedList;
            this.buckets[hashValue].append(key, value);
        }
        this.currentEntries += 1;
        if(this.currentEntries >  this.bucketSize * this.loadFactor){
            const oldBuckets = this.entries();
            this.bucketSize *= 2;
            this.clear();
            oldBuckets.forEach(element => {
                this.set(element[0], element[1]);
            });
        }
    }

    get(key){
        const hashValue = this.hash(key);
        if(this.buckets[hashValue] !== undefined){
            const whereKey = this.buckets[hashValue].findKey(key);
            return this.buckets[hashValue].at(whereKey).value;
        }
        return null;
    }

    has(key){
        const hashValue = this.hash(key);
        if(this.buckets[hashValue] !== undefined){
            return this.buckets[hashValue].containsKey(key);
        }
        return false;
    }

    remove(key){
        const hashValue = this.hash(key);
        if(this.buckets[hashValue] !== undefined){
            const whereKey = this.buckets[hashValue].findKey(key);
            if(!whereKey !== null){
                this.buckets[hashValue].removeAt(whereKey);
                return true;
            }
        }
        return false;
    }

    length(){
        return this.currentEntries;
    }

    clear(){
        this.buckets = [];
        this.currentEntries = 0;
    }

    keys(){
        let array = [];
        for(let i = 0; i < this.bucketSize; i++){
            if(this.buckets[i] !== undefined){
                for(let j = 0; j < this.buckets[i].size(); j++){
                    array.push(this.buckets[i].at(j).key);
                }
            }
        }
        return array;
    }

    values(){
        let array = [];
        for(let i = 0; i < this.bucketSize; i++){
            if(this.buckets[i] !== undefined){
                for(let j = 0; j < this.buckets[i].size(); j++){
                    array.push(this.buckets[i].at(j).value);
                }
            }
        }
        return array;
    }

    entries(){
        let output = [];
        for(let i = 0; i < this.bucketSize; i++){
            if(this.buckets[i] !== undefined){
                const nodeCount = this.buckets[i].size();
                for(let j = 0; j < nodeCount; j++){
                    output.push([this.buckets[i].at(j).key, this.buckets[i].at(j).value]);
                }
            }
        }
        return output;
    }
}