import { useState } from "react";
import "./ServiceNavbar.css";

function ServiceNavbar({ search, setSearch }) {
  const [showList, setShowList] = useState(false);

  return (
    <div className="service-wrapper">

      <nav className="service-navbar">

        <span className="services-name">SERVICES</span>

        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="list-section">
          <span className="list-name">LIST</span>

          <button
            className="list-button"
            onClick={() => setShowList(!showList)}
          >
            {showList ? "▲" : "▼"}
          </button>
        </div>

      </nav>

      {showList && (
        <div className="service-list-box">
          <ol>

            <li>
              Hair Cut
              <ul>
                <li>Mullet</li>
                <li>Taper Fade</li>
                <li>Burst Fade</li>
              </ul>
            </li>

            <li>
              Hair Color
              <ul>
                <li>Natural Brown</li>
                <li>Dark Brown</li>
                <li>Ash Brown</li>
              </ul>
            </li>

            <li>
              Facial
              <ul>
                <li>Cheryl</li>
                <li>Korean</li>
                <li>O3</li>
              </ul>
            </li>

            <li>
              Detan
              <ul>
                <li>O3</li>
                <li>Raga</li>
              </ul>
            </li>

            <li>
              Makeup
              <ul>
                <li>Groom Makeup</li>
              </ul>
            </li>

          </ol>
        </div>
      )}

    </div>
  );
}

export default ServiceNavbar;