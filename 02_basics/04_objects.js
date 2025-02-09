const tinderUser=new Object()


tinderUser.id="123abc"
tinderUser.name="xamp"
tinderUser.isLoggedIn=false
// console.log(tinderUser);


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            fname:"Aman",
            lname:"tripathi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fname);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

// const obj3={obj1,obj2}
// const obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4);
// console.log(obj1);


const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);



const user=[
    {
        id:1,
        email:"aman@gmail.com"
    },
    {
        id:1,
        email:"aman@gmail.com"
    },
    {
        id:1,
        email:"aman@gmail.com"
    },
    {
        id:1,
        email:"aman@gmail.com"
    }
]
// console.log(user[2].id);


//  console.log(tinderUser)

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));

//  console.log(tinderUser.hasOwnProperty('name'));
 
 const course={
    coursename:"JS",
    price:"999",
    courseInstructor:"Aman"
 }

 const{coursename:cn}=course
console.log(cn);


