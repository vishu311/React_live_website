import React from 'react';

const Contact = () => {

// const [state, setstate] = useState(initialState)

 const submmition = ()=>{
      alert("Information has been submitted");
 }
    return (
        <>
        <div className="my-5">
           <h1 className="text-center"> Contact Us </h1>
        </div>
        <div className="container contact_div bg-light">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">First Name</label>
                      <input type="text" class="form-control" id="UserName" placeholder="Enter your first name" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your last name" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
                      <input type="tel" class="form-control" id="exampleFormControlInput1" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="mobile number" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@mail.com" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-info" type="submit" onClick={submmition}>Submit form</button>
                    </div>
                </form>
        
            
                
                </div>
            </div>
        </div> 

        </>
    );
}

export default Contact;
