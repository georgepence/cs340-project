import {Container, Button} from "react-bootstrap";

// Credits

function Credits() {
  // -------- state --------
 
  // -------- effects --------
 
  // -------- actions --------
  
  // render page
  return (
      <div>
  
        <Container>
          <div style={{height: "50px"}}>
            <p> </p>
          </div>
          
          <h2 className={"mt-5 mb-4"}  style={{color: "midnightblue"}}>
            Website Design Credits
          </h2>
          
          <p>
            Pet Hotel was created by George "Mac" Pence and Nathan Taylor as a
            portfolio project for the class "Introduction to Databases" at
            Oregon State University during Summer 2021. The website front and
            back end were produced entirely by remote collaboration, working in
            different time zones.
          </p>
    
          <p>
            The project was produced using react and bootstrap for the front
            end, and JavaScript and Express for the back end. The website is
            hosted on heroku.
          </p>
          
          <h2 className={"mt-5 mb-4"}  style={{color: "midnightblue"}}>
            External Links
          </h2>
  
          <p>
            <a href={"https://github.com/taylnath"}>Nathan Taylor on Github</a>
          </p>
    
          <p>
            <a href={"https://github.com/georgepence"}>Mac Pence on Github</a>
          </p>
    
          <div style={{height: "90px"}}>
            <p></p>
          </div>
  
        </Container>
      
      </div>
  );
}

export default Credits;
