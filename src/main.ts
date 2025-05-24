import "./style.css"
import Experience from "./experience/Experience"

const experience = new Experience({
    targetElement: document.querySelector<HTMLDivElement>(".experience"),
})

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="projects">

    <div class="header">
      <div class="title">
        <h1>What I'm Building Now</h1>
        <p>My Developer Portfolio</p>
      </div>
      <div class="close-btn">
        <button><img src="/close.svg" alt="" /></button>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">

        <a href="https://axisdemo.vercel.app/" class="card" target="_blank">
          <img src="https://i.ibb.co/DPccG13V/Screenshot-2025-05-20-170300.png" class="img" alt="Futuristic Tech Website" />
          <div class="description">
            <h3>Space themed Techfest Website</h3>
            <p>Space-inspired techfest platform with live AI chat bot</p>
          </div>
        </a>

        <a href="https://curio-city-flame.vercel.app/" class="card" target="_blank">
          <img src="https://i.ibb.co/Rk6gkFQw/Screenshot-2025-05-20-170722.png" class="img" alt="Online Learning Platform" />
          <div class="description">
            <h3>Online Learning Platform</h3>
            <p>Engaging e-learning platform with expert mentor support</p>
          </div>
        </a>

        <a href="https://empower-kind.vercel.app/" class="card" target="_blank">
          <img src="https://i.ibb.co/LhgMtb8x/image.png" class="img" alt="Infographic Image" />
          <div class="description">
            <h3>Donation Platform</h3>
            <p>Donate to empower specially-abled kids' futures.</p>
          </div>
        </a>
        
        
        <a href="https://drive.google.com/drive/u/0/folders/1drW5eidBKAiPP3m_wUQBTesGc7OHmRlO" class="card" target="_blank">
          <img src="https://static.toiimg.com/thumb/msid-105546012,width-1280,height-720,resizemode-4/105546012.jpg" class="img" alt="More Projects" />
          <div class="description">
            <h3>More Projects (Google Drive)</h3>
            <p>Explore additional projects stored in Google Drive</p>
          </div>
        </a>

        <a href="https://www.figma.com/proto/mH46QAiWCwVfDnJGqFsHYP/Banking-Company-Website-UI-Template-Design-in-Dark-Theme---FREE-Editable----Community-?node-id=5-26176&t=wAYUwaGp0c1U4yNx-1" class="card" target="_blank">
          <img src="https://i.ibb.co/LdqhQFFv/image.png" class="img" alt="Online Shopping App" />
          <div class="description">
            <h3>Banking Company Website</h3>
            <p>Smart, secure, and personalized banking for all.</p>
          </div>
        </a>

        <a href="https://www.figma.com/proto/BoGLtJdCRsGVPd7wwH9vFM/Ticket-Booking-App--Community-?t=WgBJz0vtkg7OiZ5W-1" class="card" target="_blank">
          <img src="https://i.ibb.co/xtwNM5g3/image.png" class="img" alt="Groceries App" />
          <div class="description">
            <h3>Ticket Booking App</h3>
            <p>Tickets booked in seconds - fun is just a tap away</p>
          </div>
        </a>

        
        <a href="https://www.figma.com/proto/uOkJgew5kjhq3Tc5O37wgw/Sports-Shopping-App-UI-Concept--Community-?node-id=0-13&t=wAYUwaGp0c1U4yNx-1" class="card" target="_blank">
          <img src="https://i.ibb.co/fdYBrmgg/image.png" class="img" alt="Online Shopping App" />
          <div class="description">
            <h3>Sports Shopping App</h3>
            <p>Gear up for greatness - everything sports, all in one place</p>
          </div>
        </a>

        
      </div>
    </div>

    <footer>
      <div class="contact">
        <a href="https://www.linkedin.com/in/atishayjain06/" target="_blank" class="linkedin-button"></a>
        <a href="https://github.com/atishay46" target="_blank" class="github-button"></a>
      </div>
      <span> © Designed & Coded by Atishay Jain </span>
    </footer>
  </div>

  <div class="prev-projects">

    <div class="header">
      <div class="title">
        <h1>Past Work</h1>
        <p>From Pixels to Page</p>
      </div>
      <div class="prev-close-btn">
        <button><img src="/close.svg" alt="" /></button>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">

      
          <a href="https://www.figma.com/proto/uOkJgew5kjhq3Tc5O37wgw/Sports-Shopping-App-UI-Concept--Community-?node-id=0-13&t=wAYUwaGp0c1U4yNx-1" class="card" target="_blank">
          <img src="https://i.ibb.co/fdYBrmgg/image.png" class="img" alt="Online Shopping App" />
          <div class="description">
            <h3>Sports Shopping App</h3>
            <p>Gear up for greatness - everything sports, all in one place</p>
          </div>
        </a>

         <a href="https://www.figma.com/proto/mH46QAiWCwVfDnJGqFsHYP/Banking-Company-Website-UI-Template-Design-in-Dark-Theme---FREE-Editable----Community-?node-id=5-26176&t=wAYUwaGp0c1U4yNx-1" class="card" target="_blank">
          <img src="https://i.ibb.co/LdqhQFFv/image.png" class="img" alt="Online Shopping App" />
          <div class="description">
            <h3>Banking Company Website</h3>
            <p>Smart, secure, and personalized banking for all.</p>
          </div>
        </a>

        <a href="https://www.figma.com/proto/BoGLtJdCRsGVPd7wwH9vFM/Ticket-Booking-App--Community-?t=WgBJz0vtkg7OiZ5W-1" class="card" target="_blank">
          <img src="https://i.ibb.co/xtwNM5g3/image.png" class="img" alt="Groceries App" />
          <div class="description">
            <h3>Ticket Booking App</h3>
            <p>Tickets booked in seconds - fun is just a tap away</p>
          </div>
        </a>

         
        
    

        <a href="https://drive.google.com/drive/u/0/folders/1drW5eidBKAiPP3m_wUQBTesGc7OHmRlO" class="card" target="_blank">
          <img src="https://static.toiimg.com/thumb/msid-105546012,width-1280,height-720,resizemode-4/105546012.jpg" class="img" alt="More Projects" />
          <div class="description">
            <h3>More Projects (Google Drive)</h3>
            <p>Explore additional projects stored in Google Drive</p>
          </div>
        </a>

        <a href="https://axisdemo.vercel.app/" class="card" target="_blank">
          <img src="https://i.ibb.co/DPccG13V/Screenshot-2025-05-20-170300.png" class="img" alt="Futuristic Tech Website" />
          <div class="description">
            <h3>Space themed Techfest Website</h3>
            <p>Space-inspired techfest platform with live AI chat bot</p>
          </div>
        </a>

         <a href="https://curio-city-flame.vercel.app/" class="card" target="_blank">
          <img src="https://i.ibb.co/Rk6gkFQw/Screenshot-2025-05-20-170722.png" class="img" alt="Online Learning Platform" />
          <div class="description">
            <h3>Online Learning Platform</h3>
            <p>Engaging e-learning platform with expert mentor support</p>
          </div>
        </a>

        <a href="https://empower-kind.vercel.app/" class="card" target="_blank">
          <img src="https://i.ibb.co/LhgMtb8x/image.png" class="img" alt="Infographic Image" />
          <div class="description">
            <h3>Donation Platform</h3>
            <p>Donate to empower specially-abled kids' futures.</p>
          </div>
        </a>
    
      </div>
    </div>

    <footer>
      <div class="contact">
        <a href="https://www.linkedin.com/in/atishayjain06/" target="_blank" class="linkedin-button"></a>
        <a href="https://github.com/atishay46" target="_blank" class="github-button"></a>
      </div>
      <span> © Designed & Coded by Atishay Jain </span>
    </footer>

  </div>
`

export { experience }
