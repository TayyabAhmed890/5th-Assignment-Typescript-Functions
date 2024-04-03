//Simple Function..!

function greet(Name:string,ID:number) {
    console.log(`Hello! ${Name} Welcome to Our Enterprises your ID is ${ID}`);
    
    
};

greet("Tayyab Ahmed",108091);
greet("Ali Ahmed",108093);
greet("Hammad",108057);

function Offer(Discount=70,Complimentery=1,Buy1Get1=1) {
    let myOffer = 1000-Discount+Complimentery+Buy1Get1;
    console.log(`Your Offer is: ${myOffer}`);
    
    return myOffer
    
}

console.log(Offer(100,2,4));
console.log(Offer(50,2,5));


//Fat Arrow Function..!

const checkin = (Name:string,Time:string,Id:number) => {
    console.log(`${Name} your Checkin Timing is ${Time} id is ${Id}`);
    

};

checkin("Tayyab Ahmed","9:10 AM",108091);