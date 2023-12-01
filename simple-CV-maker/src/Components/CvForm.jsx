import '../Styles/CvForm.css'
import {useState} from 'react'
import Preview from './Preview.jsx'
export default function Personal() {
  
  const[first, setFirst] = useState('')
  const[last, setLast] = useState('')
  const[head, setHead] = useState('')
  const[link, setLink] = useState('')
  const[address, setAddress] = useState('')
  const[school, setSchool] = useState('')
  const[degree, setDegree] = useState('')
  const[phone, setPhone] = useState('')
  const[email, setEmail] = useState('')
  const[skills, setSkills] = useState([])
  const[occupation, setOccupation] = useState([])
  const[start, setStart] = useState([])
  const[end, setEnd] = useState([])
  const[company, setCompany] = useState([])
  const[position, setPosition] = useState([])
  
  console.log(skills)
  const loadPreview = () => {
    setOccupation('Senior Software Engineer')
    setStart('2016')
    setEnd('Present')
    setSchool('ASGARD NATIONAL UNIVERSITY')
    setCompany('Rose International')
    setPosition(`I worked on the company's software development plans including all aspects of the SDLC in collaboration with peer programmers. My daily workflow here consisted of performing error analysis, assisting with IT issues and building/accessing databases including NoSQL and Node.js. I, together with my team of peers, developed 25+ Java Applications in the time of my employment.`)
    setFirst('BHARATH')
    setAddress('Universe, Asgard')
    setLast('KUMAR')
    setSkills(['html', 'css', 'javasctipt'])
    setDegree('Bachelor Degree: Nordic Philology and Translation Studies: Scandinavian and Second Foreign Language')
    setEmail('thor.odinson@gmail.com')
    setPhone('015982732201')
    setLink('https://www.pinterest.com/javidante/thor/')
    setHead(`From the moment I produced the very first 'Hello World' in the console, I knew I was hooked into the world of software development. But software development is not 'just a job' for me, it's offered an engaging challenge to continually learn and improve my skills in creating high-quality software. It became a full-fledged passion that only gets more exciting with time. Below you'll find projects I've completed that showcase my skills and general background in developing software.
`)
  }
  
  const handleStart = (e) => {
    setStart(e.target.value)
  }
  
  const handleEnd = (e) => {
    setEnd(e.target.value)
  }
  
  const handlePosition = (e) => {
    setPosition(e.target.value)
  }
  
  const handleCompany = (e) => {
    setCompany(e.target.value)
  }
  
  const handleOcc = (e) => {
    setOccupation(e.target.value)
  }
  
  const handleName = (e) =>  {
    setFirst(e.target.value)
  }
  
  const handleSkills = (e) => {
    setSkills(e.target.value)
  }
  
  const handleLast = (e) =>  {
    setLast(e.target.value)
  }
  
  const habdleHead = (e) => {
    setHead(e.target.value)
  }
  
  const handleSchool = (e) => {
    setSchool(e.target.value)
  }
  
  const handleDegree = (e) => {
    setDegree(e.target.value)
  }
  
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
  
  const handleLink = (e) => {
    setLink(e.target.value)
  }
  
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  
  
  
  const handleClear = (e) => {
    setFirst('')
    setLast('')
    setHead('')
    setSchool('')
    setDegree('')
    setAddress('')
    setPhone('')
    setEmail('')
    setLink('')
    setSkills([''])
    setOccupation('')
    setStart('')
    setEnd('')
    setCompany('')
    setPosition('')
  }
  
  return (
    
    <div className='container'>
      <div className='main'>
        <h1>Personal Details</h1>
        <div className='nameFeipds'>
          <div className='left-inp'>
            <input type='text' placeholder='First Name' onChange={handleName} value={first}/>
          </div>
          
          <div className='right-inp'>
            <input type='text' placeholder='Last Name' onChange={handleLast} value={last}/>
          </div>
        </div>
        
        <div className='about'>
          <textarea placeholder='tell someting about yourself' onChange={habdleHead} value={head}></textarea>
        </div>
      </div>
      
      <div className='container'>
      <div className='main'>
      <h1>Education</h1>
      <div className='inputFeild'>
        <input type='text' placeholder='School'
        onChange={handleSchool} value={school}
        />
        <input type='text' placeholder='Degree'
        onChange={handleDegree} value={degree}
        />
      </div>
      </div>
    </div>
    
    <div className='containet'>
      <div className='main'>
      <h1>Contact</h1>
      <div className='inputFeild'>
        <input type='text' placeholder='Address'
        onChange={handleAddress} value={address}
        />
        <input type='email' placeholder='Email'
        onChange={handleEmail} value={email}
        />
        <input type='number' placeholder='Phone Number'
        onChange={handlePhone} value={phone}
        />
        <input type='link' placeholder='Link to Profile'
        onChange={handleLink} value={link}
        />
      </div>
      
      </div>
    </div>
    
    <div className='container'>
      <div className ='main'>
        <h1>Skills</h1>
        <div className='skillIndput'>
          <input type='text' placeholder='Language or Tecnology'
          onChange={handleSkills} value={skills}
          />
        </div>
      </div>
    </div>
    
    <div className='container'>
      <div className='main'>
        <h1>Work Experience</h1>
        <div className='inputFiles'>
        
          <input type='text' placeholder='Position' onChange={handlePosition} value={position}/>
          
          <input type='text' placeholder='Company' onChange={handleCompany} value={company}/>
          
          <input type='text' placeholder='Start date of employment'
          onChange={handleStart} value={start}
          />
          
          <input type='text' placeholder='End date of employment'
          onChange={handleEnd} value={end}
          />
          
          <div className='textArea'>
            <textarea placeholder='Your main occupation, daily tast work field'
            onChange={handleOcc} value={occupation}
            >
            </textarea>
          </div>
        </div>
        
        <div className='previewButton'>
        <div>
          <button className='btn loadBtn' onClick={loadPreview}>Load Preview</button>
        </div>
        <div>
        
        </div>
        <div>
          <button className='btn resetBtn'
          onClick={handleClear}
          >Reset</button>
        </div>
      </div>
        
      </div>
    </div>
    
    <div className='Preview'>
     <Preview
      first={first}
      last={last}
      head={head}
      link={link}
      degree={degree}
      school={school}
      phone={phone}
      email={email}
      skills={skills}
      occupation={occupation}
      start={start}
      end={end}
      company={company}
      position={position}
      address={address}
      />
    </div>
    </div>
    );
}