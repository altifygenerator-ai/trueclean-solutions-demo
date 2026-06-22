import Image from "next/image";
import { beforeAfter } from "@/data/site";

export default function BeforeAfter() {
  return (
    <section id="before-after" className="section before-after-section">
      <div className="container">
        <div className="split-heading">
          <div>
            <p className="section-kicker">Before & After</p>
            <h2>Before and after results.</h2>
          </div>
          <p>
            A clean exterior makes a difference. See recent cleaning work from
            TrueClean Solutions.
          </p>
        </div>

        <div className="before-after-grid">
          {beforeAfter.map((item) => (
            <article key={item.title} className="before-after-card">
              <div className="before-after-images">
                <div className="compare-panel">
                  <Image
                    src={item.before}
                    alt={`${item.title} before`}
                    fill
                    className="compare-image"
                  />
                  <span className="image-label">Before</span>
                </div>

                <div className="compare-panel">
                  <Image
                    src={item.after}
                    alt={`${item.title} after`}
                    fill
                    className="compare-image"
                  />
                  <span className="image-label image-label-after">After</span>
                </div>
              </div>

              <div className="before-after-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}