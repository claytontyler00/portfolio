export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <div>© {new Date().getFullYear()} Clayton Tyler</div>
        <div className="footer-secondary">Based in Santa Barbara, CA</div>
      </div>
      <div className="contact-links">
        <a href="mailto:claytonltyler00@gmail.com">Email</a>
        <a
          href="https://www.linkedin.com/in/clayton-tyler-99a571bb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
