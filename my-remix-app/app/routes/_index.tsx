import { Link } from '@remix-run/react';
import { FaArrowRight, FaDollarSign, FaChartBar } from 'react-icons/fa';
import MainHeader from '~/components/navigation/MainHeader';

export default function Index() {
  return (
    <main>
      <MainHeader/>
      <section className="marketing-section">
        <header>
          <FaDollarSign />
          <h2>A Central Space</h2>
        </header>
        <div className="marketing-content">
          <div className="marketing-explanation">
            <p>Manage your wines in one central place.</p>
            <p>
              <Link className="cta" to="/wines">
                <span>Get Started</span>
                <FaArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="marketing-section">
        <header>
          <FaChartBar />
          <h2>Detailed Analytics</h2>
        </header>
        <div className="marketing-content">
          <p className='marketing-explanation'>
            Benefit from best-in-class analytics to understand your spending
            patterns.
          </p>
        </div>
      </section>
    </main>
  );
}

export function meta() {}
