import '../Styles/Preview.css'
import CvForm from './CvForm.jsx'
export default function Preview({first,last,head,link,email,phone,degree,school,skills,company,start,end,occupation,position,address}) {
  console.log('skills'+skills)
  return(
    <div className='mainbody'>
    <div className='body'>
      <div className='head'>
        <div className='head-top'>
          <div>
            <h1>{first}</h1>
            <h1>{last}</h1>
          </div>
          
        </div>
        <div className='head-bottom'>
          <p>{head}</p>
        </div>
      </div>
    
      <div className='mainCon'>
        <div className='mainCon-top'>
          <div className='education'>
            <h1>EDUCATION</h1>
            <p>{school}</p>
            <p>{degree}</p>
            
          </div>
          <div className='skills'>
            <h1>SKILLS</h1>
            <ul>
              {
                skills.map((skill) => {
                  return <li key={skill}>
                    <p>{skill}</p>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
        <div className='mainCon-bottom'>
          <div>
            <h3>EXPERIENCE</h3>
            <div className='occupation'>
              <p>{occupation}</p>
            </div>
            <div className='company'>
              <p>{company} | <span>{start}-{end}</span></p>
            </div>
            <div className='position'>
              <p>{position}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='footer'>
        <div className='foote-top'>
          <div>
            <p>{address}</p>
          </div>
          <div>
            <p>{phone}</p>
          </div>
        </div>
        <div className='footer-bottom'>
          <div>
            <p>{email}</p>
          </div>
          <div>
            <p>{link}</p>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}
