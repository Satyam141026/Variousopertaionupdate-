import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { Layout } from '../Components/Layout';

const config=require('../config.json')

const EditStudent = () => {
 //1. State / Hooks
 const [student,setStudent] = useState({
    data:{
        attributes:{
            Name:''
        }
    }
});//Empty Array
const [isLoading,setIsLoading] = useState(false);
const [isSubmitted,setIsSubmitted] = useState('');

let params = useParams();

//Call the api after the page render
useEffect(()=>{
    console.log('Page Loaded Succeffully');
   // getStudent(params.stu_id);
},[]);

/* //2. Function defition
let getStudent = (student_id=1)=>{// e = event //ES6 Fat arrow functions // default argument
    console.log(config.base_url);
    console.log('good morning')
    //Alway wrap the api calling code inside trycatch block
    try {
     
        fetch(`${config.base_url}/api/students/`+student_id)
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
 */

 
let submitStudent = (e)=>{
    e.preventDefault();

    setIsLoading(true);
    setIsSubmitted('disabled');

    console.log('submitted');

    ///api/friends/:id
    let data = {  //JSON Javascript Object Notation
        "data": {
          "Name": student.data.attributes.Name
        }
    };

    // With the help of fetch api i have to make PUT Request
    fetch(`${config.base_url}/api/students/`+params.stu_id,{
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
        setIsLoading(false);
        setIsSubmitted('');
        swal("Good job!", "Friend Updated Successfully", "success");
    
    
    }).catch((err)=>{
        console.log(err);
    });
}
const handleChange=(e)=>{

    console.log('hello',e.target.value);
    setStudent({
        ...student,
        data:{
            attributes:{
                Name:e.target.value
            }
        }

       });

}
//3. Return statement JSX




  return (
    <>
    <Layout>
        {
            isLoading &&
            
            <div className="d-flex justify-content-center">
                <Spinner animation="grow" />
            </div>
        }
        

        <div>EditStudent {params.stu_id}</div>
        
        <form onSubmit={(e)=>{ submitStudent(e) }}>
            <label>Enter your name:
            <input 
                type="text" 
                name="friend_name" 
                onChange={ (e)=>{ handleChange(e) } }
                value={ student.data.attributes.name }
            />
            </label>
            <input type="submit" className={`btn btn-primary ${isSubmitted} `}/>
        </form>
    </Layout>
    
</>
  )
}

export default EditStudent