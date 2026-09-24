import heroImg from '../assets/fotohero.png'

function Hero() {
  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="w-full h-96 object-cover" />
      </div>
      <div>
        <h1>Halo, Nama Saya Fadil Adi Maulana</h1>
        <p className="text-gray-400 mt-2">
          Web Developer | Suka membangun hal-hal baru dengan React &amp; Tailwind
        </p>
      </div>
    </section>
  )
}

export default Hero