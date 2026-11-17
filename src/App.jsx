
import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from 'react-router-dom'
import './App.css'

// Replace this with your actual WhatsApp business number.
// Include country code, without + or spaces.
const WHATSAPP_NUMBER = '9000537737'

const services = [
  {
    title: 'Residential Interiors',
    path: '/residential',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000',
    description: 'Beautiful homes designed around your lifestyle.',
    details: [
      'Living room interiors',
      'Bedroom design',
      'Complete home interiors',
      'Lighting and space planning',
      'Custom furniture and storage'
    ]
  },
  {
    title: 'Commercial Interiors',
    path: '/commercial',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000',
    description: 'Functional and inspiring spaces for modern businesses.',
    details: [
      'Corporate office interiors',
      'Retail showroom design',
      'Reception and waiting areas',
      'Workspace planning',
      'Commercial space optimization'
    ]
  },
  {
    title: 'Modular Kitchens',
    path: '/modular-kitchens',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000',
    description: 'Smart kitchen solutions with elegant design.',
    details: [
      'L-shaped kitchens',
      'U-shaped kitchens',
      'Parallel kitchens',
      'Kitchen cabinets and storage',
      'Countertops and finishes'
    ]
  }
]

function Header() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">S</span>
        <span>
          <strong>SRI KALVORA</strong>
          <small>INTERIORS</small>
        </span>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/residential">Residential</Link>
        <Link to="/commercial">Commercial</Link>
        <Link to="/modular-kitchens">Kitchens</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Link to="/contact" className="nav-button">
        Let's Talk ↗
      </Link>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="brand footer-brand">
        <span className="brand-icon">S</span>
        <span>
          <strong>SRI KALVORA</strong>
          <small>INTERIORS</small>
        </span>
      </div>

      <p>© 2026 Sri Kalvora Interiors. All rights reserved.</p>
      <Link to="/contact">Get in Touch ↗</Link>
    </footer>
  )
}

function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">✦ THE ART OF BEAUTIFUL LIVING</p>

          <h1>
            We Don't Fill Spaces.
            <br />
            <span>We Give Them Soul.</span>
          </h1>

          <p className="hero-description">
            Thoughtfully designed interiors that reflect your
            personality, inspire your lifestyle and transform
            the way you experience spaces.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-button">
              Explore Our Work ↗
            </Link>
            <Link to="/contact" className="secondary-button">
              Start Your Project
            </Link>
          </div>
        </div>

        <div className="hero-caption">
          <span>01 / 04</span>
          <span>DESIGNED WITH PURPOSE. CREATED WITH SOUL.</span>
        </div>
      </section>

      <section className="intro">
        <p className="eyebrow">WELCOME TO SRI KALVORA</p>
        <h2>
          Beyond interiors.
          <br />
          <span>Beyond imagination.</span>
        </h2>
        <p>
          Every space has a story waiting to be told.
          We combine creativity, functionality and timeless
          elegance to create spaces that truly feel like yours.
        </p>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE CREATE</p>
            <h2>
              Spaces that speak <span>your language.</span>
            </h2>
          </div>
          <p>Every detail matters. Every space has a purpose.</p>
        </div>

        
<div className="service-grid">
  {services.map((service, index) => (
    <article className="service-card" key={service.path}>
      <div className="service-image">
        <img src={service.image} alt={service.title} />
        <span className="service-number">
          0{index + 1}
        </span>
      </div>

      <div className="service-info">
        <p className="service-category">
          SRI KALVORA / SERVICES
        </p>

        <h3>{service.title}</h3>

        <p className="service-description">
          {service.description}
        </p>

        <Link to={service.path} className="learn-link">
          Discover More
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  ))}
</div>

      </section>

      <section className="projects-preview">
        <p className="eyebrow">OUR CREATIVE APPROACH</p>
        <h2>Designed to be <span>remembered.</span></h2>
        <p>
          Explore our interior design ideas and discover
          possibilities for your next space.
        </p>
        <Link to="/projects" className="primary-button">
          View Projects ↗
        </Link>
      </section>

      <section className="contact-banner">
        <p className="eyebrow">LET'S CREATE SOMETHING BEAUTIFUL</p>
        <h2>Your space deserves <span>a soul.</span></h2>
        <Link to="/contact" className="primary-button">
          Start Your Project ↗
        </Link>
      </section>
    </>
  )
}

