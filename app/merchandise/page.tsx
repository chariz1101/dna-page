import { Header } from "@/components/header";
import MerchCard from "@/components/merch-card";

const merchandiseData = [
  {
    id: 1,
    title: "Sleek Black and Crisp White Tee",
    variations: "Black, White",
    link: "https://www.facebook.com/cpucondna/posts/pfbid02BrsbMvTDihKXCBYPfriLfn3tNWoscBPdG5Y3xNukuKv7EsSs6NJhD4ysAakPbq5Xl",
    image: "https://scontent.fceb6-4.fna.fbcdn.net/v/t39.30808-6/495000968_699660745951261_5380665596613515298_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG9hEjur0QszySkDj3OfeF4SFv9apwqb_9IW_1qnCpv_zRnWynwxcvQfxa97QKkqfVzrgN89qpshSnNJa6MdZhZ&_nc_ohc=o0DCoP-lJn8Q7kNvwG9hRza&_nc_oc=AdlH1TDjz62K7lNxogPWtmYQ33VJgiMoZciRxmx9ruxDEr3_3tn4Mp5ZZIHru5uolow&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&_nc_gid=mzHIEKlr1NQ4Tef1OpyTUQ&oh=00_AftISU4j4a6cvcgDKPdWVzOlefyKZBwQp3HRYLwR4NRr6Q&oe=698FF229" 
  },
  {
    id: 2,
    title: "Rock your D.N.A Shirt",
    variations: "Black, White",
    link: "https://www.facebook.com/cpucondna/posts/pfbid02sQ4p4JjjnNzP89ke4cs5XcvXrhHfJj4KsZySZEDu1H4oH8Yt7ciGBVhUhGAhNd78l",
    image: "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/484860773_666764385907564_7255658188100181093_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGCC_-afx1L5QUR_NRgb7ZUT6ViHL8nCaNPpWIcvycJozD79lx3khOfPXX2fM1TUNmlAjgXs27S9KlgGf59gdG3&_nc_ohc=YDcAzuCwy6EQ7kNvwFqazeD&_nc_oc=AdkIc8jeFwsFB5X5ovAl9tYcbqk3mdohggSgOYg1OAf60UrJjsw08SPyIASOsQUPckQ&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=qGd4Bf4gA53ozT_cHHamHw&oh=00_AfsTcspsRCfAO0x2tMv0yxlxsZf8JLCVd4Qh7I8iGTDQaQ&oe=698FF8CD"
  },
  {
    id: 3,
    title: "It's in our D.N.A Shirt",
    variations: "Black",
    link: "https://www.facebook.com/cpucondna/posts/pfbid031K5ieBCodrw2yjU3N4jtPUMpnTPA73zNiVHYJwWm9JEnWTZvtP7dGwsXptVUALxJl",
    image: "https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/632696972_923127213604612_7792352585874860307_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEf5O2tXlYeRvmMTTVx1jNOcH9w8rKOLDdwf3Dyso4sN5dupiTWInucFaux3n1ojJfM9ZAFKMo4CTxOtgj4aVir&_nc_ohc=ljcgpSWheJwQ7kNvwF2GifV&_nc_oc=Admm9bWowfYD3xw5_h7v44F4USlxQVyJoeGVmo5cu3q-gWPmTeJVFVp4KeiDW09SEPU&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&_nc_gid=WWGm6n6233absdfy-7t0Mg&oh=00_Aft4fJ818Sv1RWMcOK7PY3VKX0wRDSNyFklvu1w-t6x1vQ&oe=699B8726"
  },
];

export default function MerchPage() {
  return (
    <div className="bg-black min-h-screen text-white pb-16 sm:pb-24 grid-bg">
      <Header />

      <main className="container-custom pt-12 sm:pt-16 space-y-20 sm:space-y-28 md:space-y-32">
        
        {/* MERCH HEADER SECTION */}
        <section className="fade-in">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 bg-[#00ff88] rounded-full glow-accent" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
                Merchandise
              </h1>
            </div>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl ml-7 uppercase tracking-[0.15em] font-light">
              Official Organization Gear
            </p>
          </div>

          {/* MERCH GRID */}
          {/* Note: grid-cols are slightly wider than members to accommodate product shots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 stagger-children">
            {merchandiseData.map((item) => (
              <MerchCard
                key={item.id}
                id={item.id}
                title={item.title}
                variations={item.variations}
                link={item.link}
                image={item.image}
              />
            ))}
          </div>

          {/* EMPTY STATE (Optional: Shows if no items exist) */}
          {merchandiseData.length === 0 && (
            <div className="flex justify-center py-20 sm:py-28 border border-dashed border-white/5 rounded-2xl bg-[#0a0a0a]">
              <div className="text-center">
                 <p className="text-gray-600 font-light tracking-[0.2em] uppercase text-sm sm:text-base">
                  New drop coming soon
                </p>
              </div>
            </div>
          )}
        </section>

      </main>

      {/* FOOTER (Copied from Members Page) */}
      <footer className="border-t border-white/5 py-8 sm:py-12 mt-20 sm:mt-28">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} .charchives
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#00ff88]" />
              <p className="text-gray-600 text-xs uppercase tracking-widest">All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}