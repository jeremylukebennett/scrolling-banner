import './ScrollingBanner.css'

function ScrollingBanner({ text = "Welcome to our website! Check out our latest offers and updates!", speed = 20 }) {
  return (
    <div className="scrolling-banner">
      <div className="scrolling-banner-content" style={{ animationDuration: `${speed}s` }}>
        <span className="scrolling-banner-text">{text}</span>
        <span className="scrolling-banner-text">{text}</span>
      </div>
    </div>
  )
}

export default ScrollingBanner
