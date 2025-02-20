import { Injectable } from '@angular/core';
import { EducationModel } from '../../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {

  constructor() { }

  schoolEducations: EducationModel[] = [
    {
      img: '../assets/images/school-education/2148630370.jpg',
      name: 'Preserving Cultural Heritage: Educating for Identity, Diversity, and Sustainability',
      preInfo: 'Welcome to the captivating journey of "Preserving Cultural Heritage: Educating for Identity, Diversity, and Sustainability." In a world brimming with vibrant cultures and rich histories, the preservation and celebration of cultural heritage stand as pillars for nurturing individual identity, embracing diversity, and ensuring a sustainable future. This course invites you to delve into the captivating tapestry of cultural heritage, where we explore its profound significance, the hurdles it faces, and the indispensable role education plays in its preservation and promotion.',
      cost: '80 €/Day',
      language: 'English',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya', 'Bitola'],
      description: [
        "'Preserving Cultural Heritage' is a journey of transformation crafted to arm educators with the knowledge, strategies, and tools essential for safeguarding and advocating cultural heritage with finesse. Participants will embark on an immersive voyage, delving deep into the various facets of cultural heritage, ranging from tangible artifacts to intangible traditions, from historical narratives to contemporary expressions. Through a blend of engaging discussions, real-world case studies, and hands-on experiences, educators will unravel the intricate tapestry of cultural heritages influence on shaping individual and collective identities, fostering inclusivity, and contributing to sustainable development.",

        "Throughout this experiential learning odyssey, educators will not only gain insights into the importance of cultural heritage but also explore innovative approaches to integrate its teachings into their educational practice. By fostering a deeper appreciation for cultural diversity and heritage, educators will empower their students to become global citizens equipped with a nuanced understanding of the world around them. Join us on this enriching journey as we embark on a quest to preserve, celebrate, and transmit the rich tapestry of human heritage to future generations. Key components of the course include:",

        "Understanding Cultural Heritage: Participants will explore the concept of cultural heritage, encompassing both tangible artifacts and intangible traditions, languages, rituals, and knowledge systems. They will delve into the significance of cultural heritage as a source of identity, belonging, and collective memory.",

        "Challenges and Threats: The course will examine the challenges and threats facing cultural heritage, including globalization, urbanization, armed conflict, natural disasters, and climate change. Participants will analyze case studies highlighting successful and unsuccessful preservation efforts.",

        "Educational Approaches: Educators will learn about innovative educational approaches for preserving and promoting cultural heritage, including experiential learning, community engagement, digital technologies, and interdisciplinary collaborations. They will explore strategies for integrating cultural heritage into curricula across various subjects and grade levels.",

        "Cultural Diversity and Inclusivity: The course will emphasize the importance of cultural diversity and inclusivity in preserving cultural heritage. Participants will explore how education can promote intercultural dialogue, mutual respect, and understanding among diverse communities, fostering social cohesion and harmony.",

        "Sustainable Development: Participants will examine the intersection of cultural heritage preservation and sustainable development goals. They will learn about the role of cultural heritage in promoting environmental sustainability, economic prosperity, and social well-being within local and global contexts.",

        "Community Engagement: The course will highlight the significance of community engagement in cultural heritage preservation. Participants will explore best practices for involving local communities, indigenous groups, and marginalized populations in decision-making processes and conservation efforts.",

        "Policy and Advocacy: Educators will gain insights into policy frameworks, legal instruments, and international initiatives aimed at safeguarding cultural heritage. They will learn how to advocate for policies that prioritize cultural heritage preservation and promote social justice and human rights."
      ],
      objectives: [
        "Understand the concept of cultural heritage and its significance in shaping individual and collective identities.",
        "Recognize the challenges and threats facing cultural heritage preservation, including globalization, urbanization, armed conflict, and climate change.",

        "Explore innovative educational approaches for preserving and promoting cultural heritage in diverse educational settings.",

        "Appreciate the importance of cultural diversity and inclusivity in cultural heritage preservation and community development.",

        "Understand the nexus between cultural heritage preservation and sustainable development goals, including environmental sustainability, economic prosperity, and social well-being.",

        "Engage with local communities, indigenous groups, and marginalized populations in cultural heritage preservation efforts.",

        "Advocate for policies and initiatives that prioritize cultural heritage preservation, social justice, and human rights."
      ],
      methodology: [
        "Lectures and Discussions: Engaging presentations on key concepts, case studies, and best practices in cultural heritage preservation.",

        "Experiential Learning: Immersive experiences, site visits, and hands-on activities to deepen understanding and appreciation of cultural heritage.",

        "Group Work: Collaborative projects, discussions, and peer learning activities to foster knowledge sharing and teamwork.",

        "Reflection and Journaling: Opportunities for self-reflection, journaling, and critical thinking exercises to enhance learning outcomes.",

        "Guest Speakers: Expert guest speakers from academia, cultural institutions, and community organizations sharing insights and experiences.",

        "Technology Integration: Utilization of digital tools, multimedia resources, and virtual platforms for interactive learning and exploration.",
      ],
      assesmentImplementation: [
        "Project-Based Assignments: Development of cultural heritage preservation plans, educational materials, and advocacy campaigns.",

        "Case Studies: Analysis of real-world case studies and best practices in cultural heritage preservation and education.",

        "Reflective Journals: Submission of reflective journals documenting participants' learning experiences, insights gained, and personal reflections.",

        "Group Presentations: Collaborative presentations on cultural heritage preservation projects, community engagement initiatives, or policy advocacy efforts.",

        "Quizzes and Assessments: Completion of quizzes and assessments to gauge understanding of key concepts, theories, and case studies.",

        "Final Project: Completion of a final project that integrates knowledge and skills acquired throughout the course, such as a cultural heritage preservation plan, educational resource, or advocacy campaign."
      ],
      dailyProgram: [
        {
          title: "Understanding Cultural Heritage",
          morningSession: [
            "Welcome and Course Overview",
            "Introduction to Cultural Heritage: Concepts and Significance"
          ],
          afternoonSession: [
            "Challenges and Threats to Cultural Heritage Preservation",
            "Case Study Analysis: Successes and Failures in Preservation Efforts"
          ]
        },
        {
          title: "Educational Approaches for Cultural Heritage Preservation",
          morningSession: [
            "Innovative Educational Approaches: Experiential Learning and Community Engagement",
            "Workshop: Designing Culturally Responsive Curriculum Materials"
          ],
          afternoonSession: [
            "Integrating Cultural Heritage Across Subjects: Interdisciplinary Collaboration",
            "Digital Technologies for Cultural Heritage Preservation and Education"
          ]
        },
        {
          title: "Cultural Diversity and Inclusivity",
          morningSession: [
            "Celebrating Cultural Diversity: Promoting Inclusivity in Cultural Heritage Preservation",
            "Guest Speaker: Community Engagement and Indigenous Perspectives"
          ],
          afternoonSession: [
            "Interfaith Dialogue and Cultural Exchange: Fostering Mutual Understanding",
            "Workshop: Designing Inclusive Educational Activities and Events"
          ]
        },
        {
          title: "Sustainable Development and Policy Advocacy",
          morningSession: [
            "Cultural Heritage and Sustainable Development",
            "Policy Frameworks and International Initiatives for Cultural Heritage Preservation"
          ],
          afternoonSession: [
            "Advocacy Strategies: Mobilizing Communities and Stakeholders",
            "Group Project Planning: Developing Advocacy Campaigns and Policy Recommendations"
          ]
        },
        {
          title: "Community Engagement and Action",
          morningSession: [
            "Community-Based Conservation Initiatives: Empowering Local Stakeholders",
            "Workshop: Engaging Communities in Cultural Heritage Preservation Projects"
          ],
          afternoonSession: [
            "Final Project Presentations",
            "Closing Ceremony and Certificate Distribution",
            "Reflection and Feedback"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/school-education/101.jpg',
      name: 'Project-Based Learning and Non-Formal Education for Student Engagement and Motivation',
      preInfo: "'Project-Based Learning and Non-Formal Education for Student Engagement and Motivation' is an innovative course designed to empower educators with the knowledge, skills, and strategies to enhance student engagement and motivation through project-based learning and non-formal education approaches. Aligned with the objectives and priorities of the Erasmus+ Programme, this course aims to transform teaching and learning by providing educators with effective tools and methodologies to foster creativity, critical thinking, and active participation among students.In today's fast-paced and interconnected world, traditional teaching methods often fail to engage and motivate students effectively. By embracing project-based learning and non-formal education approaches, educators can create dynamic and student-centered learning environments that empower students to take ownership of their learning, explore their interests, and develop essential skills for success in the 21st century.",
      cost: '80 €/Day',
      language: 'English',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya', 'Bitola'],
      description: [
        "This dynamic course is designed for educators seeking to revitalize their teaching practice and enhance student engagement and motivation through innovative pedagogical approaches. Through a combination of interactive workshops, experiential learning activities, case studies, and collaborative projects, participants will explore the principles and practices of project-based learning and non-formal education and learn how to apply them effectively in their classrooms.",

        "Participants will learn how to design and implement engaging and meaningful projects that address real-world problems and challenges, integrate cross-curricular content, and promote collaboration, creativity, and critical thinking skills. They will also explore a variety of non-formal education methodologies, such as experiential learning, outdoor education, and adventure-based learning, and learn how to incorporate them into their teaching practice to enhance student motivation and engagement.",

        "This course is suitable for educators working in diverse educational settings who wish to revitalize their teaching practice, engage students more effectively, and promote active and experiential learning experiences, aligning with the objectives and priorities of the Erasmus+ Programme."
      ],
      objectives: [
        "Understand the principles and benefits of project-based learning and non-formal education for student engagement and motivation and their alignment with the objectives of the Erasmus+ Programme.",

        "Develop knowledge and skills in designing and implementing project-based learning experiences that foster student creativity, critical thinking, and collaboration.",

        "Explore a variety of non-formal education methodologies, such as experiential learning, outdoor education, and adventure-based learning, and learn how to incorporate them into their teaching practice.",

        "Learn strategies for integrating cross-curricular content, real-world problems, and authentic assessment into project-based learning experiences to enhance student engagement and motivation.",

        "Gain insights into effective classroom management strategies, facilitation techniques, and reflective practices for supporting student learning and engagement in project-based and non-formal education settings.",

        "Collaborate with peers to develop and share project-based learning and non-formal education resources, lesson plans, and best practices, fostering a culture of collaboration and knowledge sharing among educators.",

        "Reflect on their own teaching practice and identify areas for growth and improvement in promoting student engagement and motivation through project-based learning and non-formal education approaches.",

        "Develop a personalized action plan for integrating project-based learning and non-formal education methodologies into their teaching practice, setting clear goals, objectives, and strategies for implementation."
      ],
      methodology: [
        "Interactive workshops and seminars: Participants will engage in interactive workshops and seminars led by experienced educators and experts in project-based learning and non-formal education. They will explore key concepts, strategies, and best practices, and participate in hands-on activities and discussions to deepen their understanding and develop practical skills.",

        "Experiential learning activities: Participants will engage in experiential learning activities to experience firsthand the principles and practices of project-based learning and non-formal education. They will participate in outdoor education experiences, team-building activities, and adventure-based learning challenges to develop teamwork, problem-solving, and leadership skills.",

        "Collaborative projects: Participants will work collaboratively on project-based learning and non-formal education projects that address real-world problems and challenges. They will engage in project planning, implementation, and reflection, and develop project-based learning resources, lesson plans, and assessment tools to support student learning and engagement.",

        "Reflection and action planning: Participants will engage in reflection and action planning activities to apply their learning to their teaching practice. They will reflect on their experiences, successes, and challenges, and identify areas for growth and improvement in promoting student engagement and motivation through project-based learning and non-formal education approaches. They will develop personalized action plans for integrating project-based learning and non-formal education methodologies into their teaching practice, setting clear goals, objectives, and strategies for implementation."
      ],
      assesmentImplementation: [
        "Authentic assessment: Participants will develop and implement authentic assessment methods to evaluate student learning and engagement in project-based learning and non-formal education experiences. They will design performance tasks, portfolios, presentations, and reflections that assess students' ability to apply knowledge and skills in real-world contexts and demonstrate their understanding and creativity.",

        "Peer feedback and evaluation: Participants will provide feedback to their peers on their project-based learning and non-formal education projects and receive feedback in return. They will engage in peer reviews, peer evaluations, and peer coaching to support each other's growth and development as educators and promote a culture of collaboration and continuous improvement.",

        "Self-reflection and self-assessment: Participants will engage in self-reflection and self-assessment activities to evaluate their own teaching practice and identify areas for growth and improvement. They will set personal goals, track their progress, and adjust their strategies based on feedback and reflection to enhance their effectiveness as educators."
      ],
      dailyProgram: [
        {
          title: "Introduction to Project-Based Learning and Non-Formal Education",
          morningSession: [
            "Welcome and Course Overview",
            "Workshop: Introduction to Project-Based Learning Principles and Practices"
          ],
          afternoonSession: [
            "Experiential Learning Activity: Outdoor Education Experience",
            "Collaborative Project Planning: Designing a Project-Based Learning Experience"
          ]
        },
        {
          title: "Designing Engaging Projects for Student Learning",
          morningSession: [
            "Workshop: Designing Engaging Project-Based Learning Experiences",
            "Seminar: Exploring Non-Formal Education Methodologies and Approaches"
          ],
          afternoonSession: [
            "Experiential Learning Activity: Adventure-Based Learning Challenge",
            "Collaborative Project Development: Refining Project Plans and Objectives"
          ]
        },
        {
          title: "Integrating Cross-Curricular Content and Assessment",
          morningSession: [
            "Workshop: Integrating Cross-Curricular Content into Project-Based Learning",
            "Seminar: Authentic Assessment Methods for Project-Based Learning"
          ],
          afternoonSession: [
            "Collaborative Project Implementation: Implementing Project-Based Learning Experiences",
            "Peer Feedback and Evaluation: Providing Constructive Feedback on Project Plans"
          ]
        },
        {
          title: "Promoting Student Engagement and Motivation",
          morningSession: [
            "Workshop: Fostering Student Engagement and Motivation in Project-Based Learning",
            "Seminar: Building Relationships and Rapport with Students"
          ],
          afternoonSession: [
            "Experiential Learning Activity: Team-Building Exercise",
            "Reflective Practice: Reflecting on Strategies for Promoting Student Engagement"
          ]
        },
        {
          title: "Reflection and Action Planning",
          morningSession: [
            "Action Planning: Developing Personalized Action Plans for Implementation",
            "Seminar: Strategies for Sustaining Engagement and Motivation Over Time"
          ],
          afternoonSession: [
            "Peer Sharing and Celebration: Sharing Successes and Challenges with Peers",
            "Closing Remarks and Course Evaluation"
          ]
        }
      ],
      isCertificated: false
    },
  ]

  getSchoolEducation() {
    return this.schoolEducations;
  }
}
