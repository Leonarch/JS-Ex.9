function getKeys(obj) {
  console.log(obj);
  let newKeys = []; 
  for( element in obj){
    
  newKeys.push(element);
    
  }

return newKeys;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);
