
import { Layout } from '../Components/Layout'
import { useParams } from 'react-router-dom';
import React, {  useState ,useEffect } from 'react'
export const Edit = () => {
  const [isSubmitted,setIsSubmitted] = useState('');

  const [student,setStudent] = useState({
    data:{
        attributes:{
            name:''
        }
    }
    
});//Empty Array
let params = useParams();

useEffect(()=>{
  console.log('Page Loaded Succeffully');
  getStudent(params.stu_id);
},[]);

console.log(  params.stu_id);
let getStudent = (student_id=1)=>{// e = event //ES6 Fat arrow functions // default argument

  console.log('good morning')
  //Alway wrap the api calling code inside trycatch block
  try {

      fetch(`http://localhost:1337/api/students/`+student_id)
      .then((data)=>{
      //let make data json readable
      return data.json();
      }).then((data)=>{
      console.log(data);

      setStudent(data);
      }).catch((err)=>{
          console.log(err);
      });


  } catch (error) {
  console.log(error)
  }
}
let handleChange = (e)=>{ //ES6 Fat Arrow functions
  console.log('hello',e.target.value);

  setStudent({
   ...student,
   data:{
       attributes:{
           name:e.target.value
       }
   }

  });

}

let submitStudent = (e)=>{
e.preventDefault();


setIsSubmitted('disabled');
console.log('submitted');

///api/friends/:id
let data = {  //JSON Javascript Object Notation
   "data": {
     "name": student.data.attributes.name
   }
};

// With the help of fetch api i have to make PUT Request
fetch(`http://localhost:1337/api/students/`+params.stu_id,{
   method:"PUT",
   headers: {
       'Content-Type': 'application/json',
   },
   body: JSON.stringify(data),
})
.then((data)=>{
   //let make data json readable
   return data.json();
}).then((data)=>{
   console.log(data);
   setIsSubmitted('');
  


}).catch((err)=>{
   console.log(err);
});
}
  return (
    <Layout>

                <div>EditStudent {params.stu_id}</div>

                <form onSubmit={(e)=>{ submitStudent(e) }}>
                    <label>Enter your name:
                    <input 
                        type="text" 
                        name="friend_name" 
                        value={ student.data.attributes.name }
                        onChange={ (e)=>{ handleChange(e) } }
                    />
                    </label>
                    <input type="submit" className={`btn btn-primary ${isSubmitted} `}/>
                </form>
         
    </Layout>
  )
}
