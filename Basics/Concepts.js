// //Sync of JS

// // console.log('Sync 1');

// // setTimeout(_ => console.log('Timeout 2'),0);

// // Promise.resolve().then(_ => console.log('Promise 3'));

// // console.log('Sync 4');

// const getFruit = async(name) =>{
//     const fruit = {
//         pineapple: '🍍',
//         peach: '🍑',
//         strawberry: '🍓' 
//     } 

//     await delay(1000);

//     return fruit[name];
// }

// //Promises

// // const makeSmoothie=()=>{
// //     let a;
// //     return getFruit('pineapple').then(v =>{
// //         v = a;
// //         return getFruit('strawberry')
// //     }).then(v => [v,a])
// // }

// //Async Await

// const makeSmoothie = async() =>{
//     const a = await getFruit('pineapple');
//     const b = await getFruit('strawberry');

//     return [a, b];
// }


// {
//     if(orgAddress != null){
//         if(orgAddress.match(/\b\d{1,6}\b/g) == null){
//             postalCode = "N/A";
//         }else{
//             postalCode = (parseInt(orgAddress.match(/\b\d{1,6}\b/g)[(orgAddress.match(/\b\d{1,6}\b/g)).length-1]));
//         }
//     }else{
//         postalCode = "N/A";
//     }
// }


// {`(${orgAddress} != null) ? ${orgAddress}.match(/\b\d{1,6}\b/g) == null ? "N/A" : (parseInt(${orgAddress}.match(/\b\d{1,6}\b/g)[(${orgAddress}.match(/\b\d{1,6}\b/g)).length-1])) : "N/A"`}
