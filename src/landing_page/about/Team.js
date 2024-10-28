import React from 'react'

function Team() {
    return (
      <div className="container">
      <div className="row p-3 mt-5  border-top">
        <h1 className=" text-center mt-5 ">People</h1>
      </div>
      <div className="row p-3 text-muted" style={{lineHeight:"1.8",fontSize:"1.2em"}}>
        <div className="col-6 p-3 text-center">
          <img src="media/c713298a-589d-495f-b666-068f3592.jpg"style={{borderRadius:"100%", width:"60%"}}/>
          <h4 className='mt-5'>Kartik Dua</h4>
          <h6>Developer</h6>
        </div>
        <div className="col-6 p-5 ">
          <p>
          Kartik a skilled developer who has built solutions to address complex challenges in technology, spanning areas like geolocation, data visualization, and user-centered design. Today, his work is helping to redefine user experience and engagement in digital applications.
          </p>
          <p>
          He actively contributes to open-source projects and collaborates on tech initiatives at UPES, where he is known for his hands-on approach and innovative problem-solving.
          </p>
          <p>
          Coding is his zen.
          </p>
          <p>Connect on <a href='https://github.com/kartikkkdua' style={{textDecoration:"none"}}>GitHub</a> / <a href='https://www.linkedin.com/in/duakartik/' style={{textDecoration:"none"}}>LinkedIn</a> / <a href='https://www.instagram.com/kartikkdua/' style={{textDecoration:"none"}}>Instagram</a></p>
        </div>
      </div>
    </div>
      );
}

export default  Team ;