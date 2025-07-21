export default function Contact() {
  return (
    <div className="min-h-screen px-6 py-12 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold my-20 neon-text">About <span className="text-cyan-400">Driftura</span></h2>

      <p className="max-w-2xl text-gray-300 mb-6 leading-relaxed">
        <span className="font-semibold text-cyan-300">Driftura  Showroom </span>isn't just a showroom — it's a hub for automotive passion. 
        Since 2010, we've helped customers find their dream cars with a personal touch and attention to detail. <br /><br />
        From sleek sedans to high-performance sports cars, every vehicle in our collection is curated for quality, style, and excitement. 
        Our commitment to <span className="text-cyan-200 font-medium">trust</span>, <span className="text-cyan-200 font-medium">transparency</span>, and <span className="text-cyan-200 font-medium">total satisfaction</span> makes us more than just a seller — we're your car partners for life.
      </p>

      <div className="relative rounded-xl overflow-hidden shadow-neon">
        {/* <img
          src="/images/about-showroom.jpg"
          alt="About DreamAuto Showroom"
          className="rounded-xl w-full max-w-3xl object-cover"
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl backdrop-blur-sm" /> */}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-500">
        <div className="p-4 rounded-lg bg-base-200 neon-box">
          <i className="lucide lucide-car-front text-cyan-400 text-3xl mb-2" />
          <p className="font-semibold">100+ Quality Cars</p>
        </div>
        <div className="p-4 rounded-lg bg-base-200 neon-box">
          <i className="lucide lucide-award text-cyan-400 text-3xl mb-2" />
          <p className="font-semibold">15 Years of Trust</p>
        </div>
        <div className="p-4 rounded-lg bg-base-200 neon-box">
          <i className="lucide lucide-headset text-cyan-400 text-3xl mb-2" />
          <p className="font-semibold">Top-Notch Support</p>
        </div>
      </div>
    </div>
  );
}
