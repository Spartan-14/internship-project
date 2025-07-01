"use client"

import Navbar from "../components/Navbar"
import Button from "../components/Button"
import styles from "../styles/home.module.css"

export default function HomePage() {
  const handleBrowseTemplates = () => {
    document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleViewPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
      <div className={styles.container}>
        <Navbar />

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Premium Web Templates for Modern Developers</h1>
            <p className={styles.heroDescription}>
              Discover our collection of professionally designed, responsive templates that will accelerate your
              development process and impress your clients.
            </p>
            <div className={styles.heroButtons}>
              <Button variant="primary" size="large" onClick={handleBrowseTemplates}>
                Browse Templates
              </Button>
              <Button variant="secondary" size="large" onClick={handleViewPricing}>
                View Pricing
              </Button>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Our Products</h2>
            <div className={styles.productGrid}>
              <div className={styles.productCard}>
                <h3>Landing Pages</h3>
                <p>Convert visitors into customers with our high-converting landing page templates.</p>
                <ul className={styles.featureList}>
                  <li>Mobile-first responsive design</li>
                  <li>SEO optimized structure</li>
                  <li>Fast loading performance</li>
                  <li>Easy customization</li>
                </ul>
              </div>
              <div className={styles.productCard}>
                <h3>Dashboard Templates</h3>
                <p>Build powerful admin panels and dashboards with our comprehensive templates.</p>
                <ul className={styles.featureList}>
                  <li>Modern UI components</li>
                  <li>Data visualization ready</li>
                  <li>User management systems</li>
                  <li>Dark/Light mode support</li>
                </ul>
              </div>
              <div className={styles.productCard}>
                <h3>E-commerce Themes</h3>
                <p>Launch your online store with our feature-rich e-commerce templates.</p>
                <ul className={styles.featureList}>
                  <li>Shopping cart integration</li>
                  <li>Payment gateway ready</li>
                  <li>Inventory management</li>
                  <li>Customer reviews system</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Resources</h2>
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <h3>Documentation</h3>
                <p>Comprehensive guides and tutorials to help you get started quickly.</p>
                <Button variant="outline" onClick={() => console.log("View Docs clicked")}>
                  View Docs
                </Button>
              </div>
              <div className={styles.resourceCard}>
                <h3>Code Examples</h3>
                <p>Ready-to-use code snippets and components for common use cases.</p>
                <Button variant="outline" onClick={() => console.log("Browse Examples clicked")}>
                  Browse Examples
                </Button>
              </div>
              <div className={styles.resourceCard}>
                <h3>Video Tutorials</h3>
                <p>Step-by-step video guides for customizing and deploying templates.</p>
                <Button variant="outline" onClick={() => console.log("Watch Videos clicked")}>
                  Watch Videos
                </Button>
              </div>
              <div className={styles.resourceCard}>
                <h3>Community Support</h3>
                <p>Join our community of developers and get help from experts.</p>
                <Button variant="outline" onClick={() => console.log("Join Community clicked")}>
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Simple, Transparent Pricing</h2>
            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <h3>Starter</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>29</span>
                  <span className={styles.period}>/template</span>
                </div>
                <ul className={styles.pricingFeatures}>
                  <li>Single template license</li>
                  <li>Source code included</li>
                  <li>Basic documentation</li>
                  <li>Email support</li>
                </ul>
                <Button variant="outline" size="large" onClick={() => console.log("Get Started clicked")}>
                  Get Started
                </Button>
              </div>
              <div className={`${styles.pricingCard} ${styles.featured}`}>
                <div className={styles.badge}>Most Popular</div>
                <h3>Professional</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>99</span>
                  <span className={styles.period}>/month</span>
                </div>
                <ul className={styles.pricingFeatures}>
                  <li>Access to all templates</li>
                  <li>Regular updates</li>
                  <li>Premium support</li>
                  <li>Commercial license</li>
                  <li>Figma design files</li>
                </ul>
                <Button variant="primary" size="large" onClick={() => console.log("Start Free Trial clicked")}>
                  Start Free Trial
                </Button>
              </div>
              <div className={styles.pricingCard}>
                <h3>Enterprise</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>299</span>
                  <span className={styles.period}>/month</span>
                </div>
                <ul className={styles.pricingFeatures}>
                  <li>Everything in Professional</li>
                  <li>Custom template requests</li>
                  <li>Priority support</li>
                  <li>Team collaboration tools</li>
                  <li>White-label licensing</li>
                </ul>
                <Button variant="outline" size="large" onClick={() => console.log("Contact Sales clicked")}>
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>&copy; 2024 TemplateHub. All rights reserved.</p>
          </div>
        </footer>
      </div>
  )
}