// Reusable service detail page
function ServicePage({ service }) {
  return (
    <main className="detail-page">
      <div className="detail-image">
        <img src={service.image} alt={service.title} />
        <div className="detail-image-text">
          <p className="eyebrow">SRI KALVORA INTERIORS</p>
          <h1>{service.title}</h1>
        </div>
      </div>

      <section className="detail-content">
        <p className="eyebrow">OUR EXPERTISE</p>
        <h2>{service.description}</h2>

        <p>
          We focus on thoughtful design, quality finishes and
          functional spaces. Our goal is to create an environment
          that reflects your vision and makes everyday living better.
        </p>

        <h3>What we offer</h3>

        <div className="detail-list">
          {service.details.map((item, index) => (
            <div className="detail-item" key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <Link to="/contact" className="primary-button">
          Enquire About This Service ↗
        </Link>
      </section>
    </main>
  )
}


const projects = [
  {
    id: 'contemporary-living-room',
    title: 'Contemporary Living Room',
    location: 'Hyderabad',
    type: 'Residential Interiors',
    concept: 'A contemporary living space combining comfort, natural textures and elegant lighting.',
    materials: 'Wooden finishes, premium upholstery, marble-effect surfaces and warm lighting.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200',
    beforeImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000'
    ]
  },
  {
    id: 'elegant-home-interiors',
    title: 'Elegant Home Interiors',
    location: 'Hyderabad',
    type: 'Residential Interiors',
    concept: 'A refined home design with balanced colours, functional furniture and sophisticated details.',
    materials: 'Natural wood, decorative laminates, textured finishes and soft furnishings.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
    beforeImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000',
    afterImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000'
    ]
  },
  {
    id: 'modern-kitchen-concept',
    title: 'Modern Kitchen Concept',
    location: 'Hyderabad',
    type: 'Modular Kitchens',
    concept: 'A modern kitchen layout focused on efficient storage, clean lines and practical functionality.',
    materials: 'Modular cabinets, durable laminates, quartz-style countertops and modern hardware.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    beforeImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000',
    afterImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000'
    ]
  }
]

