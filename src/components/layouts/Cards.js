import React from 'react';

const data = [
    {
      Key:'1',
      name: 'Ritesh Karpenter',
      email:'ritesh@test.com',
      image:'https://joeschmoe.io/api/v1/neha',
      descrip:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
    },
    {
      Key:'2',
      name:'Sunil Shetty',
      email:'Sunil@test.com',
      image:'https://joeschmoe.io/api/v1/ritesh',
      descrip:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
    },
    {
      Key:'3',
      name: 'Akshay Kumar',
      email:'Akshay@gmail.com',
      image:'https://joeschmoe.io/api/v1/kumar',
      descrip:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
    }


];

const Cards = () => {

        return (
          <div className="row">
            {data.map((val,index)=>{

              return (

                <div className="col-md-4" key={index}>
          <div className="card mb-4 shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={val.image} title="Image" alt={val.name} />
            <div className="card-body">
              <h6> {val.name},{val.email} </h6>
              <p className="card-text">{val.descrip}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>


              )


            })}

          </div>
        );

} 
export default Cards;