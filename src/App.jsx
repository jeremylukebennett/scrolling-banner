import './App.css'
import ScrollingBanner from './ScrollingBanner'

function App() {
  return (
    <>
      <ScrollingBanner
        text="🎉 Welcome to our website! Check out our latest offers and amazing deals! 🎉"
        speed={20}
      />

      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Scrolling Banner Demo</h1>
        <p>The banner above scrolls continuously with smooth animation!</p>

        <div style={{ marginTop: '3rem' }}>
          <ScrollingBanner
            text="⭐ Custom speed and text can be configured! ⭐"
            speed={15}
          />
        </div>
      </div>
    </>
  )
}

export default App
