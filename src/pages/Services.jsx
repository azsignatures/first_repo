import './../assets/styles/services.css'

const Services = () => {
  return (
    <div className='service'>
      <div className='service1'>
          <div className='ser'>
            <h1>services</h1>
            <h4>Html</h4>
            <h4>Css</h4>
            <h4>JavaScript</h4>
           <h4>React</h4>
       </div>
       <div className='project'>
           <h3>My Projects</h3>
          <h4>project one</h4>
           <p>A web application built with Html and Css</p>
        
      
        </div>
      </div>
      <div >
           <div className='service2'>
              <h4>project two</h4>
              <p>An interactive to-do list using JavaScript and Local Storage.</p>
          </div>
      
          <div className='project1'>
              <h4>project three</h4>
              <p>A portfolio website showcasing my development journey.</p>
           </div>
           <div className='project2'>
              <h4>project three</h4>
              <p>A portfolio website showcasing my development journey.</p>
          </div>
      </div>
      
      
      
    </div>
  );
}

export default Services
