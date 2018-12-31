import React from 'react'


const Authors = ({authorsData}) => {
  console.log({authorsData},'this is the one');

const authorsComponents = authorsData.map(author => {
  return (
    <div className="pageContainer">

        <img className="authorImage" src={author.Portrait_URL} />

      <div className="content">
        <h2>{author.First_Name}{author.Last_Name} </h2>
        <h6>{author.Biography}</h6>
        <div className="link">
          <h5>Details</h5>
        </div>
      </div>


    </div>
  )
})


  return(
      // rendering the stored variable
    <div>

      {authorsComponents}
    </div>
  )


}

export default Authors
