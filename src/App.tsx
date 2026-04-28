import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-shapes" aria-hidden="true">
        <span className="shape s1" />
        <span className="shape s2" />
        <span className="shape s3" />
        <span className="shape s4" />
        <span className="shape s5" />
        <span className="shape s6" />
        <span className="shape s7" />
        <span className="shape s8" />
      </div>

      <section id="center">
        <div className="hero">
          <svg className="hero-gem" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="gem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"    stopColor="#ff0000"/>
                <stop offset="16%"   stopColor="#ff8800"/>
                <stop offset="33%"   stopColor="#ffdd00"/>
                <stop offset="50%"   stopColor="#00cc44"/>
                <stop offset="67%"   stopColor="#0088ff"/>
                <stop offset="83%"   stopColor="#9900ff"/>
                <stop offset="100%"  stopColor="#ff0000"/>
              </linearGradient>
              <filter id="gem-glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#gem-glow)" stroke="url(#gem-grad)" fill="none">
              <polygon points="100,6 194,100 100,194 6,100"    strokeWidth="1.5"/>
              <polygon points="100,28 172,100 100,172 28,100"  strokeWidth="1.5" opacity="0.75"/>
              <polygon points="100,50 150,100 100,150 50,100"  strokeWidth="1.5" opacity="0.5"/>
              <polygon points="100,72 128,100 100,128 72,100"  strokeWidth="1.5" opacity="0.3"/>
              <line x1="100" y1="6"   x2="100" y2="194" strokeWidth="0.5" opacity="0.2"/>
              <line x1="6"   y1="100" x2="194" y2="100" strokeWidth="0.5" opacity="0.2"/>
              <line x1="29"  y1="29"  x2="171" y2="171" strokeWidth="0.5" opacity="0.2"/>
              <line x1="171" y1="29"  x2="29"  y2="171" strokeWidth="0.5" opacity="0.2"/>
              <circle cx="100" cy="100" r="5" fill="url(#gem-grad)" strokeWidth="0"/>
            </g>
          </svg>
        </div>
        <div>
          <h1>Ciao! Sono culetto</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="about-me">
        <h2>About Me</h2>
        <div className="about-lines">
          <div className="about-row"><span className="about-label">01</span><span>Line 1</span></div>
          <div className="about-row"><span className="about-label">02</span><span>Line 2</span></div>
          <div className="about-row"><span className="about-label">03</span><span>Line 3</span></div>
          <div className="about-row"><span className="about-label">04</span><span>Line 4</span></div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="services">
        <h2>Services</h2>
        <div className="services-grid">
          <div className="service-card color-purple">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
            <h3>Web Design</h3>
            <p>Beautiful, pixel-perfect designs that capture your brand and delight your users.</p>
          </div>
          <div className="service-card color-blue">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
            <h3>Web Development</h3>
            <p>Fast, reliable, and scalable websites built with modern technologies.</p>
          </div>
          <div className="service-card color-green">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="10" cy="10" r="2"/>
            </svg>
            <h3>UI/UX Design</h3>
            <p>Intuitive interfaces and seamless experiences that keep users coming back.</p>
          </div>
          <div className="service-card color-orange">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
            </svg>
            <h3>Consulting</h3>
            <p>Strategic guidance to help you make smarter decisions and grow your business.</p>
          </div>
          <div className="service-card color-red">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <h3>SEO Optimization</h3>
            <p>Boost your visibility and drive organic traffic with proven SEO strategies.</p>
          </div>
          <div className="service-card color-teal">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
            <h3>Social Media Management</h3>
            <p>Grow your audience and build your brand across all major social platforms.</p>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
