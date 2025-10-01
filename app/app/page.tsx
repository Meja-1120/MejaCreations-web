import Header from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <section style={{ backgroundColor: "#3c4045", color: "#faf9f6" }}>
        <div className="container">
          <p className="quote-en">“Have no fear of perfection — you’ll never reach it.”</p>
          <p className="quote-author"><em>Salvador Dalí</em></p>
          <p className="quote-hr">„Ne boj se savršenstva — nikada ga nećeš dosegnuti.“</p>
          <p className="quote-author"><em>Salvador Dalí</em></p>
        </div>
      </section>
      <section className="hero">
        <div className="hero-image" role="img" aria-label="MejaCreations visual"></div>
        <div className="overlay-box">
          <h2>MejaCreations</h2>
          <p className="slogan">
            More than words. More than images.<br/>
            This is not a place where beauty is the goal.<br/>
            This is a place where truth takes form.
          </p>
          <a className="cta" href="#enter">Enter my world</a>
        </div>
      </section>
    </>
  );
}