function Projects() {
  return (
    <section className="gallery-page">
      <p className="eyebrow">OUR CREATIVE COLLECTION</p>
      <h1>Spaces that tell <span>stories.</span></h1>
      <p>Explore our design inspiration and interior concepts.</p>

      <div className="gallery-grid">
        {projects.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            className="gallery-card project-link"
            key={project.id}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-card-info">
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <span>Explore Project ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function ProjectDetails() {
  const { projectId } = useParams()

  const project = projects.find((item) => item.id === projectId)

  if (!project) {
    return (
      <section className="project-not-found">
        <h1>Project Not Found</h1>
        <p>Sorry, this project could not be found.</p>
        <Link to="/projects" className="project-back-link">
          ← Back to Projects
        </Link>
      </section>
    )
  }

  return (
    <section className="project-details-page">

      <div className="project-details-hero">
        <img src={project.image} alt={project.title} />
        <div className="project-details-overlay">
          <p className="eyebrow">SRI KALVORA INTERIORS</p>
          <h1>{project.title}</h1>
          <p>{project.type} · {project.location}</p>
        </div>
      </div>

      <div className="project-details-content">

        <Link to="/projects" className="project-back-link">
          ← Back to All Projects
        </Link>

        <div className="project-information">
          <div>
            <p className="eyebrow">ABOUT THE PROJECT</p>
            <h2>Designed with purpose. Created with soul.</h2>
            <p>{project.concept}</p>
          </div>

          <div className="project-info-card">
            <p><strong>Project Name</strong><br />{project.title}</p>
            <p><strong>Location</strong><br />{project.location}</p>
            <p><strong>Project Type</strong><br />{project.type}</p>
            <p><strong>Materials & Finishes</strong><br />{project.materials}</p>
          </div>
        </div>

        <div className="project-before-after">
          <p className="eyebrow">THE TRANSFORMATION</p>
          <h2>Before & After</h2>

          <div className="before-after-grid">
            <div>
              <img src={project.beforeImage} alt="Before interior design" />
              <h3>Before</h3>
            </div>

            <div>
              <img src={project.afterImage} alt="After interior design" />
              <h3>After</h3>
            </div>
          </div>
        </div>

        <div className="project-complete-gallery">
          <p className="eyebrow">EXPLORE EVERY DETAIL</p>
          <h2>Complete Project Gallery</h2>

          <div className="project-photo-grid">
            {project.gallery.map((photo, index) => (
              <img
                src={photo}
                alt={`${project.title} gallery ${index + 1}`}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="project-contact">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let's create something beautiful.</h2>
          <Link to="/contact" className="project-contact-button">
            Start Your Project ↗
          </Link>
        </div>

      </div>
    </section>
  )
}


function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Residential Interiors',
    message: ''
  })

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (WHATSAPP_NUMBER.includes('X')) {
      alert('Please add your actual WhatsApp business number in App.jsx first.')
      return
    }

    const message = `
Hello Sri Kalvora Interiors!

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Message: ${form.message}

I would like to enquire about your interior design services.
    `

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="contact-page">
      <div className="contact-info">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Let's create a space <span>you love.</span></h1>

        <p>
          Have a home, office or kitchen project in mind?
          Tell us about your vision. We'd love to hear from you.
        </p>

        <div className="contact-detail">
          <strong>Our Services</strong>
          <p>Residential · Commercial · Modular Kitchens</p>
        </div>

        <div className="contact-detail">
          <strong>WhatsApp Enquiries</strong>
          <p>Send us your project requirements directly.</p>
        </div>
      </div>

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <h2>Project Enquiry</h2>

        <label>Your Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Phone Number</label>
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label>Interested Service</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
        >
          <option>Residential Interiors</option>
          <option>Commercial Interiors</option>
          <option>Modular Kitchens</option>
          <option>Complete Interior Design</option>
        </select>

        <label>Tell Us About Your Project</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your requirements..."
          rows="5"
          required
        />

        <button type="submit" className="primary-button">
          Send Enquiry on WhatsApp ↗
        </button>
      </form>
    </section>
  )
}

function NotFound() {
  return (
    <section className="not-found">
      <h1>Page not found</h1>
      <Link to="/" className="primary-button">Back to Home</Link>
    </section>
  )
}


function FloatingWhatsApp() {
  const whatsappNumber = '919000537737';

  const message = encodeURIComponent(
    "Hello Sri Kalvora Interiors! I'm interested in your interior design services. Please share more details."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sri Kalvora Interiors on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.72.71 5.39 2.06 7.74L.5 31.5l7.98-2.09A15.42 15.42 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5Zm0 28.36c-2.36 0-4.68-.64-6.7-1.85l-.48-.29-4.74 1.24 1.27-4.62-.31-.49A12.84 12.84 0 1 1 16 28.86Zm7.05-9.62c-.39-.2-2.3-1.13-2.66-1.26-.36-.13-.62-.2-.88.2-.26.39-1.01 1.26-1.24 1.52-.23.26-.46.29-.85.1-.39-.2-1.64-.61-3.12-1.94-1.15-1.03-1.93-2.3-2.16-2.69-.23-.39-.02-.6.17-.79.17-.17.39-.46.59-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.88-2.12-1.21-2.9-.32-.76-.65-.66-.88-.67h-.75c-.26 0-.69.1-1.05.49-.36.39-1.37 1.34-1.37 3.26s1.4 3.77 1.6 4.03c.2.26 2.75 4.2 6.66 5.89.93.4 1.66.64 2.23.82.94.3 1.8.26 2.48.16.76-.11 2.3-.94 2.63-1.85.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46Z"/>
      </svg>
    </a>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/residential"
          element={<ServicePage service={services[0]} />}
        />

        <Route
          path="/commercial"
          element={<ServicePage service={services[1]} />}
        />

        <Route
          path="/modular-kitchens"
          element={<ServicePage service={services[2]} />}
        />

        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />}
/>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

            <Footer />

      <FloatingWhatsApp />

    </BrowserRouter>
  )
}

export default App
