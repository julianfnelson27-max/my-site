import './App.css'

function App() {
  const projects = [
    {
      title: 'Project One',
      description: 'A placeholder for an upcoming quantitative data analysis or social science research project.',
      href: '#',
    },
    {
      title: 'Project Two',
      description: 'A behavioral study or statistical model analyzing public policy trends.',
      href: '#',
    },
    {
      title: 'Project Three',
      description: 'A data visualization application built to map social phenomena.',
      href: '#',
    },
  ];

  return (
    <div className="portfolio-container">
      <main className="portfolio">
        <header className="header">
          <h1>Julian Nelson</h1>
          <p className="tagline">Dartmouth College &rsquo;27 &middot; Quantitative Social Science</p>
        </header>

        <section className="bio">
          <h2>About Me</h2>
          <p>
            Hi, I&rsquo;m Julian &mdash; a student at Dartmouth College studying Quantitative Social
            Science. I&rsquo;m interested in leveraging data to understand complex social phenomena, 
            from public policy and economics to political behavior. Outside of class, I enjoy 
            hiking the White Mountains and playing chess.
          </p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <ul className="project-list">
            {projects.map((p, index) => (
              <li key={index} className="project-card">
                <a href={p.href}>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <h2>Connect</h2>
          <p>Let's collaborate or discuss research opportunities.</p>
          <a href="mailto:julian.nelson.27@dartmouth.edu" className="email-link">
            julian.f.nelson.27@dartmouth.edu
          </a>
        </footer>
      </main>
    </div>
  )
}

export default App;