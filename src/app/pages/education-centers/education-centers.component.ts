import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-education-centers',
  standalone: true,
  imports: [
    CarouselModule,
    CommonModule
  ],
  templateUrl: './education-centers.component.html',
  styleUrl: './education-centers.component.scss'
})
export class EducationCentersComponent {

  cities: {
    img: string,
    imgbg: string,
    name: string,
    position: {
      bottom: number,
      left: number
    }
    text: string,
    slides: { img: string, text: string }[]
  }[] = [
      {
        img: '../assets/images/education-centers/Antalya.png',
        imgbg: '../assets/images/img-2.jpeg',
        name: 'ANTALYA',
        position: {
          bottom: 11,
          left: 55
        },
        text: 'Antalya, a captivating city situated on the southwestern coast of Turkey, is a mesmerizing destination that boasts a rich tapestry of history, stunning natural landscapes, and a vibrant modern culture. This Mediterranean gem has charmed visitors for centuries, enticing them with its blend of ancient wonders and modern delights.',
        slides: [
          {
            img: 'assets/images/education-centers/antalya/1.webp',
            text: "History and Heritage: Antalya's history stretches back to antiquity, with evidence of human settlements dating back to the Paleolithic period. It has been a significant port city since ancient times, serving as a vital link between the Mediterranean and the Anatolian region. Throughout its storied past, Antalya has been influenced by various civilizations, including the Romans, Byzantines, and Ottomans. The city's historical significance is evident in the well-preserved relics scattered throughout the area, such as Hadrian's Gate, a majestic Roman triumphal arch built in 130 AD to honor Emperor Hadrian's visit, and the impressive ancient theaters that once hosted dramatic performances and gladiatorial contests."
          },
          {
            img: 'assets/images/education-centers/antalya/2.webp',
            text: "Old Town Charm: One of Antalya's most charming aspects is its historic district known as Kaleici. This enchanting labyrinth of narrow cobblestone streets, Ottoman-era houses, and charming courtyards evokes a sense of stepping back in time. Visitors can wander through the winding alleys, discovering hidden gems like traditional Turkish teahouses, boutique shops selling handmade crafts, and quaint restaurants serving mouthwatering local delicacies. The iconic Clock Tower stands as a landmark in Kaleici, offering a perfect meeting point and a reminder of the city's history."
          },
          {
            img: 'assets/images/education-centers/antalya/3.webp',
            text: "Turquoise Coastline: The crown jewel of Antalya's allure lies in its pristine coastline, often referred to as the 'Turkish Riviera.' The azure waters of the Mediterranean Sea gently lap against the shores, creating a paradise for beach lovers and water enthusiasts. Visitors can relax on the sandy stretches of Konyaalti and Lara Beach or seek more secluded coves along the coast. The region's warm climate, with long, sunny summers and mild winters, allows for year-round enjoyment of the beach and outdoor activities."
          },
          {
            img: 'assets/images/education-centers/antalya/4.webp',
            text: "Natural Wonders: Beyond the coastline, Antalya's surroundings are adorned with natural beauty. The Taurus Mountains, stretching parallel to the coast, offer a dramatic backdrop with snow-capped peaks in winter and lush greenery in the warmer months. The Duden Waterfalls, both Upper and Lower, provide a refreshing retreat as they cascade down from the mountains and into the sea. For nature enthusiasts, a boat tour on the crystal-clear waters of Lake Koycegiz, or a visit to the protected Koprulu Canyon National Park, known for its whitewater rafting opportunities, are unforgettable experiences."
          },
          {
            img: 'assets/images/education-centers/antalya/5.webp',
            text: "Modern Amenities: Antalya gracefully blends its historical charm with modern comforts. The city's development over the years has seen the emergence of luxury resorts, stylish hotels, and world-class amenities, making it a sought-after destination for travelers seeking a perfect balance of relaxation and indulgence. The marinas and yacht-filled ports attract sailing enthusiasts from around the globe, while the city's buzzing nightlife promises vibrant entertainment and gastronomic delights."
          },
          {
            img: 'assets/images/education-centers/antalya/6.webp',
            text: "Cultural Enrichment: As a cultural hub, Antalya hosts numerous festivals, concerts, and art exhibitions throughout the year, adding an extra layer of allure to the city. The Antalya Golden Orange Film Festival, one of Turkey's most prestigious film events, draws filmmakers, actors, and movie enthusiasts to celebrate cinematic excellence. The Aspendos International Opera and Ballet Festival, held in the ancient Aspendos Theater, offers visitors a unique opportunity to experience world-class performances against the backdrop of a 2,000-year-old amphitheater."
          },
          {
            img: 'assets/images/education-centers/antalya/7.webp',
            text: "Warm Hospitality: Perhaps the most enduring memory for visitors to Antalya is the warm hospitality and friendliness of its locals. The people of Antalya take great pride in their city and are eager to share their culture and traditions with visitors, creating a welcoming and inclusive atmosphere that leaves a lasting impression. In conclusion, Antalya's allure lies in its ability to seamlessly blend history, natural beauty, and modernity into a harmonious and captivating experience. From exploring ancient ruins to basking on pristine beaches, from strolling through charming old town alleys to indulging in a thriving contemporary scene, Antalya offers a unique and unforgettable journey that beckons travelers from all corners of the world."
          },
        ]
      },

      {
        img: '../assets/images/education-centers/Istanbul.png',
        imgbg: '../assets/images/education-centers/istanbul/89.jpg',
        name: 'Istanbul', position: { bottom: 18, left: 53.75 },
        text: 'İstanbul, the enchanting metropolis that bridges two continents, is a captivating fusion of history, culture, and modernity. Straddling the divide between Europe and Asia, this city boasts a rich and diverse heritage that spans millennia.',
        slides: [
          {
            img: 'assets/images/education-centers/istanbul/2.webp',
            text: "Historical Marvels: Istanbul's skyline is adorned with iconic landmarks that bear witness to its storied past. The Hagia Sophia, a masterpiece of Byzantine architecture, and the stunning Blue Mosque, known for its intricate tilework, are architectural wonders that showcase the city's diverse heritage. The Topkapi Palace, once home to Ottoman sultans, offers a glimpse into the opulent lifestyle of the empire's rulers. The Grand Bazaar, one of the world's oldest covered markets, invites visitors to explore a labyrinth of stalls brimming with treasures."
          },
          {
            img: 'assets/images/education-centers/istanbul/3.webp',
            text: "Cultural Intersection: Istanbul is a true melting pot of cultures, where East meets West. The city's historic neighborhoods like Sultanahmet and Fatih transport you to the heart of its ancient past, while districts like Beyoğlu and Kadıköy exude a vibrant, cosmopolitan energy. The Istanbul Modern Museum and Pera Museum exhibit contemporary and classic art, reflecting the city's artistic dynamism."
          },
          {
            img: 'assets/images/education-centers/istanbul/4.webp',
            text: "Bosphorus Beauty: The Bosphorus Strait, which divides the city, is a breathtaking natural wonder. A leisurely cruise along its waters reveals stunning views of historic palaces, waterfront mansions, and the iconic Bosphorus Bridge. The Asian side of Istanbul, with its charming neighborhoods and scenic parks, offers a peaceful escape from the bustling European side."
          },
          {
            img: 'assets/images/education-centers/istanbul/5.webp',
            text: "Culinary Delights: Istanbul's culinary scene is a gastronomic delight. Traditional Turkish dishes like kebabs, baklava, and Turkish delight are savored in local eateries and street stalls. The city's vibrant street food culture invites exploration of flavors at every corner. Sip Turkish tea or coffee at historic tea houses and savor fresh seafood at the bustling fish markets."
          },
          {
            img: 'assets/images/education-centers/istanbul/6.webp',
            text: "Bazaars and Souvenirs: The Grand Bazaar and the Spice Bazaar are treasure troves of Turkish craftsmanship and spices. Visitors can browse through a wide array of carpets, ceramics, textiles, and jewelry, making it a perfect place to acquire souvenirs."
          },
          {
            img: 'assets/images/education-centers/istanbul/7.webp',
            text: "Warm Hospitality: Istanbul's residents, known as 'Istanbullular,' are known for their warm and welcoming nature. Their genuine hospitality and willingness to share their city's history and traditions enhance the overall experience for visitors. In conclusion, Istanbul is a city that seamlessly combines its rich historical legacy with a vibrant contemporary spirit. Whether you're exploring its ancient landmarks, savoring its diverse cuisine, or cruising the Bosphorus, Istanbul offers an unforgettable journey through time and culture at the crossroads of East and West."
          },
          {
            img: 'assets/images/education-centers/istanbul/1.webp',
            text: "In conclusion, Istanbul is a city that seamlessly combines its rich historical legacy with a vibrant contemporary spirit. Whether you're exploring its ancient landmarks, savoring its diverse cuisine, or cruising the Bosphorus, Istanbul offers an unforgettable journey through time and culture at the crossroads of East and West."
          },
        ]
      },

      {
        img: '../assets/images/education-centers/Barcelona.png',
        imgbg: '../assets/images/education-centers/barcelona/barcelona-bg.jpg',
        name: 'Barcelona',
        position: { bottom: 20.25, left: 39.5 },
        text: 'Barcelona, the enchanting capital of Catalonia in Spain, is a dynamic and culturally diverse city that captivates travelers with its unique blend of history, art, architecture, and Mediterranean charm. Situated along the northeastern coast of the Iberian Peninsula, Barcelona is a city that celebrates its rich heritage while embracing modernity and creativity.',
        slides: [
          {
            img: 'assets/images/education-centers/barcelona/2.webp', text: "Architectural Marvels: Barcelona is synonymous with groundbreaking architecture, thanks in large part to the visionary architect Antoni Gaudí. His iconic Sagrada Família, a monumental basilica known for its whimsical design and intricate details, remains one of the world's most awe-inspiring architectural wonders. Gaudí's influence can also be seen in other landmarks like Park Güell and Casa Batlló. The city's Gothic Quarter, with its narrow medieval streets and historic buildings, offers a glimpse into its ancient past."
          },
          {
            img: 'assets/images/education-centers/barcelona/3.webp', text: "Cultural Hub: Barcelona's cultural scene is thriving. The Picasso Museum houses an extensive collection of the famed artist's works, providing insight into his formative years. The Joan Miró Foundation showcases the creations of another Catalan artistic genius. The Palau de la Música Catalana, a Modernist concert hall, hosts concerts and performances in a stunning architectural setting."
          },
          {
            img: 'assets/images/education-centers/barcelona/4.webp', text: "Mediterranean Beauty: Barcelona's location along the Mediterranean Sea grants it a picturesque waterfront. The city's beaches, like Barceloneta, offer a perfect blend of relaxation and recreation, where visitors can soak up the sun and savor fresh seafood at beachside chiringuitos (restaurants). The lively promenade, La Rambla, is perfect for leisurely strolls, shopping, and people-watching."
          },
          {
            img: 'assets/images/education-centers/barcelona/5.webp', text: "Historical Treasures: Beyond Gaudí's works, Barcelona boasts historical treasures like the Gothic Cathedral of Barcelona and the Roman ruins in the Gothic Quarter, including the Temple of Augustus. The city's historic squares, such as Plaça Reial and Plaça de Sant Jaume, are steeped in history and provide a glimpse into daily life."
          },
          {
            img: 'assets/images/education-centers/barcelona/6.webp', text: "Catalan Identity: Barcelona is the capital of Catalonia, a region with a distinct cultural identity and language. Visitors can immerse themselves in Catalan traditions, from the Castells (human towers) to the vibrant festivals like La Mercè. The city's vibrant neighborhoods, like Gràcia and El Raval, showcase the unique character of the region."
          },
          {
            img: 'assets/images/education-centers/barcelona/7.webp', text: "Warm and Welcoming Atmosphere: Barcelona's residents, known as 'Barcelonins,' are known for their warm and welcoming nature. Their pride in their city and culture is palpable, creating a friendly and inclusive atmosphere for visitors. In conclusion, Barcelona is a city that seamlessly merges its artistic and architectural heritage with a Mediterranean lifestyle and a vibrant cultural scene. Whether exploring its architectural wonders, savoring its culinary delights, or lounging on its beaches, Barcelona promises an unforgettable experience that celebrates both its historic past and its modern vitality."
          },
        ]
      },

      {
        img: '../assets/images/education-centers/Ohrid.png',
        imgbg: '../assets/images/education-centers/ohrid/ohrid-bg.jpg',
        name: 'Ohrid',
        position: { bottom: 17, left: 49.5 },
        text: "Ohrid, a hidden gem nestled in the southwestern part of North Macedonia, is a breathtaking destination that enchants visitors with its unrivaled natural beauty, rich history, and spiritual significance. Perched on the shores of Lake Ohrid, one of Europe's oldest and deepest lakes, the city is a UNESCO World Heritage site that offers a unique and unforgettable journey for travelers.",
        slides: [
          {
            img:
              'assets/images/education-centers/ohrid/1.webp',
            text: "Historical and Spiritual Significance: Ohrid's history dates back to antiquity, making it one of the oldest settlements in the Balkans. The city's ancient heritage is evident in its well-preserved churches, monasteries, and archaeological sites. The Church of St. Sophia, a Byzantine-era basilica, and the medieval Church of St. John at Kaneo, perched on a cliff overlooking the lake, are prime examples of the city's historical and religious importance. Ohrid has also been a center of learning and spirituality, earning it the nickname 'the Jerusalem of the Balkans' due to its numerous churches and monasteries."
          },
          {
            img:
              'assets/images/education-centers/ohrid/2.webp',
            text: "Lake Ohrid: The city's most stunning feature is undoubtedly Lake Ohrid, often referred to as 'Europe's blue eye.' Its crystal-clear waters, surrounded by a backdrop of majestic mountains, create a postcard-worthy setting. Visitors can take boat tours on the lake to explore its pristine islands, such as St. Naum Monastery, and swim in its inviting waters. Lake Ohrid is also a UNESCO-designated site due to its unique ecosystem, with endemic species found nowhere else in the world."
          },
          {
            img:
              'assets/images/education-centers/ohrid/3.webp',
            text: "Ancient Ruins and Archaeological Sites: Beyond the spiritual sites, Ohrid's archaeological treasures include the Ancient Theatre of Ohrid, which dates back to Hellenistic times and hosts performances and concerts to this day. The Plaošnik archaeological site, once an early Christian basilica, is now home to the Church of St. Clement, housing a collection of religious artifacts and frescoes. The remnants of the ancient Roman theater are another testament to Ohrid's historical significance."
          },
          {
            img:
              'assets/images/education-centers/ohrid/4.webp',
            text: "Old Bazaar and Local Culture: The Old Bazaar of Ohrid, dating back to the Ottoman era, is a vibrant hub of local culture. Visitors can explore its narrow streets lined with shops selling traditional crafts, handmade souvenirs, and local delicacies. The aroma of freshly brewed Turkish coffee and baklava fills the air, inviting visitors to immerse themselves in the city's authentic atmosphere."
          },
          {
            img:
              'assets/images/education-centers/ohrid/5.webp',
            text: "Preserved Traditional Architecture: Ohrid's architecture reflects a blend of various influences, from Byzantine and Ottoman to Renaissance and Baroque styles. The city's characteristic red-tiled roofs and stone houses add to its charm, creating a harmonious blend of old-world charm and contemporary life."
          },
          {
            img:
              'assets/images/education-centers/ohrid/6.webp',
            text: "Warm Local Hospitality: The locals of Ohrid warmly welcome visitors, sharing their stories, traditions, and love for their city. Their hospitality enhances the overall experience, making travelers feel like part of the local community and leaving a lasting impression."
          },
          {
            img:
              'assets/images/education-centers/ohrid/7.webp',
            text: "In conclusion, Ohrid is a city of timeless allure, where nature's beauty meets history and spirituality. The mesmerizing Lake Ohrid, the rich cultural heritage, and the warm hospitality of its people create an atmosphere of enchantment and exploration. Whether exploring ancient ruins, sailing on the tranquil lake, or strolling through the cobbled streets of the Old Bazaar, Ohrid promises an unforgettable journey that lingers in the hearts of all who visit."
          },
        ]
      },

      {
        img: '../assets/images/education-centers/Berlin.png',
        imgbg: '../assets/images/education-centers/berlin/berlin-bg.jpg',
        name: 'Berlin',
        position: { bottom: 35.5, left: 46 },
        text: 'Berlin, the dynamic capital of Germany, is a city that wears its history on its sleeve while embracing a forward-looking, creative spirit. Located at the heart of Europe, Berlin is a place where the past and the present converge to create a unique and captivating urban tapestry.',
        slides: [
          {
            img: 'assets/images/education-centers/berlin/1.webp',
            text: "Historical Significance: Berlin is steeped in history, with landmarks that bear witness to its tumultuous past. The Berlin Wall, once a symbol of division, has become a powerful symbol of reunification. The Brandenburg Gate, a neoclassical masterpiece, stands as a symbol of peace and unity. The Holocaust Memorial and the Stasi Museum provide poignant insights into the city's complex history."
          },
          {
            img: 'assets/images/education-centers/berlin/2.webp',
            text: "Cultural Epicenter: Berlin's cultural scene is a thriving and eclectic mix of art, music, and theater. World-class museums like the Pergamon Museum and the Gemäldegalerie house treasures from across the globe. The city's vibrant street art, seen on the remains of the Berlin Wall and in neighborhoods like Kreuzberg, reflects its avant-garde spirit. Berlin's nightlife is legendary, with techno clubs and jazz bars that keep the city alive into the early hours."
          },
          {
            img: 'assets/images/education-centers/berlin/3.webp',
            text: "Green Oasis: Berlin is a green city, with numerous parks and lakes that offer respite from urban life. The Tiergarten, a sprawling park in the city center, is a favorite spot for picnics and leisurely walks. The Mauerpark, famous for its Sunday flea market and open-air karaoke sessions, is a hub of local culture. The city's many lakes, including Wannsee and Müggelsee, provide opportunities for swimming and relaxation."
          },
          {
            img: 'assets/images/education-centers/berlin/4.webp',
            text: "Culinary Diversity: Berlin's culinary scene is as diverse as its population. From traditional German beer gardens to international street food markets, the city offers a world of flavors. Doner kebabs, currywurst, and schnitzel are local favorites, while Michelin-starred restaurants cater to those seeking gourmet experiences. The Turkish Market in Kreuzberg is a melting pot of tastes and cultures."
          },
          {
            img: 'assets/images/education-centers/berlin/5.webp',
            text: "Innovative Spirit: Berlin is a city of innovation and entrepreneurship. The startup scene thrives here, and the city's tech hubs and coworking spaces foster creativity. Berlin is also known for its commitment to sustainability and green initiatives, making it a leader in eco-friendly urban development."
          },
          {
            img: 'assets/images/education-centers/berlin/6.webp',
            text: "Warm and Inclusive Atmosphere: Berliners, known for their 'Berliner Schnauze' or Berliner snout, are known for their directness and frankness. Despite this, the city has a welcoming and inclusive atmosphere, and the diverse population adds to its cosmopolitan charm."
          },
          {
            img: 'assets/images/education-centers/berlin/7.webp',
            text: "In conclusion, Berlin is a city of contradictions and contrasts, where history and modernity coexist harmoniously. Whether you're exploring its historic landmarks, immersing yourself in its vibrant cultural scene, or simply enjoying its green spaces and diverse cuisine, Berlin offers an ever-evolving, enriching experience that celebrates both its past and its future."
          },
        ]
      },

      {
        img: '../assets/images/education-centers/Stockholm.png',
        imgbg: '../assets/images/education-centers/stockholm/stockholm-bg.jpg',
        name: 'Stockholm',
        position: { bottom: 45.5, left: 48 },
        text: 'Stockholm, the enchanting capital city of Sweden, is a captivating destination that seamlessly weaves together a rich history, breathtaking natural beauty, and a dynamic urban landscape. Spread across 14 islands connected by picturesque bridges, Stockholm is a city of contrasts that offers a plethora of experiences to delight visitors.',
        slides: [
          {
            img: 'assets/images/education-centers/stockholm/1.webp',
            text: "Historical Charm: Steeped in history, Stockholm boasts a well-preserved old town known as Gamla Stan. Its narrow cobblestone streets, colorful buildings, and medieval architecture transport visitors back in time. The Royal Palace, a grand and opulent structure, is a prominent landmark that showcases the city's regal heritage. Meanwhile, the Vasa Museum, home to the remarkably preserved 17th-century warship Vasa, offers a fascinating glimpse into Sweden's maritime past."
          },
          {
            img: 'assets/images/education-centers/stockholm/2.webp',
            text: "Stunning Archipelago: Stockholm's unique setting amidst a stunning archipelago of over 30,000 islands and islets adds to its allure. The shimmering waters of Lake Mälaren and the Baltic Sea surround the city, providing numerous opportunities for boat tours, island hopping, and waterfront dining. During the summer months, locals and visitors flock to the islands for outdoor activities, picnics, and sunbathing."
          },
          {
            img: 'assets/images/education-centers/stockholm/3.webp',
            text: "Modern Scandinavian Design: Stockholm is synonymous with cutting-edge Scandinavian design. The city is dotted with design stores, stylish boutiques, and contemporary art galleries that showcase the latest trends in fashion, home decor, and industrial design. The annual Stockholm Design Week and Stockholm Furniture & Light Fair are highlights for design enthusiasts from around the world."
          },
          {
            img: 'assets/images/education-centers/stockholm/4.webp',
            text: "Cultural Treasures: As a cultural hub, Stockholm offers a diverse range of cultural treasures. The city's museums and art institutions, such as the Nationalmuseum, Moderna Museet, and Fotografiska, showcase a vast array of artworks from different eras and styles. The Stockholm Concert Hall and the Royal Swedish Opera host world-class performances, while the ABBA Museum pays tribute to Sweden's iconic music group."
          },
          {
            img: 'assets/images/education-centers/stockholm/5.webp',
            text: "Nature in the City: Despite being a cosmopolitan capital, Stockholm is renowned for its commitment to green spaces and nature preservation. Djurgården, one of the city's green lungs, is a vast island park that offers walking trails, picnic spots, and attractions like the Skansen open-air museum and Gröna Lund amusement park. Stockholm's many parks, such as Kungsträdgården and Humlegården, provide locals and visitors with serene escapes within the heart of the city."
          },
          {
            img: 'assets/images/education-centers/stockholm/6.webp',
            text: "Culinary Delights: Stockholm's dining scene is a gastronomic adventure, reflecting the city's diverse cultural influences. From traditional Swedish cuisine, including herring, meatballs, and gravlax, to international delicacies, visitors can indulge in a variety of flavors and culinary experiences. The city's vibrant food markets, like Östermalm Food Hall and Hötorgshallen, offer a delightful selection of fresh produce, artisanal treats, and gourmet delights."
          },
          {
            img: 'assets/images/education-centers/stockholm/7.webp',
            text: "Warm and Cosmopolitan Vibe: Stockholm's residents, known as Stockholmers, are renowned for their welcoming and cosmopolitan nature. The city's international population and diverse cultural scene contribute to its open and inclusive atmosphere, making visitors feel at home and encouraging them to explore the city's vibrant neighborhoods and cultural events. In conclusion, Stockholm is a city of contrasts and a treasure trove of history, natural beauty, and modern Scandinavian allure. Whether wandering through its charming old town, exploring its stunning archipelago, immersing oneself in its rich cultural offerings, or embracing its progressive and welcoming atmosphere, Stockholm promises an unforgettable and enriching experience for travelers seeking a harmonious blend of tradition and innovation."
          },
        ]
      },

      // {
      //   img: '../assets/images/education-centers/Riga.png',
      //   imgbg: '../assets/images/education-centers/Riga.png',
      //   name: 'Riga', position: { bottom: 42, left: 50.5 }, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?',
      //   slides: [
      //     { img: 'assets/images/img-1.webp', text: "Antalya, a captivating city situated on the southwestern coast of Turkey, is a mesmerizing destination that boasts a rich tapestry of history, stunning natural landscapes, and a vibrant modern culture. This Mediterranean gem has charmed visitors for centuries, enticing them with its blend of ancient wonders and modern delights. History and Heritage:Antalya's history stretches back to antiquity, with evidence of human settlements dating back to the Paleolithic period. It has been a significant port city since ancient times, serving as a vital link between the Mediterranean and the Anatolian region. Throughout its storied past, Antalya has been influenced by various civilizations, including the Romans, Byzantines, and Ottomans. The city's historicalsignificance is evident in the well-preserved relics scattered throughout the area, such as Hadrian's Gate, a majestic Roman triumphal arch built in 130 AD to honor Emperor Hadrian's visit, and the impressive ancient theaters that once hosted dramatic performances andgladiatorial contests." },
      //     { img: 'assets/images/img-2.jpeg', text: "Old Town Charm: One of Antalya's most charming aspects is its historic district known as Kaleici. This enchanting labyrinth of narrow cobblestone streets, Ottoman-era houses, and charming courtyards evokes a sense of stepping back in time. Visitors can wander through the winding alleys, discovering hidden gems like traditional Turkish teahouses, boutique shops selling handmade crafts, and quaint restaurants serving mouthwatering local delicacies. The iconic Clock Tower stands as a landmark in Kaleici, offering a perfect meeting point and a reminder of the city's history." },
      //     { img: 'assets/images/img-3.webp', text: "Turquoise Coastline: The crown jewel of Antalya's allure lies in its pristine coastline, often referred to as the 'Turkish Riviera.' The azure waters of the Mediterranean Sea gently lap against the shores, creating a paradise for beach lovers and water enthusiasts. Visitors can relax on the sandy stretches of Konyaalti and Lara Beach or seek more secluded coves along the coast. The region's warm climate, with long, sunny summers and mild winters, allows for year-round enjoyment of the beach and outdoor activities." },
      //     { img: 'assets/images/img-4.jpg', text: '' },
      //     { img: 'assets/images/img-5.jpg', text: '' },
      //     { img: 'assets/images/riga.jpg', text: '' },
      //     { img: 'assets/images/img-2.jpeg', text: '' },
      //     { img: 'assets/images/img-4.jpg', text: '' },
      //     { img: 'assets/images/img-5.jpg', text: '' },
      //     { img: 'assets/images/riga.jpg', text: '' }
      //   ]
      // },

      {
        img: '../assets/images/education-centers/Helsinki.png',
        imgbg: '../assets/images/education-centers/helsinki/helsinki-bg.jpg',
        name: 'Helsinki',
        position: { bottom: 47.5, left: 51 },
        text: 'Helsinki, the vibrant capital city of Finland, is a captivating destination that seamlessly blends modernity, Nordic charm, and natural beauty. Situated on the southern coast of the country, Helsinki is a dynamic metropolis that offers a wide array of experiences for visitors to enjoy.',
        slides: [
          { 
            img: 'assets/images/education-centers/helsinki/1.webp',
            text: "Design and Architecture: Helsinki is renowned for its cutting-edge design and striking architecture. The city's skyline is a fascinating mix of contemporary glass-and-steel structures juxtaposed with neoclassical buildings and Art Nouveau facades. Architectural landmarks such as the majestic Helsinki Cathedral, the unique Temppeliaukio Church carved into solid rock, and the modernist masterpiece Finlandia Hall, designed by renowned architect Alvar Aalto, showcase the city's commitment to both preserving its heritage and embracing innovative designs."
          },
          { 
            img: 'assets/images/education-centers/helsinki/2.webp',
            text: "Cultural Attractions: The city is a treasure trove of cultural attractions that cater to a diverse range of interests. Art lovers can explore the exceptional collections at the Ateneum Art Museum, Kiasma Museum of Contemporary Art, and the Sinebrychoff Art Museum. History enthusiasts can delve into Finland's past at the National Museum of Finland, while the Seurasaari Open-Air Museum offers a glimpse into the country's traditional way of life. The Design District, a hub of creativity and innovation, houses a variety of boutiques, galleries, and design studios for those interested in contemporary Finnish design."
          },
          { 
            img: 'assets/images/education-centers/helsinki/3.webp',
            text: "Bustling Market Square: Helsinki's iconic Market Square, or 'Kauppatori,' is a bustling hub of activity and a popular gathering spot for both locals and tourists. Here, visitors can savor local treats, including freshly caught fish, berries, and traditional Finnish pastries. The market also offers an array of handicrafts, souvenirs, and handmade products, making it an ideal place to shop for unique gifts."
          },
          { 
            img: 'assets/images/education-centers/helsinki/4.webp',
            text: "Sauna Culture: As the birthplace of the sauna, Helsinki embraces this ancient tradition with passion. Saunas are an integral part of Finnish life and can be found throughout the city. Visitors can experience the authentic Finnish sauna experience in public saunas like Löyly or opt for more traditional wood-fired saunas on the nearby islands."
          },
          { 
            img: 'assets/images/education-centers/helsinki/5.webp',
            text: "Sustainability and Innovation: Helsinki takes pride in its commitment to sustainability and innovation. The city has been at the forefront of promoting eco-friendly practices and green initiatives. It is also leading the charge in smart city technology and digital innovation, making it a model for urban development and sustainability."
          },
          { 
            img: 'assets/images/education-centers/helsinki/6.webp',
            text: "Warm and Welcoming Atmosphere: Finns are known for their warm hospitality and friendliness. Visitors to Helsinki often find themselves welcomed by locals eager to share their culture and traditions. The relaxed and safe environment adds to the overall positive experience of exploring the city."
          },
          { 
            img: 'assets/images/education-centers/helsinki/7.webp',
            text: "In conclusion, Helsinki is a city that enchants travelers with its blend of modernity, Nordic allure, and natural beauty. From its cutting-edge design and architectural marvels to its vibrant cultural scene and saunas, Helsinki offers a harmonious mix of urban living and natural wonders, making it an enchanting and memorable destination for visitors from around the world."
          },
        ]
      },
    ]

