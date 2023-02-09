import styles from "./style";
import { Component } from "react";
import { BtnUp } from "./components/BtnUp";

import {
  Navbar,
  CTA,
  Business,
  CardDeal,
  Footer,
  Stats,
  Hero,
  Billing,
  Testimonials,
  Clients,
} from "./components";

export class App extends Component {

  render() {
    return (
      <>
        <div className="bg-primary w-full overflow-hidden relative">
        <BtnUp/>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Stats />
              <Business />
              <Billing />
              <CardDeal />
              <Testimonials />
              <Clients />
              <CTA />
             
              <Footer />
         
           
          
            </div>
          </div>
        </div>
      </>
    );
  }
}
