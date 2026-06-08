import './App.css'
import figure1 from './assets/figure1.png'
import figure2 from './assets/figure2.png'
import figure3 from './assets/figure3.png'

function App() {
  return (
    <div className="paper-container">
      <header className="paper-header">
        <h1 className="paper-title">Julian Nelson</h1>
        <p className="paper-author">Dartmouth College &rsquo;27 &middot; Quantitative Social Science</p>
        <p className="paper-contact">
          <a href="mailto:julian.nelson.27@dartmouth.edu">julian.nelson.27@dartmouth.edu</a>
        </p>
      </header>

      <hr className="divider" />

      <main className="paper-body">
        <section className="paper-section">
          <h2>Question</h2>
          <p>
            Taxes on labor income constitute the largest pillar of federal revenue[cite: 2]. This project examines the
            vulnerability of that fiscal foundation if artificial intelligence automates wages faster than
            corporate tax gains replace the loss[cite: 3].
          </p>
        </section>

        <section className="paper-section">
          <h2>Data</h2>
          <p>
            The analysis links industry exposure projections from the March 2026 Digital Planet dataset to
            administrative corporate financials from the Tax Year 2022 IRS Statistics of Income[cite: 5]. The
            combined dataset tracks financial scales and automation risks across 19 major NAICS sectors[cite: 6].
          </p>
        </section>

        <section className="paper-section">
          <h2>Method</h2>
          <p>
            The model derives an operational cost scale proxy for the labor base using corporate receipts
            and net income[cite: 8]. A 100,000-draw Monte Carlo simulation propagates exposure uncertainty
            across Slow, Median, and Fast adoption timelines[cite: 9]. The simulation incorporates standard
            statutory individual, payroll, and corporate tax rates alongside a fixed 3 percent corporate profit
            growth offset[cite: 10].
          </p>
        </section>

        <section className="paper-section">
          <h2>Result</h2>
          
          <div className="figure-box">
            <img src={figure1} alt="Monte Carlo Simulation" />
            <p className="caption">
              <strong>Figure 1 Caption:</strong> The simulation projects a median annual federal revenue shortfall of
              $0.32 trillion under the Slow timeline, $1.12 trillion under the Median timeline, and $2.31
              trillion under the Fast timeline[cite: 26]. These shortfalls represent 2.0 percent, 7.0 percent, and
              14.3 percent of baseline federal revenue[cite: 27, 29]. Whiskers mark the 5th and 95th percentiles of
              the simulated distribution[cite: 29, 30].
            </p>
          </div>

          <div className="figure-box">
            <img src={figure2} alt="Industry-Level Shortfall" />
            <p className="caption">
              <strong>Figure 2 Caption:</strong> Under the Fast timeline, 17 of 19 major economic sectors cross a
              structural deficit trap threshold where net revenue losses exceed 5 percent of sector
              baseline revenue[cite: 49]. Finance and Insurance, Wholesale Trade, and Manufacturing
              experience the largest absolute shortfalls[cite: 50].
            </p>
          </div>

          <div className="figure-box">
            <img src={figure3} alt="Distribution of Revenue Shortfall" />
            <p className="caption">
              <strong>Figure 3 Caption:</strong> Kernel density estimates across all 100,000 iterations map the
              continuous risk profile for each timeline[cite: 62]. The entire probability mass for the Median and
              Fast timelines sits to the right of the dashed break-even line, establishing a near
               certainty of net fiscal deficit pressure[cite: 63].
            </p>
          </div>
        </section>

        <section className="paper-section">
          <h2>Takeaway</h2>
          <p>
            Rapid AI adoption creates severe, systemic fiscal exposure[cite: 65]. The current labor-centric tax
            framework faces a structural deficit trap because realistic corporate growth gains lack the scale
            required to replace automated payroll revenue[cite: 65].
          </p>
        </section>
      </main>
    </div>
  )
}

export default App;