  toggleEducationCenterCard(index: number, isOpen: boolean = false) {
    const el = document.getElementById('card-mobile' + index);
    if (el && !isOpen) {
      el.classList.toggle('custom-info-card-mobile-out');
    };
    if (el && isOpen) {
      el.classList.add('custom-info-card-mobile-out');
    }
  }

  activeCityIndex: number = 0;
  toggleTravelGuideModel(index: number) {
    const cardEl = document.getElementById('card-' + index);
    if (cardEl) {
      cardEl.classList.add('d-none');
      setTimeout(() => {
        cardEl.classList.remove('d-none');
      }, 100);
    }
    this.activeCityIndex = index;
    const el = document.getElementById('hiddenElementId' + index);
    this.currentSlide = undefined;
    this.activeSlide = 0;
    el?.classList.toggle('visible');
    console.log(el);
  }

  toggleTravelGuideModelMobile(index: number) {
    this.activeCityIndex = index;
    const el = document.getElementById('hiddenElementId-mobile' + index);
    this.currentSlide = undefined;
    this.activeSlide = 0;
    el?.classList.toggle('visible');
    this.toggleEducationCenterCard(index, true)
  }

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  activeSlide: number = 0
  currentSlide: { img: string, text: string } | undefined
  openSlideDetails(index: number = 0) {
    const slides = this.cities[this.activeCityIndex].slides;
    this.currentSlide = slides[index];
    this.activeSlide = index;
  }

}
