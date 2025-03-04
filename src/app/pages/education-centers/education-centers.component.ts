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
    name: string,
    position: {
      bottom: number,
      left: number
    }
    text: string,
    slides: { img: string, text: string }[]
  }[] = [
      {
        img: '../assets/images/education-centers/Antalya.png', name: 'ANTALYA', position: {bottom: 11, left: 55}, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minus impedit? Laborum obcaecati, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?',
        slides: [
          { img: 'assets/images/img-1.webp', text: "Antalya, a captivating city situated on the southwestern coast of Turkey, is a mesmerizing destination that boasts a rich tapestry of history, stunning natural landscapes, and a vibrant modern culture. This Mediterranean gem has charmed visitors for centuries, enticing them with its blend of ancient wonders and modern delights. History and Heritage:Antalya's history stretches back to antiquity, with evidence of human settlements dating back to the Paleolithic period. It has been a significant port city since ancient times, serving as a vital link between the Mediterranean and the Anatolian region. Throughout its storied past, Antalya has been influenced by various civilizations, including the Romans, Byzantines, and Ottomans. The city's historicalsignificance is evident in the well-preserved relics scattered throughout the area, such as Hadrian's Gate, a majestic Roman triumphal arch built in 130 AD to honor Emperor Hadrian's visit, and the impressive ancient theaters that once hosted dramatic performances andgladiatorial contests." },
          { img: 'assets/images/img-2.jpeg', text: "Old Town Charm: One of Antalya's most charming aspects is its historic district known as Kaleici. This enchanting labyrinth of narrow cobblestone streets, Ottoman-era houses, and charming courtyards evokes a sense of stepping back in time. Visitors can wander through the winding alleys, discovering hidden gems like traditional Turkish teahouses, boutique shops selling handmade crafts, and quaint restaurants serving mouthwatering local delicacies. The iconic Clock Tower stands as a landmark in Kaleici, offering a perfect meeting point and a reminder of the city's history." },
          { img: 'assets/images/img-3.webp', text: "Turquoise Coastline: The crown jewel of Antalya's allure lies in its pristine coastline, often referred to as the 'Turkish Riviera.' The azure waters of the Mediterranean Sea gently lap against the shores, creating a paradise for beach lovers and water enthusiasts. Visitors can relax on the sandy stretches of Konyaalti and Lara Beach or seek more secluded coves along the coast. The region's warm climate, with long, sunny summers and mild winters, allows for year-round enjoyment of the beach and outdoor activities." },
          { img: 'assets/images/img-4.jpg', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia tempore asperiores. Vel totam vero natus sequi molestiae illo facilis at aliquam cupiditate non laudantium dolor, harum ut consequatur consectetur? Sapiente velit perspiciatis sunt illo perferendis porro libero unde. Ea, consequatur rerum quo porro aperiam nesciunt enim fuga quis, quas dignissimos perspiciatis ad officiis quae aut neque esse. Beatae, provident! Velit, temporibus expedita qui impedit quo nihil exercitationem illo totam dicta quisquam consequuntur officia veritatis modi, praesentium eligendi perferendis omnis repellendus culpa vel eum dignissimos suscipit. Nemo dolore quidem molestias! Suscipit odit, iusto ipsum autem dicta impedit laboriosam dolores beatae veniam, quasi voluptatum velit aperiam labore iste deserunt optio sint libero consequuntur repellat alias deleniti ab sit distinctio blanditiis. Eaque. Nisi reiciendis id earum itaque, minus repellat illo quo a unde assumenda dolore possimus obcaecati distinctio enim eos! Explicabo nihil, illum debitis praesentium qui consectetur fugiat velit esse modi perferendis?' },
          { img: 'assets/images/img-5.jpg', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia tempore asperiores. Vel totam vero natus sequi molestiae illo facilis at aliquam cupiditate non laudantium dolor, harum ut consequatur consectetur? Sapiente velit perspiciatis sunt illo perferendis porro libero unde. Ea, consequatur rerum quo porro aperiam nesciunt enim fuga quis, quas dignissimos perspiciatis ad officiis quae aut neque esse. Beatae, provident! Velit, temporibus expedita qui impedit quo nihil exercitationem illo totam dicta quisquam consequuntur officia veritatis modi, praesentium eligendi perferendis omnis repellendus culpa vel eum dignissimos suscipit. Nemo dolore quidem molestias! Suscipit odit, iusto ipsum autem dicta impedit laboriosam dolores beatae veniam, quasi voluptatum velit aperiam labore iste deserunt optio sint libero consequuntur repellat alias deleniti ab sit distinctio blanditiis. Eaque. Nisi reiciendis id earum itaque, minus repellat illo quo a unde assumenda dolore possimus obcaecati distinctio enim eos! Explicabo nihil, illum debitis praesentium qui consectetur fugiat velit esse modi perferendis?' },
          { img: 'assets/images/riga.jpg', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia tempore asperiores. Vel totam vero natus sequi molestiae illo facilis at aliquam cupiditate non laudantium dolor, harum ut consequatur consectetur? Sapiente velit perspiciatis sunt illo perferendis porro libero unde. Ea, consequatur rerum quo porro aperiam nesciunt enim fuga quis, quas dignissimos perspiciatis ad officiis quae aut neque esse. Beatae, provident! Velit, temporibus expedita qui impedit quo nihil exercitationem illo totam dicta quisquam consequuntur officia veritatis modi, praesentium eligendi perferendis omnis repellendus culpa vel eum dignissimos suscipit. Nemo dolore quidem molestias! Suscipit odit, iusto ipsum autem dicta impedit laboriosam dolores beatae veniam, quasi voluptatum velit aperiam labore iste deserunt optio sint libero consequuntur repellat alias deleniti ab sit distinctio blanditiis. Eaque. Nisi reiciendis id earum itaque, minus repellat illo quo a unde assumenda dolore possimus obcaecati distinctio enim eos! Explicabo nihil, illum debitis praesentium qui consectetur fugiat velit esse modi perferendis?' },
          { img: 'assets/images/img-2.jpeg', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia tempore asperiores. Vel totam vero natus sequi molestiae illo facilis at aliquam cupiditate non laudantium dolor, harum ut consequatur consectetur? Sapiente velit perspiciatis sunt illo perferendis porro libero unde. Ea, consequatur rerum quo porro aperiam nesciunt enim fuga quis, quas dignissimos perspiciatis ad officiis quae aut neque esse. Beatae, provident! Velit, temporibus expedita qui impedit quo nihil exercitationem illo totam dicta quisquam consequuntur officia veritatis modi, praesentium eligendi perferendis omnis repellendus culpa vel eum dignissimos suscipit. Nemo dolore quidem molestias! Suscipit odit, iusto ipsum autem dicta impedit laboriosam dolores beatae veniam, quasi voluptatum velit aperiam labore iste deserunt optio sint libero consequuntur repellat alias deleniti ab sit distinctio blanditiis. Eaque. Nisi reiciendis id earum itaque, minus repellat illo quo a unde assumenda dolore possimus obcaecati distinctio enim eos! Explicabo nihil, illum debitis praesentium qui consectetur fugiat velit esse modi perferendis?' },
          { img: 'assets/images/img-4.jpg', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia tempore asperiores. Vel totam vero natus sequi molestiae illo facilis at aliquam cupiditate non laudantium dolor, harum ut consequatur consectetur? Sapiente velit perspiciatis sunt illo perferendis porro libero unde. Ea, consequatur rerum quo porro aperiam nesciunt enim fuga quis, quas dignissimos perspiciatis ad officiis quae aut neque esse. Beatae, provident! Velit, temporibus expedita qui impedit quo nihil exercitationem illo totam dicta quisquam consequuntur officia veritatis modi, praesentium eligendi perferendis omnis repellendus culpa vel eum dignissimos suscipit. Nemo dolore quidem molestias! Suscipit odit, iusto ipsum autem dicta impedit laboriosam dolores beatae veniam, quasi voluptatum velit aperiam labore iste deserunt optio sint libero consequuntur repellat alias deleniti ab sit distinctio blanditiis. Eaque. Nisi reiciendis id earum itaque, minus repellat illo quo a unde assumenda dolore possimus obcaecati distinctio enim eos! Explicabo nihil, illum debitis praesentium qui consectetur fugiat velit esse modi perferendis?' },
          { img: 'assets/images/img-5.jpg', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia tempore asperiores. Vel totam vero natus sequi molestiae illo facilis at aliquam cupiditate non laudantium dolor, harum ut consequatur consectetur? Sapiente velit perspiciatis sunt illo perferendis porro libero unde. Ea, consequatur rerum quo porro aperiam nesciunt enim fuga quis, quas dignissimos perspiciatis ad officiis quae aut neque esse. Beatae, provident! Velit, temporibus expedita qui impedit quo nihil exercitationem illo totam dicta quisquam consequuntur officia veritatis modi, praesentium eligendi perferendis omnis repellendus culpa vel eum dignissimos suscipit. Nemo dolore quidem molestias! Suscipit odit, iusto ipsum autem dicta impedit laboriosam dolores beatae veniam, quasi voluptatum velit aperiam labore iste deserunt optio sint libero consequuntur repellat alias deleniti ab sit distinctio blanditiis. Eaque. Nisi reiciendis id earum itaque, minus repellat illo quo a unde assumenda dolore possimus obcaecati distinctio enim eos! Explicabo nihil, illum debitis praesentium qui consectetur fugiat velit esse modi perferendis?' },
          { img: 'assets/images/riga.jpg', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia tempore asperiores. Vel totam vero natus sequi molestiae illo facilis at aliquam cupiditate non laudantium dolor, harum ut consequatur consectetur? Sapiente velit perspiciatis sunt illo perferendis porro libero unde. Ea, consequatur rerum quo porro aperiam nesciunt enim fuga quis, quas dignissimos perspiciatis ad officiis quae aut neque esse. Beatae, provident! Velit, temporibus expedita qui impedit quo nihil exercitationem illo totam dicta quisquam consequuntur officia veritatis modi, praesentium eligendi perferendis omnis repellendus culpa vel eum dignissimos suscipit. Nemo dolore quidem molestias! Suscipit odit, iusto ipsum autem dicta impedit laboriosam dolores beatae veniam, quasi voluptatum velit aperiam labore iste deserunt optio sint libero consequuntur repellat alias deleniti ab sit distinctio blanditiis. Eaque. Nisi reiciendis id earum itaque, minus repellat illo quo a unde assumenda dolore possimus obcaecati distinctio enim eos! Explicabo nihil, illum debitis praesentium qui consectetur fugiat velit esse modi perferendis?' }
        ]
      },
      {
        img: '../assets/images/education-centers/Istanbul.png', name: 'Istanbul', position: {bottom: 18, left: 53.75}, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?',
        slides: [
          { img: 'assets/images/img-1.webp', text: "Istanbul, a captivating city situated on the southwestern coast of Turkey, is a mesmerizing destination that boasts a rich tapestry of history, stunning natural landscapes, and a vibrant modern culture. This Mediterranean gem has charmed visitors for centuries, enticing them with its blend of ancient wonders and modern delights. History and Heritage:Istanbul's history stretches back to antiquity, with evidence of human settlements dating back to the Paleolithic period. It has been a significant port city since ancient times, serving as a vital link between the Mediterranean and the Anatolian region. Throughout its storied past, Istanbul has been influenced by various civilizations, including the Romans, Byzantines, and Ottomans. The city's historicalsignificance is evident in the well-preserved relics scattered throughout the area, such as Hadrian's Gate, a majestic Roman triumphal arch built in 130 AD to honor Emperor Hadrian's visit, and the impressive ancient theaters that once hosted dramatic performances andgladiatorial contests." },
          { img: 'assets/images/img-2.jpeg', text: "Old Town Charm: One of Istanbul's most charming aspects is its historic district known as Kaleici. This enchanting labyrinth of narrow cobblestone streets, Ottoman-era houses, and charming courtyards evokes a sense of stepping back in time. Visitors can wander through the winding alleys, discovering hidden gems like traditional Turkish teahouses, boutique shops selling handmade crafts, and quaint restaurants serving mouthwatering local delicacies. The iconic Clock Tower stands as a landmark in Kaleici, offering a perfect meeting point and a reminder of the city's history." },
          { img: 'assets/images/img-3.webp', text: "Turquoise Coastline: The crown jewel of Istanbul's allure lies in its pristine coastline, often referred to as the 'Turkish Riviera.' The azure waters of the Mediterranean Sea gently lap against the shores, creating a paradise for beach lovers and water enthusiasts. Visitors can relax on the sandy stretches of Konyaalti and Lara Beach or seek more secluded coves along the coast. The region's warm climate, with long, sunny summers and mild winters, allows for year-round enjoyment of the beach and outdoor activities." },
          { img: 'assets/images/img-4.jpg', text: '' },
          { img: 'assets/images/img-5.jpg', text: '' },
          { img: 'assets/images/riga.jpg', text: '' },
          { img: 'assets/images/img-5.jpg', text: '' },
          { img: 'assets/images/riga.jpg', text: '' }
        ]
      },
      {
        img: '../assets/images/education-centers/Barcelona.png', name: 'Barcelona', position: {bottom: 20.25, left: 39.5}, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?',
        slides: [
          { img: 'assets/images/img-1.webp', text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
          { img: 'assets/images/img-2.jpeg', text: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" },
          { img: 'assets/images/img-3.webp', text: "cccccccccccccccccccccccccccccccccccccccccccccccccccccc" },
          { img: 'assets/images/img-4.jpg', text: 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddd' },
          { img: 'assets/images/img-5.jpg', text: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
          { img: 'assets/images/riga.jpg', text: 'fffffffffffffffffffffffffffffffff' },
          { img: 'assets/images/img-2.jpeg', text: 'gggggggggggggggggggggggggggggggggggggggg' },
        ]
      },
      {
        img: '../assets/images/education-centers/Ohrid.png', name: 'Ohrid', position: {bottom: 17, left: 49.5}, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?',
        slides: [
          { img: 'assets/images/img-1.webp', text: "Antalya, a captivating city situated on the southwestern coast of Turkey, is a mesmerizing destination that boasts a rich tapestry of history, stunning natural landscapes, and a vibrant modern culture. This Mediterranean gem has charmed visitors for centuries, enticing them with its blend of ancient wonders and modern delights. History and Heritage:Antalya's history stretches back to antiquity, with evidence of human settlements dating back to the Paleolithic period. It has been a significant port city since ancient times, serving as a vital link between the Mediterranean and the Anatolian region. Throughout its storied past, Antalya has been influenced by various civilizations, including the Romans, Byzantines, and Ottomans. The city's historicalsignificance is evident in the well-preserved relics scattered throughout the area, such as Hadrian's Gate, a majestic Roman triumphal arch built in 130 AD to honor Emperor Hadrian's visit, and the impressive ancient theaters that once hosted dramatic performances andgladiatorial contests." },
          { img: 'assets/images/img-2.jpeg', text: "Old Town Charm: One of Antalya's most charming aspects is its historic district known as Kaleici. This enchanting labyrinth of narrow cobblestone streets, Ottoman-era houses, and charming courtyards evokes a sense of stepping back in time. Visitors can wander through the winding alleys, discovering hidden gems like traditional Turkish teahouses, boutique shops selling handmade crafts, and quaint restaurants serving mouthwatering local delicacies. The iconic Clock Tower stands as a landmark in Kaleici, offering a perfect meeting point and a reminder of the city's history." },
          { img: 'assets/images/riga.jpg', text: '' },
          { img: 'assets/images/img-4.jpg', text: '' },
          { img: 'assets/images/img-5.jpg', text: '' },
          { img: 'assets/images/riga.jpg', text: '' }
        ]
      },
      {
        img: '../assets/images/education-centers/Berlin.png', name: 'Berlin', position: {bottom: 35.5, left: 46}, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?',
        slides: [
          { img: 'assets/images/img-1.webp', text: "Antalya, a captivating city situated on the southwestern coast of Turkey, is a mesmerizing destination that boasts a rich tapestry of history, stunning natural landscapes, and a vibrant modern culture. This Mediterranean gem has charmed visitors for centuries, enticing them with its blend of ancient wonders and modern delights. History and Heritage:Antalya's history stretches back to antiquity, with evidence of human settlements dating back to the Paleolithic period. It has been a significant port city since ancient times, serving as a vital link between the Mediterranean and the Anatolian region. Throughout its storied past, Antalya has been influenced by various civilizations, including the Romans, Byzantines, and Ottomans. The city's historicalsignificance is evident in the well-preserved relics scattered throughout the area, such as Hadrian's Gate, a majestic Roman triumphal arch built in 130 AD to honor Emperor Hadrian's visit, and the impressive ancient theaters that once hosted dramatic performances andgladiatorial contests." },
          { img: 'assets/images/img-2.jpeg', text: "Old Town Charm: One of Antalya's most charming aspects is its historic district known as Kaleici. This enchanting labyrinth of narrow cobblestone streets, Ottoman-era houses, and charming courtyards evokes a sense of stepping back in time. Visitors can wander through the winding alleys, discovering hidden gems like traditional Turkish teahouses, boutique shops selling handmade crafts, and quaint restaurants serving mouthwatering local delicacies. The iconic Clock Tower stands as a landmark in Kaleici, offering a perfect meeting point and a reminder of the city's history." },
          { img: 'assets/images/img-3.webp', text: "Turquoise Coastline: The crown jewel of Antalya's allure lies in its pristine coastline, often referred to as the 'Turkish Riviera.' The azure waters of the Mediterranean Sea gently lap against the shores, creating a paradise for beach lovers and water enthusiasts. Visitors can relax on the sandy stretches of Konyaalti and Lara Beach or seek more secluded coves along the coast. The region's warm climate, with long, sunny summers and mild winters, allows for year-round enjoyment of the beach and outdoor activities." },
          { img: 'assets/images/img-4.jpg', text: '' },
          { img: 'assets/images/img-5.jpg', text: '' },
          { img: 'assets/images/riga.jpg', text: '' },
          { img: 'assets/images/img-2.jpeg', text: '' },
          { img: 'assets/images/img-4.jpg', text: '' },
          { img: 'assets/images/img-5.jpg', text: '' },
          { img: 'assets/images/riga.jpg', text: '' }
        ]
      },
      {
        img: '../assets/images/education-centers/Stockholm.png', name: 'Stockholm', position: {bottom: 45.5, left: 48}, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?',
        slides: [
          { img: 'assets/images/img-1.webp', text: "Antalya, a captivating city situated on the southwestern coast of Turkey, is a mesmerizing destination that boasts a rich tapestry of history, stunning natural landscapes, and a vibrant modern culture. This Mediterranean gem has charmed visitors for centuries, enticing them with its blend of ancient wonders and modern delights. History and Heritage:Antalya's history stretches back to antiquity, with evidence of human settlements dating back to the Paleolithic period. It has been a significant port city since ancient times, serving as a vital link between the Mediterranean and the Anatolian region. Throughout its storied past, Antalya has been influenced by various civilizations, including the Romans, Byzantines, and Ottomans. The city's historicalsignificance is evident in the well-preserved relics scattered throughout the area, such as Hadrian's Gate, a majestic Roman triumphal arch built in 130 AD to honor Emperor Hadrian's visit, and the impressive ancient theaters that once hosted dramatic performances andgladiatorial contests." },
          { img: 'assets/images/img-2.jpeg', text: "Old Town Charm: One of Antalya's most charming aspects is its historic district known as Kaleici. This enchanting labyrinth of narrow cobblestone streets, Ottoman-era houses, and charming courtyards evokes a sense of stepping back in time. Visitors can wander through the winding alleys, discovering hidden gems like traditional Turkish teahouses, boutique shops selling handmade crafts, and quaint restaurants serving mouthwatering local delicacies. The iconic Clock Tower stands as a landmark in Kaleici, offering a perfect meeting point and a reminder of the city's history." },
          { img: 'assets/images/img-3.webp', text: "Turquoise Coastline: The crown jewel of Antalya's allure lies in its pristine coastline, often referred to as the 'Turkish Riviera.' The azure waters of the Mediterranean Sea gently lap against the shores, creating a paradise for beach lovers and water enthusiasts. Visitors can relax on the sandy stretches of Konyaalti and Lara Beach or seek more secluded coves along the coast. The region's warm climate, with long, sunny summers and mild winters, allows for year-round enjoyment of the beach and outdoor activities." },
          { img: 'assets/images/img-4.jpg', text: '' },
          { img: 'assets/images/img-5.jpg', text: '' },
          { img: 'assets/images/riga.jpg', text: '' },
          { img: 'assets/images/img-2.jpeg', text: '' },
          { img: 'assets/images/img-4.jpg', text: '' },
          { img: 'assets/images/img-5.jpg', text: '' },
          { img: 'assets/images/riga.jpg', text: '' }
        ]
      },
      {
        img: '../assets/images/education-centers/Riga.png', name: 'Riga', position: {bottom: 42, left: 50.5}, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?',
        slides: [
          { img: 'assets/images/img-1.webp', text: "Antalya, a captivating city situated on the southwestern coast of Turkey, is a mesmerizing destination that boasts a rich tapestry of history, stunning natural landscapes, and a vibrant modern culture. This Mediterranean gem has charmed visitors for centuries, enticing them with its blend of ancient wonders and modern delights. History and Heritage:Antalya's history stretches back to antiquity, with evidence of human settlements dating back to the Paleolithic period. It has been a significant port city since ancient times, serving as a vital link between the Mediterranean and the Anatolian region. Throughout its storied past, Antalya has been influenced by various civilizations, including the Romans, Byzantines, and Ottomans. The city's historicalsignificance is evident in the well-preserved relics scattered throughout the area, such as Hadrian's Gate, a majestic Roman triumphal arch built in 130 AD to honor Emperor Hadrian's visit, and the impressive ancient theaters that once hosted dramatic performances andgladiatorial contests." },
          { img: 'assets/images/img-2.jpeg', text: "Old Town Charm: One of Antalya's most charming aspects is its historic district known as Kaleici. This enchanting labyrinth of narrow cobblestone streets, Ottoman-era houses, and charming courtyards evokes a sense of stepping back in time. Visitors can wander through the winding alleys, discovering hidden gems like traditional Turkish teahouses, boutique shops selling handmade crafts, and quaint restaurants serving mouthwatering local delicacies. The iconic Clock Tower stands as a landmark in Kaleici, offering a perfect meeting point and a reminder of the city's history." },
          { img: 'assets/images/img-3.webp', text: "Turquoise Coastline: The crown jewel of Antalya's allure lies in its pristine coastline, often referred to as the 'Turkish Riviera.' The azure waters of the Mediterranean Sea gently lap against the shores, creating a paradise for beach lovers and water enthusiasts. Visitors can relax on the sandy stretches of Konyaalti and Lara Beach or seek more secluded coves along the coast. The region's warm climate, with long, sunny summers and mild winters, allows for year-round enjoyment of the beach and outdoor activities." },
          { img: 'assets/images/img-4.jpg', text: '' },
          { img: 'assets/images/img-5.jpg', text: '' },
          { img: 'assets/images/riga.jpg', text: '' },
          { img: 'assets/images/img-2.jpeg', text: '' },
          { img: 'assets/images/img-4.jpg', text: '' },
          { img: 'assets/images/img-5.jpg', text: '' },
          { img: 'assets/images/riga.jpg', text: '' }
        ]
      },
      {
        img: '../assets/images/education-centers/Helsinki.png', name: 'Helsinki', position: {bottom: 47.5, left: 51}, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolores possimus libero nostrum dignissimos ipsa ducimus repellendus vel, laboriosam praesentium beatae dolore velit consectetur, rem aut a, porro culpa? Modi? Lorem, labore omnis odit delectus autem corporis ducimus reiciendis dolore. Animi repellat rem doloremque veniam totam! Voluptas, magni?',
        slides: [
          { img: 'assets/images/img-1.webp', text: "Antalya, a captivating city situated on the southwestern coast of Turkey, is a mesmerizing destination that boasts a rich tapestry of history, stunning natural landscapes, and a vibrant modern culture. This Mediterranean gem has charmed visitors for centuries, enticing them with its blend of ancient wonders and modern delights. History and Heritage:Antalya's history stretches back to antiquity, with evidence of human settlements dating back to the Paleolithic period. It has been a significant port city since ancient times, serving as a vital link between the Mediterranean and the Anatolian region. Throughout its storied past, Antalya has been influenced by various civilizations, including the Romans, Byzantines, and Ottomans. The city's historicalsignificance is evident in the well-preserved relics scattered throughout the area, such as Hadrian's Gate, a majestic Roman triumphal arch built in 130 AD to honor Emperor Hadrian's visit, and the impressive ancient theaters that once hosted dramatic performances andgladiatorial contests." },
          { img: 'assets/images/img-2.jpeg', text: "Old Town Charm: One of Antalya's most charming aspects is its historic district known as Kaleici. This enchanting labyrinth of narrow cobblestone streets, Ottoman-era houses, and charming courtyards evokes a sense of stepping back in time. Visitors can wander through the winding alleys, discovering hidden gems like traditional Turkish teahouses, boutique shops selling handmade crafts, and quaint restaurants serving mouthwatering local delicacies. The iconic Clock Tower stands as a landmark in Kaleici, offering a perfect meeting point and a reminder of the city's history." },
          { img: 'assets/images/img-3.webp', text: "Turquoise Coastline: The crown jewel of Antalya's allure lies in its pristine coastline, often referred to as the 'Turkish Riviera.' The azure waters of the Mediterranean Sea gently lap against the shores, creating a paradise for beach lovers and water enthusiasts. Visitors can relax on the sandy stretches of Konyaalti and Lara Beach or seek more secluded coves along the coast. The region's warm climate, with long, sunny summers and mild winters, allows for year-round enjoyment of the beach and outdoor activities." },
          { img: 'assets/images/img-4.jpg', text: '' },
          { img: 'assets/images/img-5.jpg', text: '' },
          { img: 'assets/images/riga.jpg', text: '' },
          { img: 'assets/images/img-2.jpeg', text: '' },
          { img: 'assets/images/img-4.jpg', text: '' },
          { img: 'assets/images/img-5.jpg', text: '' },
          { img: 'assets/images/riga.jpg', text: '' }
        ]
      },
    ]

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
