import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const technologies = [
  { img: "public/assets/html.png", name: "HTML5" },
  { img: "public/assets/css.png", name: "CSS3" },
  { img: "public/assets/javascript.png", name: "JavaScript" },
  { img: "public/assets/react.svg", name: "React" },
  { img: "public/assets/php.png", name: "PHP" },
  { img: "public/assets/bootstrap.png", name: "Bootstrap" },
  { img: "public/assets/laravel.png", name: "Laravel" },
  { img: "public/assets/flutter.png", name: "Flutter" },
  { img: "public/assets/dart.png", name: "Dart" },
  { img: "public/assets/mongo.png", name: "MongoDB" },
]

const firstRow = technologies.slice(0, technologies.length / 2)
const secondRow = technologies.slice(technologies.length / 2)

const TechCard = ({ img, name }) => (
  <div className="flex items-center justify-center px-6">
    <img
      src={img}
      alt={name}
      className="w-16 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
      style={{
        imageRendering: 'crisp-edges',
        WebkitFontSmoothing: 'antialiased',
      }}
      loading="eager"
    />
  </div>
)

export function MarqueeDemo() {
  return (
    <section className="w-full py-16">
      <div className="w-full">
        {/* First Row */}
        <Marquee 
          pauseOnHover 
          className="[--duration:15s] mb-8"
          style={{ willChange: 'auto' }}
        >
          {firstRow.map((item, index) => (
            <TechCard key={index} img={item.img} name={item.name} />
          ))}
        </Marquee>

        {/* Second Row */}
        <Marquee 
          reverse 
          pauseOnHover 
          className="[--duration:15s]"
          style={{ willChange: 'auto' }}
        >
          {secondRow.map((item, index) => (
            <TechCard key={index} img={item.img} name={item.name} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}