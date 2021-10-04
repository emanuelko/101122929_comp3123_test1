const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve,reject) =>{
        if(mixedArray.length>=0 && Array.isArray(mixedArray)){
            const filterArray = mixedArray.filter((element) => typeof element === "string");
            const lowercase = filterArray.map((items) => items.toLowerCase());
            resolve(lowercase);
        }
        else{
            reject("Please input an acceptable array");
        }
    });
};

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
lowerCaseWords(mixedArray)
    .then((res) =>
    console.log(res))
    .catch((err =>
        console.log(err))
    );