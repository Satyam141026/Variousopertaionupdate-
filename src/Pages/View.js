import React, { useEffect, useState } from 'react'
import { Table ,Button ,Modal } from 'react-bootstrap';
import swal from 'sweetalert';
const config=require('../config.json')


const View = () => { 
  const [student,setStudent] = useState({
    data:[]
  });

  const [show,setShow] = useState(false);
 const [name,setName] = useState('');
const [id,setId] = useState('');
 
let submitStudent = (e)=>{
  e.preventDefault();

  //setIsLoading(true);
  //setIsSubmitted('disabled');

  console.log('submitted');

  ///api/students/:id
  let data = {  //JSON Javascript Object Notation
      "data": {
        "Name": name
      }
  };

  // With the help of fetch api i have to make PUT Request
  fetch(`${config.base_url}/api/students/`+id,{
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
      //setIsLoading(false);
      //setIsSubmitted('');
      swal("Good job!", "Friend Updated Successfully", "success");
  
  
  }).catch((err)=>{
      console.log(err);
  });
}
const getDataStudent=(pageno=1)=>{

  try {
    fetch(`${config.base_url}/api/students?pagination[page]=${pageno}&pagination[pageSize]=40`)
    .then((data)=>{
return data.json();
    })
    .then((data)=>{
    //  console.log(data);
      setStudent(data)
    })
    .catch((error)=>{
      console.log(error);
    })
    
  } catch (error) {
    
  }

}



const handleSubmit=(e)=>{
  let n = e.target.closest('tr').querySelector('td:nth-child(2)').innerHTML;
  let id = e.target.closest('tr').querySelector('td:nth-child(1)').innerHTML;
  setId(id);
  setName(n);
  console.log(e.target.closest('tr').querySelector('td:nth-child(2)').innerHTML);

  setShow(true)
}
const handleCloseof=(e)=>{


  setShow(false)
}



  return (
    <>
      <Modal size="lg" show={show}>
          <Modal.Header closeButton>
              <Modal.Title>Edit Friend</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form  onSubmit={(e)=>{submitStudent(e)}}>
                  <div className="mb-3">
                      <label htmlFor="friendname" className="form-label">Friend Name</label>
                      <input type="text" name="friend_name" value={name} onChange={(e)=>{ setName(e.target.value) }}  className="form-control" id="friendname" />
                  </div>                       
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>

          </Modal.Body>
          <Modal.Footer>
          <Button onClick={(e)=>{handleCloseof(e)}} variant="secondary" >
              Close
          </Button>
    
          </Modal.Footer>
      </Modal>
     <Table>
                    <thead>
                          <tr>  
                          <th>Name</th>
                          <th>Adress</th>
                          </tr>
                    
                    </thead>

                    <tbody>{
                    student.data.map(function(currentValue, index, arr){
                      return(
                        
                     
                        <tr key={index}>
                        <td>{arr[index].id}</td>
                        <td>{arr[index].attributes.Name}</td>
                        <td>
                        <Button variant="success" onClick={(e)=>handleSubmit(e)}  size="sm">Update</Button>&nbsp;         
                                  
                                
                                
                              </td>
                       </tr>

                      )

               })
              }
                    </tbody>
                  

            </Table>
            <button type="button" onClick={()=>{getDataStudent(1)}} className="btn btn-danger">getData</button>
      </>
           
  )
}

export default View