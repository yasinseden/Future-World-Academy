import { Injectable } from '@angular/core';
import { EducationModel } from '../../models/education.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {

  constructor() { }

  // **************************************************
  // school Education data and observable begin
  schoolEducations: EducationModel[] = [
    {
      img: '../assets/images/school-education/2148630370.jpg',
      name: 'Preserving Cultural Heritage: Educating for Identity, Diversity, and Sustainability',
      preInfo: 'Welcome to the captivating journey of "Preserving Cultural Heritage: Educating for Identity, Diversity, and Sustainability." In a world brimming with vibrant cultures and rich histories, the preservation and celebration of cultural heritage stand as pillars for nurturing individual identity, embracing diversity, and ensuring a sustainable future. This course invites you to delve into the captivating tapestry of cultural heritage, where we explore its profound significance, the hurdles it faces, and the indispensable role education plays in its preservation and promotion.',
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
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
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
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
      isCertificated: true
    },

    {
      img: '../assets/images/school-education/21.jpg',
      name: 'Promoting Environmental Sustainability in Education',
      preInfo: "'Promoting Environmental Sustainability in Education' is a transformative course aimed at equipping educators with the knowledge, skills, and strategies to integrate environmental sustainability principles into teaching practices and school cultures. Aligned with the objectives and priorities of the Erasmus+ Programme, this course seeks to enhance the quality and relevance of education and training, promote sustainable development, and empower learners to become responsible global citizens. By fostering environmental literacy and stewardship, educators can inspire future generations to safeguard our planet and create a more sustainable world. Did you know that according to the United Nations Educational, Scientific and Cultural Organization(UNESCO), education is a key driver of sustainable development, enabling individuals and communities to understand the interconnectedness of environmental, social, and economic issues? By integrating environmental sustainability into education, we can empower learners to take action and contribute to building a more resilient and sustainable future for all.",
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya', 'Bitola'],
      description: [
        "This dynamic course is designed for educators across all levels and disciplines who are passionate about integrating environmental sustainability principles into their teaching and learning practices. Through a combination of theoretical insights, practical workshops, case studies, and hands-on activities, participants will explore key concepts such as ecological literacy, sustainable living, environmental justice, and climate action.",

        "Participants will learn how to develop interdisciplinary, place-based curriculum units that address local environmental challenges and foster critical thinking, creativity, and collaboration among students. They will also explore strategies for greening school operations, engaging the school community, and promoting environmental stewardship beyond the classroom.",

        "This course is particularly relevant for educators who wish to inspire and empower students to become active agents of positive change in their communities and contribute to building a more sustainable and equitable world for future generations."
      ],
      objectives: [
        "Understand the principles and concepts of environmental sustainability and their relevance to education, including the interconnectedness of environmental, social, and economic systems.",
        "Develop ecological literacy and a deep understanding of local and global environmental issues, such as climate change, biodiversity loss, and resource depletion.",
        "Explore innovative teaching and learning approaches for integrating environmental sustainability into the curriculum, including project-based learning, inquiry-based learning, and outdoor education.",
        "Learn how to develop interdisciplinary, place-based curriculum units that address local environmental challenges and promote environmental stewardship.",
        "Gain insights into strategies for greening school operations, including energy efficiency, waste reduction, and sustainable procurement practices.",
        "Explore ways to engage the school community, including students, parents, staff, and local stakeholders, in environmental sustainability initiatives and action projects."
      ],
      methodology: [
        "Interactive workshops and experiential learning: Participants will engage in interactive workshops, hands-on activities, and experiential learning opportunities to deepen their understanding of environmental sustainability concepts and practices. They will have the opportunity to explore real-world environmental issues, conduct field investigations, and collaborate on action projects.",

        "Case studies and best practices: Case studies and examples of successful environmental sustainability initiatives in educational settings will be presented and analyzed to inspire and inform participants' own teaching practices and school-wide initiatives. Participants will learn from real-world examples of effective curriculum integration, community engagement, and sustainability leadership.",

        "Project-based learning and inquiry-based learning: Participants will explore project-based learning and inquiry-based learning approaches as effective means of integrating environmental sustainability into the curriculum. They will learn how to design and facilitate hands-on, inquiry-driven projects that engage students in authentic investigations of local environmental issues, fostering critical thinking, problem-solving, and creativity.",

        "Implementation: Participants will design and implement interdisciplinary, project-based learning units that address local environmental challenges and incorporate scientific inquiry, data collection, analysis, and interpretation. They will guide students through the process of identifying research questions, conducting investigations, and communicating their findings to authentic audiences.",

        "Outdoor education and environmental field studies: Participants will explore the benefits of outdoor education and environmental field studies for enhancing environmental literacy and fostering a deeper connection to nature. They will learn how to design and facilitate outdoor learning experiences that engage students in hands-on exploration, observation, and reflection in natural environments.",

        "Implementation: Participants will plan and lead outdoor learning experiences, such as nature walks, field trips, and ecological field studies, that provide opportunities for students to observe and interact with local ecosystems, biodiversity, and natural phenomena. They will integrate field-based observations and data collection into their curriculum units, fostering a sense of wonder, curiosity, and appreciation for the natural world."
      ],
      assesmentImplementation: [
        "Performance-based assessment: Participants will design performance-based assessments that allow students to demonstrate their understanding of environmental sustainability concepts and apply their knowledge and skills in real-world contexts. Assessments may include project presentations, environmental action projects, portfolio artifacts, and performance tasks that require students to apply critical thinking, creativity, and problem-solving skills.",

        "Authentic assessment: Participants will develop authentic assessment tasks that align with real-world environmental challenges and engage students in meaningful learning experiences. Authentic assessments may involve real-world problem-solving, community engagement, and action projects that address local environmental issues and contribute to positive change in the community.",

        "Reflection and self-assessment: Participants will engage students in reflection and self-assessment activities to promote metacognitive awareness and deepen their understanding of environmental sustainability concepts and practices. Students will have opportunities to reflect on their learning, set goals for improvement, and assess their progress towards environmental literacy and stewardship.",

        "Peer assessment and feedback: Participants will incorporate peer assessment and feedback into their classroom practices to foster collaboration, communication, and teamwork skills. Students will provide constructive feedback to their peers on their environmental projects, presentations, and contributions to group activities, promoting a culture of peer support and accountability."
      ],
      dailyProgram: [
        {
          title: "Understanding Environmental Sustainability",
          morningSession: [
            "Welcome and Course Overview",
            "Introduction to Environmental Sustainability",
            "Key Concepts and Principles"
          ],
          afternoonSession: [
            "Workshop: Exploring Local Environmental Issues",
            "Case Study Analysis: Successful Environmental Sustainability Initiatives"
          ]
        },
        {
          title: "Integrating Sustainability into the Curriculum",
          morningSession: [
            "Curriculum Integration Strategies",
            "Project-Based Learning for Environmental Sustainability"
          ],
          afternoonSession: [
            "Designing Interdisciplinary Curriculum Units",
            "Peer Collaboration and Feedback"
          ]
        },
        {
          title: "Outdoor Education and Field Studies",
          morningSession: [
            "Benefits of Outdoor Education",
            "Planning Outdoor Learning Experiences"
          ],
          afternoonSession: [
            "Field Trip Preparation and Safety",
            "Field Study Techniques and Data Collection"
          ]
        },
        {
          title: "Engaging the School Community",
          morningSession: [
            "Strategies for Engaging Students in Sustainability Initiatives",
            "Building Partnerships with Parents and Community Members"
          ],
          afternoonSession: [
            "Collaborative Action Planning",
            "Community Outreach and Advocacy"
          ]
        },
        {
          title: "Implementing Sustainable Practices",
          morningSession: [
            "Greening School Operations",
            "Sustainability Leadership and Advocacy"
          ],
          afternoonSession: [
            "Action Plan Development",
            "Reflection and Closing Remarks"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/school-education/6957.jpg',
      name: 'Using Orienteering for Team Building and Problem-Solving Activities',
      preInfo: "'Using Orienteering for Team Building and Problem-Solving Activities' is an innovative course designed to explore the integration of orienteering techniques into team building and problem-solving activities. Aligned with the objectives and priorities of the Erasmus+ Programme, this course aims to promote collaboration, communication, and critical thinking skills among participants, fostering a sense of teamwork, resilience, and creativity. Did you know that orienteering is not only a fun outdoor activity but also a powerful tool for developing important life skills? By incorporating orienteering challenges into team building and problem-solving activities, educators can create engaging learning experiences that promote collaboration, decision-making, and spatial awareness.",
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya', 'Bitola'],
      description: [
        "This dynamic course is designed for educators who want to harness the potential of orienteering for team building and problem-solving in diverse settings, from classrooms to outdoor environments. Through a blend of theoretical insights, practical workshops, orienteering challenges, and debriefing sessions, participants will learn how to design and facilitate effective team building and problem-solving activities using orienteering techniques.",

        "Participants will explore a range of orienteering skills and strategies, including map reading, route planning, navigation, and decision-making under pressure. They will also learn how to create engaging orienteering courses tailored to specific learning objectives and participant needs, and how to debrief and reflect on orienteering experiences to maximize learning outcomes.",

        "This course is suitable for educators working in schools, youth organizations, outdoor education centers, and other educational settings who want to enhance their toolkit of experiential learning techniques and promote teamwork, problem-solving, and resilience among their students."
      ],
      objectives: [
        "Understand the principles and benefits of using orienteering for team building and problem-solving activities and their alignment with the objectives of the Erasmus+ Programme, including their emphasis on collaboration, communication, and critical thinking.",
        "Develop knowledge and skills in orienteering techniques, including map reading, route planning, navigation, and decision-making under pressure, and their application to team building and problem-solving activities.",
        "Learn how to design and facilitate engaging orienteering challenges tailored to specific learning objectives and participant needs, incorporating elements of teamwork, problem-solving, and creative thinking.",
        "Explore strategies for debriefing and reflecting on orienteering experiences to maximize learning outcomes, including identifying strengths, areas for improvement, and actionable insights for future practice.",
        "Gain insights into risk management, safety protocols, and ethical considerations for conducting orienteering activities in various settings, ensuring participant safety and well-being."
      ],
      methodology: [
        "Interactive workshops and practical exercises: Participants will engage in interactive workshops, practical exercises, and orienteering challenges to explore key concepts and strategies related to using orienteering for team building and problem-solving activities. They will have opportunities to develop practical skills, such as map reading, navigation, and decision-making, and to collaborate with peers on problem-solving tasks and orienteering challenges.",

        "Case studies and best practices: Case studies and examples of successful integration of orienteering into team building and problem-solving activities will be presented and analyzed to inspire and inform participants' own practice. Participants will learn from real-world examples of effective pedagogical design, facilitation, and assessment, and explore strategies for adapting these practices to their own contexts.",

        "Collaborative inquiry and peer feedback: Participants will engage in collaborative inquiry and peer feedback sessions to share their experiences, insights, and challenges related to using orienteering for team building and problem-solving activities. They will have opportunities to learn from each other's successes and failures, exchange feedback and support, and collaborate on solving common challenges and generating new ideas for innovative teaching and learning.",

        "Implementation: Participants will work in small groups to develop and refine their own orienteering-based team building and problem-solving activities, providing feedback and support to each other throughout the process. They will engage in peer review sessions, offering constructive feedback on their peers' activities and incorporating suggestions and insights into their own work.",

        "Reflective practice and continuous improvement: Participants will engage in reflective practice activities and self-assessment exercises to evaluate their progress and growth as educators using orienteering for team building and problem-solving activities. They will reflect on their successes, challenges, and lessons learned, identify areas for further development, and set goals for ongoing improvement and innovation.",

        "Implementation: Participants will keep reflective journals documenting their experiences, insights, and reflections throughout the course. They will engage in regular self-assessment activities, evaluating their progress toward their goals and identifying areas for refinement and enhancement. They will also participate in group reflections and discussions, sharing their reflections with peers and gaining new perspectives and insights."
      ],
      assesmentImplementation: [
        "Participants will design and develop their own orienteering-based team building and problem-solving activities, incorporating principles and techniques learned throughout the course. They will present their activities to the group for peer review and feedback, receiving constructive input on their design, implementation, and alignment with learning objectives.",

        "Participant feedback and evaluation: Participants will engage in orienteering challenges and problem-solving activities designed by their peers, providing feedback and evaluation based on predefined criteria. Feedback will focus on the effectiveness of the activity in promoting teamwork, problem-solving, and resilience, as well as participant engagement and enjoyment.",

        "Final project presentation and reflection: Participants will reflect on their learning and growth throughout the course, presenting their final projects to the group and sharing insights, challenges, and key takeaways. Presentations will be evaluated based on their clarity, coherence, creativity, and potential impact on teaching and learning."
      ],
      dailyProgram: [
        {
          title: "Introduction to Orienteering Principles",
          morningSession: [
            "Welcome and Course Overview",
            "Introduction to Orienteering Basics: Map Reading and Navigation Techniques"
          ],
          afternoonSession: [
            "Workshop: Orienteering Equipment and Safety Protocols",
            "Practical Exercise: Map Reading and Navigation Practice"
          ]
        },
        {
          title: "Team Building with Orienteering",
          morningSession: [
            "Understanding Team Building Principles",
            "Workshop: Designing Orienteering Challenges for Team Building"
          ],
          afternoonSession: [
            "Outdoor Activity: Team Orienteering Challenge",
            "Debriefing Session: Reflecting on Team Dynamics and Communication"
          ]
        },
        {
          title: "Problem-Solving with Orienteering",
          morningSession: [
            "Introduction to Problem-Solving Techniques",
            "Workshop: Integrating Orienteering into Problem-Solving Activities"
          ],
          afternoonSession: [
            "Outdoor Activity: Problem-Solving Orienteering Course",
            "Debriefing Session: Analyzing Strategies and Solutions"
          ]
        },
        {
          title: "Leadership Development through Orienteering",
          morningSession: [
            "Leadership Skills Development: Communication and Decision-Making",
            "Workshop: Leading Orienteering Expeditions"
          ],
          afternoonSession: [
            "Outdoor Activity: Leadership Orienteering Challenge",
            "Debriefing Session: Leadership Reflections and Insights"
          ]
        },
        {
          title: "Action Planning and Reflection",
          morningSession: [
            "Action Planning: Integrating Orienteering into Teaching Practice",
            "Workshop: Designing Orienteering-Based Lesson Plans"
          ],
          afternoonSession: [
            "Final Project Presentations: Sharing Lesson Plans and Goals",
            "Closing Remarks and Course Evaluation"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/school-education/20883.jpg',
      name: 'Understanding Cultural Diversity Fundamental Concepts for Educators',
      preInfo: "'Understanding Cultural Diversity: Key Concepts for Educators' is a comprehensive course designed to equip educators with the knowledge, skills, and strategies needed to effectively navigate cultural diversity in educational settings. Grounded in the principles of inclusive education and intercultural competence, this course aims to foster a deep understanding of cultural diversity, promote respect for different cultural perspectives, and enhance educators' ability to create inclusive learning environments where all students feel valued and supported. Aligned with the objectives of the Erasmus+ Programme, this course emphasizes the importance of promoting diversity, equity, and inclusion in education. By exploring key concepts, theories, and practical approaches to understanding cultural diversity, participants will gain insights into how to effectively address the needs of diverse student populations and create enriching educational experiences for all learners.",
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya', 'Bitola'],
      description: [
        "This course is designed for educators at all levels who are committed to creating inclusive and culturally responsive learning environments. Through a combination of theoretical sessions, interactive workshops, case studies, and reflective activities, participants will explore key concepts related to cultural diversity and develop practical strategies for promoting intercultural understanding and cooperation in their classrooms.",

        "Participants will examine topics such as cultural identity, cultural competence, cultural sensitivity, and cultural responsiveness, gaining a deeper understanding of how cultural factors influence teaching and learning. They will learn how to recognize and address cultural biases and stereotypes, build positive relationships with students from diverse backgrounds, and integrate diverse perspectives into their teaching practice.",
      ],
      objectives: [
        "Gain a deeper understanding of cultural diversity and its impact on teaching and learning.",
        "Explore key concepts related to cultural identity, cultural competence, and intercultural communication.",
        "Recognize and address cultural biases, stereotypes, and misconceptions in educational settings.",
        "Develop practical strategies for creating inclusive and culturally responsive learning environments.",
        "Build positive relationships with students from diverse cultural backgrounds and promote a sense of belonging.",
        "Integrate diverse perspectives and experiences into curriculum design and instructional practices.",
        "Foster intercultural understanding, empathy, and cooperation among students.",
        "Reflect on one's own cultural assumptions and biases and their implications for teaching and learning."
      ],
      methodology: [
        "Theoretical Sessions: Participants will engage in theoretical sessions that provide an overview of key concepts related to cultural diversity, cultural competence, and inclusive education. These sessions will include presentations, discussions, and case studies to deepen participants' understanding of theoretical frameworks and their application in educational contexts.",

        "Interactive Workshops: Participants will participate in interactive workshops where they will explore practical strategies for promoting cultural competence and inclusivity in their classrooms. These workshops will include role-playing exercises, scenario-based discussions, and collaborative activities aimed at building participants' skills and confidence in addressing cultural diversity.",

        "Case Studies: Participants will analyze case studies and real-life scenarios to examine how cultural factors impact teaching and learning. Through guided discussions and reflective activities, participants will explore challenges and opportunities related to cultural diversity in educational settings and develop strategies for addressing them effectively.",

        "Reflective Activities: Participants will engage in reflective activities throughout the course to examine their own cultural assumptions, biases, and teaching practices. These activities may include journaling, self-assessment tools, and guided reflections aimed at promoting self-awareness and continuous professional growth."
      ],
      assesmentImplementation: [
        "Reflective Journal: Participants will maintain a reflective journal throughout the course, documenting their insights, experiences, and reflections on key concepts and learning activities. Journals will be reviewed periodically by instructors to assess participants' engagement and depth of reflection.",

        "Case Study Analysis: Participants will analyze and discuss case studies related to cultural diversity in education, applying theoretical frameworks and practical strategies discussed in the course. Case study analyses may be conducted individually or in small groups, with presentations or written reports to demonstrate understanding and application of concepts.",

        "Peer Feedback: Participants will provide feedback to their peers on their teaching practices, lesson plans, and cultural responsiveness strategies. Peer feedback will be used to support collaborative learning, provide constructive criticism, and promote a culture of continuous improvement among participants.",

        "Final Project: Participants will complete a final project that demonstrates their understanding and application of key concepts related to cultural diversity in education. Final projects may take the form of a curriculum unit, teaching portfolio, action plan for promoting cultural competence in their school or classroom, or research paper on a relevant topic.",
      ],
      dailyProgram: [
        {
          title: "Introduction to Cultural Diversity",
          morningSession: [
            "Welcome and Course Overview",
            "Understanding Cultural Diversity: Definitions and Key Concepts"
          ],
          afternoonSession: [
            "Workshop: Exploring Personal Cultural Identity",
            "Case Study Analysis: Cultural Diversity in Educational Settings"
          ]
        },
        {
          title: "Cultural Competence and Intercultural Communication",
          morningSession: [
            "Seminar: Developing Cultural Competence as Educators",
            "Workshop: Enhancing Intercultural Communication Skills"
          ],
          afternoonSession: [
            "Role-Playing Exercise: Navigating Cross-Cultural Interactions",
            "Reflective Activity: Examining Cultural Biases and Stereotypes"
          ]
        },
        {
          title: "Promoting Inclusive Learning Environments",
          morningSession: [
            "Seminar: Creating Inclusive Classrooms for All Learners",
            "Workshop: Strategies for Addressing Cultural Bias and Discrimination"
          ],
          afternoonSession: [
            "Group Discussion: Implementing Culturally Responsive Teaching Practices",
            "Case Study Analysis: Culturally Responsive Curriculum Design"
          ]
        },
        {
          title: "Fostering Intercultural Understanding",
          morningSession: [
            "Seminar: Promoting Intercultural Understanding and Cooperation",
            "Workshop: Building Positive Relationships Across Cultures"
          ],
          afternoonSession: [
            "Collaborative Activity: Designing Intercultural Learning Experiences",
            "Reflection and Feedback: Sharing Insights and Experiences"
          ]
        },
        {
          title: "Integration and Application",
          morningSession: [
            "Seminar: Integrating Cultural Diversity Across the Curriculum",
            "Final Project Development: Applying Learning to Practice"
          ],
          afternoonSession: [
            "Final Project Presentations: Sharing Strategies and Insights",
            "Closing Ceremony and Certificate Distribution"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/school-education/60051.jpg',
      name: 'Empowering Education: Integrating STEM and STEAM for 21st Century Learning',
      preInfo: '"Empowering Education: Integrating STEM and STEAM for 21st Century Learning" is a cutting-edge course meticulously crafted to empower educators with a comprehensive toolkit aimed at seamlessly infusing STEM (Science, Technology, Engineering, and Mathematics) and STEAM (Science, Technology, Engineering, Arts, and Mathematics) education into their pedagogical repertoire. Rooted in the visionary objectives of the Erasmus+ Programme, this course serves as a beacon for educators, highlighting the paramount importance of nurturing creativity, critical thinking, and innovation in students through dynamic interdisciplinary learning experiences.',
      cost: '80 €/Day',
      language: '',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya', 'Bitola'],
      description: [
        "This transformative course is meticulously tailored for educators who ardently champion the preparation of students for the dynamic challenges and boundless opportunities of the 21st century. Through an immersive journey, participants will delve deep into the foundational principles and cutting-edge practices of STEM and STEAM education. From mastering the art of curriculum design to implementing captivating interdisciplinary projects, educators will emerge equipped with a diverse array of strategies to ignite passion and curiosity in their students.",

        "Throughout the course, participants will be guided in discovering innovative methodologies to foster inquiry-based learning, cultivate robust problem-solving skills, and instill a culture of collaboration within their classrooms. By leveraging the symbiotic relationship between STEM and the arts, educators will unlock the potential to nurture well-rounded individuals poised to thrive in an ever-evolving global landscape. Moreover, this course goes beyond theory, providing practical insights and real-world examples to empower educators to translate their newfound knowledge into impactful classroom practices. With a focus on experiential learning and peer collaboration, participants will embark on a transformative journey, leaving with a refreshed perspective and a wealth of actionable strategies to elevate their teaching practice to new heights."
      ],
      objectives: [
        "Understand the concepts and principles of STEM and STEAM education and their relevance in preparing students for future careers and challenges.",
        "Explore strategies for integrating STEM and STEAM disciplines into their curriculum to promote interdisciplinary learning and connections between subject areas.",
        "Learn how to design and implement engaging STEM and STEAM projects that foster creativity, critical thinking, and innovation in students.",
        "Develop the skills and confidence to facilitate inquiry-based learning, problem-solving, and collaborative teamwork among students.",
        "Explore the use of digital technologies and tools to enhance STEM and STEAM learning experiences and promote digital literacy and fluency.",
        "Collaborate with colleagues to share best practices, resources, and ideas for integrating STEM and STEAM education into their teaching practice and school culture.",
      ],
      methodology: [
        "Interactive Workshops: Participants will engage in interactive workshops where they will explore the principles and practices of STEM and STEAM education. Through hands-on activities, demonstrations, and group discussions, participants will gain practical insights into designing and delivering engaging interdisciplinary projects.",

        "Project-Based Learning: Participants will work on collaborative, project-based learning activities where they will design and develop STEM and STEAM projects for their own classrooms or educational contexts. They will apply their knowledge and skills to create innovative and engaging learning experiences that integrate multiple disciplines and promote inquiry-based learning and problem-solving skills.",

        "Digital Tools and Technologies: Participants will explore the use of digital technologies and tools to enhance STEM and STEAM learning experiences. They will learn how to leverage digital platforms, simulations, coding tools, and multimedia resources to support inquiry-based learning, experimentation, and exploration in STEM and STEAM disciplines.",
      ],
      assesmentImplementation: [
        "Project Assessment: Participants will present their STEM and STEAM projects to their peers and receive feedback on their design, implementation, and outcomes. They will demonstrate their ability to integrate multiple disciplines, promote inquiry-based learning, and engage students in collaborative problem-solving and innovation.",

        "Reflection and Self-Assessment: Participants will engage in reflection activities to evaluate their own learning and growth throughout the course. They will assess their progress towards achieving the learning objectives and identify areas for further development and improvement in their practice.",

        "Peer Feedback: Participants will provide feedback to their peers on their STEM and STEAM projects and presentations. They will offer constructive feedback and suggestions for improvement based on their own experiences and perspectives, fostering a culture of collaboration and continuous improvement.",
      ],
      dailyProgram: [
        {
          title: "Introduction to STEM and STEAM Education",
          morningSession: [
            "Welcome and Course Introduction",
            "Workshop: Understanding STEM and STEAM Education"
          ],
          afternoonSession: [
            "Project-Based Learning Activity: Designing a STEM or STEAM Project",
            "Digital Tools Exploration: Introduction to Digital Technologies for STEM and STEAM"
          ]
        },
        {
          title: "Integrating STEM and STEAM Disciplines",
          morningSession: [
            "Workshop: Strategies for Integrating STEM and STEAM Disciplines",
            "Project-Based Learning Activity: Developing Interdisciplinary Connections"
          ],
          afternoonSession: [
            "Digital Tools Exploration: Coding and Robotics for STEM and STEAM Education",
            "Peer Collaboration: Sharing Project Ideas and Providing Feedback"
          ]
        },
        {
          title: "Inquiry-Based Learning and Problem-Solving",
          morningSession: [
            "Workshop: Facilitating Inquiry-Based Learning in STEM and STEAM",
            "Project-Based Learning Activity: Implementing Inquiry-Based Projects"
          ],
          afternoonSession: [
            "Digital Tools Exploration: Simulation and Modeling for STEM and STEAM Education",
            "Peer Collaboration: Collaborative Problem-Solving and Innovation"
          ]
        },
        {
          title: "Creativity and Innovation in STEM and STEAM",
          morningSession: [
            "Workshop: Fostering Creativity and Innovation in STEM and STEAM",
            "Project-Based Learning Activity: Promoting Creative Expression"
          ],
          afternoonSession: [
            "Digital Tools Exploration: Multimedia and Visualization Tools for STEM and STEAM Education",
            "Peer Collaboration: Sharing Creative Projects and Ideas"
          ]
        },
        {
          title: "Reflection and Integration",
          morningSession: [
            "Workshop: Reflecting on STEM and STEAM Learning Experiences",
            "Action Planning: Developing Personalized Action Plans for STEM and STEAM Integration"
          ],
          afternoonSession: [
            "Peer Collaboration: Sharing Action Plans and Providing Feedback",
            "Closing Reflection and Certificate Distribution"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/school-education/empowering-youth.jpg',
      name: 'Empowering Youth through Sport: Strategies for Educational Success',
      preInfo: '"Empowering Youth through Sport: Strategies for Educational Success" is a transformative course designed to harness the power of sports-based youth development to promote educational success and holistic well-being. Aligned with the objectives of the Erasmus+ Programme, this course empowers educators, coaches, and youth leaders to leverage sports as a vehicle for positive youth development, fostering essential life skills, academic achievement, and personal growth. By integrating sports-based approaches into educational settings, participants can unlock the full potential of young people, nurturing their physical, cognitive, and socio-emotional development.',
      cost: '80 €/Day',
      language: 'Ebglish',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya', 'Bitola'],
      description: [
        "This course offers a comprehensive exploration of sports-based youth development strategies aimed at enhancing educational success. Through a blend of theoretical insights, practical workshops, and experiential learning activities, participants will gain a deep understanding of how sports can be used as a catalyst for positive change in the lives of young people. From promoting leadership and teamwork to fostering resilience and self-confidence, sports-based youth development offers a holistic approach to education that transcends traditional classroom boundaries. Participants will learn how to design and implement effective sports programs that not only enhance academic achievement but also promote lifelong skills and values that young people can carry with them into adulthood."
      ],
      objectives: [
        "Understand the principles and theoretical frameworks of sports-based youth development.",
        "Explore the role of sports in promoting academic achievement, leadership, teamwork, and resilience among young people.",
        "Learn how to design and implement effective sports programs that align with educational objectives and youth development goals.",
        "Gain practical skills in coaching, mentoring, and facilitating sports-based activities for youth.",
        "Discover strategies for fostering positive youth-adult relationships and creating inclusive and supportive sports environments.",
        "Explore the impact of sports on holistic youth development, including physical, cognitive, and socio-emotional well-being.",
        "Reflect on personal experiences and insights to enhance their effectiveness as youth leaders, educators, and coaches.",
      ],
      methodology: [
        "Theoretical Insights: Explore key concepts and theoretical frameworks related to sports-based youth development through lectures, readings, and discussions.",

        "Practical Workshops: Engage in hands-on workshops and experiential learning activities to develop coaching, mentoring, and facilitation skills.",

        "Case Studies: Analyze real-world examples of successful sports-based youth development programs and initiatives.",

        "Group Projects: Collaborate with peers to design and present innovative sports programs tailored to specific educational settings and target populations.",

        "Reflection and Feedback: Reflect on personal experiences and receive constructive feedback from peers and facilitators to enhance professional practice.",
      ],
      assesmentImplementation: [
        "Project-Based Assessment: Develop and present a comprehensive sports-based youth development program proposal, including goals, objectives, activities, and evaluation strategies.",

        "Reflective Journals: Maintain a reflective journal throughout the course to document insights, challenges, and lessons learned.",

        "Peer Evaluation: Provide feedback to peers on their project proposals and presentations, focusing on strengths, areas for improvement, and actionable recommendations.",

        "Practical Demonstrations: Demonstrate coaching, mentoring, or facilitation skills through practical demonstrations or role-playing exercises.",

        "Final Reflection: Write a final reflection essay synthesizing key learnings and outlining personal and professional action steps for future implementation.",
      ],
      dailyProgram: [
        {
          title: "Foundations of Sports-Based Youth Development",
          morningSession: [
            "Welcome and Course Introduction",
            "Theoretical Frameworks of Sports-Based Youth Development"
          ],
          afternoonSession: [
            "Exploring the Impact of Sports on Educational Success",
            "Practical Workshop: Designing Effective Sports Programs for Youth"
          ]
        },
        {
          title: "Coaching and Mentoring for Positive Youth Development",
          morningSession: [
            "Coaching and Mentoring in Sports-Based Youth Development",
            "Hands-On Workshop: Developing Coaching and Mentoring Skills"
          ],
          afternoonSession: [
            "Case Studies: Best Practices in Coaching and Mentoring Youth Athletes",
            "Group Project: Designing a Coaching or Mentoring Plan for Youth Participants"
          ]
        },
        {
          title: "Teamwork, Leadership, and Character Development",
          morningSession: [
            "Promoting Teamwork and Leadership Through Sports",
            "Practical Workshop: Facilitating Team-Building Activities"
          ],
          afternoonSession: [
            "Character Development and Values Education in Sports",
            "Reflection and Feedback: Integrating Leadership and Character Development Into Sports Programs"
          ]
        },
        {
          title: "Resilience, Well-being, and Inclusion",
          morningSession: [
            "Building Resilience and Well-being Through Sports",
            "Hands-On Workshop: Addressing Mental Health and Well-being in Youth Sports"
          ],
          afternoonSession: [
            "Creating Inclusive and Supportive Sports Environments",
            "Case Studies: Strategies for Promoting Inclusion and Diversity in Youth Sports"
          ]
        },
        {
          title: "Implementation and Action Planning",
          morningSession: [
            "Implementation Strategies for Sports-Based Youth Development Programs",
            "Action Planning: Developing a Roadmap for Program Implementation"
          ],
          afternoonSession: [
            "Project Presentations: Sharing and Feedback",
            "Closing Ceremony: Certificate Presentation and Reflections on Learning"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/school-education/scout.jpg',
      name: 'Scout-Based Learning Adventures: Integrating Classroom Curriculum with Outdoor Exploration',
      preInfo: '"Scout-Based Learning Adventures: Integrating Classroom Curriculum with Outdoor Exploration" is a dynamic course designed to equip educators with innovative strategies to integrate outdoor experiences into classroom learning. Inspired by the principles of scouting and outdoor education, this course encourages educators to harness the power of nature as a dynamic learning environment to enhance students academic, social, and emotional development.',
      cost: '80 €/Day',
      language: '',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya', 'Bitola'],
      description: [
        "This course provides educators with practical tools and resources to design and implement scout-based learning adventures that seamlessly integrate with classroom curriculum. Through hands-on activities, outdoor expeditions, and collaborative projects, participants will learn how to leverage the natural world as a rich educational resource to engage students, foster curiosity, and promote experiential learning. By blending traditional teaching methods with outdoor exploration, educators will inspire a sense of wonder, curiosity, and stewardship for the natural world in their students."
      ],
      objectives: [
        "Understand the principles of scout-based learning and its benefits for student development.",
        "Learn how to integrate outdoor experiences into classroom curriculum to enhance learning outcomes.",
        "Explore practical strategies for planning and implementing scout-based learning adventures across subject areas.",
        "Develop skills in using outdoor environments as dynamic learning spaces to engage students in hands-on, experiential learning.",
        "Gain confidence in facilitating outdoor expeditions and fostering meaningful connections between classroom learning and real-world experiences.",
        "Foster students' curiosity, creativity, and problem-solving skills through scout-based learning activities.",
        "Promote environmental stewardship and a sense of connection to the natural world among students.",
      ],
      methodology: [
        "Theoretical Framework: Explore key concepts and theories related to scout-based learning, outdoor education, and environmental stewardship.",

        "Practical Workshops: Engage in hands-on activities, outdoor expeditions, and scout-based learning adventures to experience firsthand the benefits of outdoor exploration.",

        "Curriculum Integration: Identify opportunities to align scout-based learning adventures with classroom curriculum across subject areas.",

        "Outdoor Skills Training: Learn essential outdoor skills and safety practices to facilitate safe and enjoyable outdoor experiences for students.",

        "Collaborative Projects: Work collaboratively with peers to design and implement scout-based learning activities and projects that address curriculum standards and learning objectives.",

        "Reflective Practice: Reflect on personal experiences, insights, and challenges related to scout-based learning and outdoor education, and consider implications for teaching practice.",

        "Peer Feedback: Provide and receive constructive feedback on lesson plans, outdoor activities, and classroom experiences to enhance scout-based learning practice.",
      ],
      assesmentImplementation: [
        "Lesson Plan Development: Design a scout-based learning adventure that integrates outdoor exploration with classroom curriculum, incorporating learning objectives, activities, and assessment strategies.",

        "Outdoor Expedition: Lead a scout-based learning adventure in an outdoor setting, assessing student engagement, participation, and learning outcomes.",

        "Reflective Journal: Maintain a reflective journal documenting personal experiences, insights, and reflections on scout-based learning practice and outdoor education.",

        "Peer Evaluation: Provide feedback to peers on their lesson plans, outdoor activities, and teaching practice, offering constructive suggestions for improvement and highlighting strengths.",

        "Final Project: Create a culminating project that demonstrates understanding of key concepts and strategies for integrating scout-based learning adventures into classroom curriculum.",
      ],
      dailyProgram: [
        {
          title: "Introduction to Scout-Based Learning",
          morningSession: [
            "Welcome and Course Overview",
            "Understanding Scout-Based Learning: Principles and Benefits"
          ],
          afternoonSession: [
            "Exploring Outdoor Education: Connecting Classroom Learning with Nature",
            "Introduction to Outdoor Skills and Safety Practices"
          ]
        },
        {
          title: "Planning Scout-Based Learning Adventures",
          morningSession: [
            "Curriculum Integration: Identifying Opportunities for Outdoor Exploration in Classroom Curriculum",
            "Designing Scout-Based Learning Adventures: Setting Learning Objectives and Activities"
          ],
          afternoonSession: [
            "Practical Workshop: Planning and Preparing for Outdoor Expeditions",
            "Outdoor Skills Training: Navigation, Shelter Building, and Campfire Cooking"
          ]
        },
        {
          title: "Implementing Scout-Based Learning Adventures",
          morningSession: [
            "Leading Outdoor Expeditions: Facilitating Meaningful Learning Experiences in Nature",
            "Engaging Students in Scout-Based Learning Activities: Hands-on Experiences and Experiential Learning"
          ],
          afternoonSession: [
            "Collaborative Project: Designing and Testing Scout-Based Learning Activities",
            "Case Studies: Analyzing Successful Examples of Scout-Based Learning Adventures"
          ]
        },
        {
          title: "Assessing Learning Outcomes and Reflective Practice",
          morningSession: [
            "Assessing Student Learning: Strategies for Evaluating Outdoor Experiences and Learning Outcomes",
            "Reflective Practice: Journaling and Peer Feedback on Outdoor Expeditions"
          ],
          afternoonSession: [
            "Peer Evaluation: Providing Constructive Feedback on Lesson Plans and Teaching Practice",
            "Action Planning: Setting Goals for Continued Growth and Development in Scout-Based Learning"
          ]
        },
        {
          title: "Culminating Projects and Next Steps",
          morningSession: [
            "Final Project Presentations: Sharing and Reflecting on Scout-Based Learning Adventures",
            "Course Evaluation and Closing Remarks"
          ],
          afternoonSession: [
            "Networking and Collaboration: Building a Community of Practice for Scout-Based Learning Educators",
            "Action Planning: Identifying Next Steps for Integrating Scout-Based Learning into Teaching Practice"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/school-education/1.jpg',
      name: 'Cultivating Cultural Sensitivity: Enhancing School-Parent Communication',
      preInfo: "Welcome to 'Cultivating Cultural Sensitivity: Enhancing School-Parent Communication,'F a course designed to empower educators with the tools and insights needed to foster cultural sensitivity in their interactions with parents from diverse backgrounds. In today's interconnected world, effective communication between schools and parents is vital for supporting student success. By embracing cultural sensitivity, educators can establish trust, strengthen relationships, and create inclusive learning environments where every family feels valued and respected.",
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya', 'Bitola'],
      description: [
        "Dive into the heart of cultural sensitivity with this transformative course, which delves into the nuances of school-parent communication across diverse cultural landscapes. Through engaging discussions and practical strategies, participants will explore the pivotal role of cultural sensitivity in fostering understanding and collaboration between schools and parents. From recognizing and respecting cultural differences to overcoming language barriers, educators will learn how to adapt their communication styles to effectively engage with families from various cultural backgrounds.",

        "Interactive workshops, real-life case studies, and role-playing exercises will provide educators with hands-on experience in navigating cross-cultural communication challenges. By honing their cultural competence, educators will be equipped to establish positive and meaningful partnerships with parents, ultimately enhancing student learning and well-being. Join us on this enriching journey as we cultivate a culture of inclusivity and mutual respect in school-parent relationships.",
      ],
      objectives: [
        "Understand the significance of cultural sensitivity in school - parent communication and its impact on student success.",
        "Recognize cultural differences and diversity within the school community.",
        "Develop strategies for fostering trust, respect, and collaboration with parents from diverse cultural backgrounds.",
        "Learn effective communication techniques for bridging language barriers and promoting understanding.",
        "Explore culturally responsive approaches to parent engagement and involvement in their children's education.",
        "Identify potential challenges and barriers to effective cross- cultural communication and develop strategies for overcoming them.",
        "Reflect on personal biases and assumptions and cultivate a mindset of cultural humility and openness.",
        "Create an action plan for implementing culturally sensitive communication practices in their interactions with parents.",
      ],
      methodology: [
        "Understanding Cultural Sensitivity: Explore the concept and importance of cultural sensitivity in school-parent communication.",

        "Recognizing Cultural Diversity: Learn to recognize and appreciate cultural differences and diversity within the school community.",

        "Effective Communication Strategies: Develop practical communication strategies for engaging with parents from diverse cultural backgrounds.",

        "Bridging Language Barriers: Explore techniques for overcoming language barriers and promoting effective communication.",

        "Culturally Responsive Parent Engagement: Learn approaches for fostering meaningful and inclusive parent engagement in their children's education.",

        "Addressing Challenges: Identify common challenges and barriers to cross-cultural communication and develop strategies for addressing them.",

        "Reflective Practice: Engage in self-reflection and peer feedback to enhance cultural awareness and sensitivity.",

        "Action Planning: Develop an action plan for implementing culturally sensitive communication practices in participants' professional practice."
      ],
      assesmentImplementation: [],
      dailyProgram: [
        {
          title: "Understanding Cultural Sensitivity",
          morningSession: [
            "Introduction to Cultural Sensitivity in School-Parent Communication",
            "Importance and Benefits of Culturally Responsive Practices"
          ],
          afternoonSession: [
            "Exploring Cultural Diversity within the School Community",
            "Recognizing Implicit Bias and Stereotypes"
          ]
        },
        {
          title: "Effective Communication Strategies",
          morningSession: [
            "Building Trust and Rapport with Diverse Parents",
            "Culturally Appropriate Communication Styles and Etiquette"
          ],
          afternoonSession: [
            "Active Listening and Empathetic Communication Techniques",
            "Role-Playing Scenarios: Applying Effective Communication Strategies"
          ]
        },
        {
          title: "Bridging Language Barriers",
          morningSession: [
            "Strategies for Overcoming Language Barriers in School-Parent Communication",
            "Utilizing Interpreters and Translation Services Effectively"
          ],
          afternoonSession: [
            "Culturally Sensitive Language Use and Translation Practices",
            "Interactive Workshops: Practicing Communication in Different Languages"
          ]
        },
        {
          title: "Culturally Responsive Parent Engagement",
          morningSession: [
            "Engaging Diverse Parents in Their Children's Education",
            "Involving Parents in School Decision-Making Processes"
          ],
          afternoonSession: [
            "Creating Inclusive Spaces for Parent Involvement and Participation",
            "Collaborative Projects: Co-creating Educational Resources with Parents"
          ]
        },
        {
          title: "Reflective Practice and Action Planning",
          morningSession: [
            "Reflective Journaling: Documenting Insights and Learnings",
            "Peer Feedback and Collaborative Reflection"
          ],
          afternoonSession: [
            "Developing an Action Plan for Implementing Culturally Sensitive Communication Practices",
            "Course Evaluation and Closing Remarks"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/school-education/2.jpg',
      name: 'Project-Based Learning: Engaging Students Through Inquiry and Exploration',
      preInfo: '"Project-Based Learning: Engaging Students Through Inquiry and Exploration" is a dynamic course designed to empower educators with the knowledge and skills to implement effective project-based learning (PBL) experiences in their classrooms. Grounded in the principles of inquiry and exploration, PBL offers students the opportunity to delve deeply into meaningful, real-world challenges, fostering creativity, critical thinking, collaboration, and communication skills. Aligned with the objectives of the Erasmus+ Programme, this course addresses the need for innovative approaches to education that promote active learning, student engagement, and 21st-century skills development. By equipping educators with practical strategies and tools for designing and facilitating PBL experiences, the course aims to inspire transformative teaching practices that prepare students for success in an ever-changing world.',
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya', 'Bitola'],
      description: [
        "This course is designed for educators across all subject areas and grade levels who are interested in implementing project-based learning in their classrooms. Participants will explore the key principles, methodologies, and best practices of PBL, gaining practical strategies and tools to design, implement, and assess PBL experiences that engage and inspire students.",

        "Understanding Project-Based Learning: Participants will gain an understanding of the core principles and characteristics of PBL, exploring how it differs from traditional instructional approaches and its potential benefits for student learning and motivation.",

        "Designing PBL Experiences: Participants will learn how to design authentic, inquiry-driven projects that align with curriculum standards and learning objectives. They will explore strategies for selecting and framing compelling driving questions, designing authentic assessments, and scaffolding student inquiry and exploration.",

        "Facilitating PBL: Participants will explore facilitation strategies and techniques for supporting student learning and inquiry throughout the PBL process. They will learn how to foster collaboration, critical thinking, and metacognitive skills, and how to effectively manage and assess student progress.",
      ],
      objectives: [
        "Understand the principles and benefits of project-based learning as an instructional approach.",
        "Design authentic, inquiry-driven projects that engage and motivate students.",
        "Facilitate student inquiry and exploration throughout the project-based learning process.",
        "Scaffold student learning and provide support as needed during project implementation.",
        "Assess student learning and growth in project-based learning environments using authentic assessment methods.",
        "Reflect on their own practice and identify areas for continued growth and development in project-based learning.",
      ],
      methodology: [
        "Interactive Workshops: Participants will engage in interactive workshops where they will explore the principles and methodologies of project-based learning. Through hands-on activities, case studies, and discussions, participants will deepen their understanding of PBL and begin to design their own projects.",

        "Design Studios: Participants will work in design studios to develop and refine their project ideas, receiving feedback and guidance from peers and instructors. They will collaborate with colleagues to brainstorm driving questions, develop project plans, and create assessment rubrics.",

        "Action Research Projects: Participants will have the opportunity to implement a project-based learning experience in their own classrooms and conduct action research to evaluate its effectiveness. They will collect data on student learning outcomes, engagement levels, and collaboration skills, and reflect on their experiences to inform future practice.",
      ],
      assesmentImplementation: [
        "Authentic Assessments: Participants will be assessed based on their engagement in workshops and design studios, the quality of their project proposals and implementation plans, and their reflections on their experiences with project-based learning. Assessments will focus on the application of knowledge and skills in designing and facilitating PBL experiences.",

        "Peer Feedback: Participants will engage in peer feedback activities, providing constructive feedback to their peers on their project proposals, design plans, and reflections. Peer feedback will promote collaboration and mutual learning among participants.",

        "Self-Reflection: Participants will engage in self-reflection activities, such as journaling and goal-setting exercises, to evaluate their own learning and growth throughout the course. Self-reflection will encourage metacognition and self-directed learning.",
      ],
      dailyProgram: [
        {
          title: "Understanding Project-Based Learning",
          morningSession: [
            "Welcome and Introduction to Project-Based Learning",
            "Workshop: Exploring the Principles and Benefits of PBL"
          ],
          afternoonSession: [
            "Design Studio: Brainstorming Project Ideas and Driving Questions",
            "Action Research Project: Planning for Implementation and Data Collection"
          ]
        },
        {
          title: "Designing Authentic Projects",
          morningSession: [
            "Workshop: Designing Authentic, Inquiry-Driven Projects",
            "Demonstrations: Creating Engaging Driving Questions and Authentic Assessments"
          ],
          afternoonSession: [
            "Design Studio: Developing Project Plans and Assessment Rubrics",
            "Peer Feedback Session: Reviewing and Providing Feedback on Project Proposals"
          ]
        },
        {
          title: "Facilitating Student Inquiry",
          morningSession: [
            "Workshop: Facilitating Student Inquiry and Exploration",
            "Case Study Analysis: Effective Facilitation Strategies for PBL"
          ],
          afternoonSession: [
            "Action Research Project: Implementing PBL in the Classroom",
            "Reflection and Goal-Setting: Identifying Challenges and Opportunities"
          ]
        },
        {
          title: "Scaffolding Learning and Providing Support",
          morningSession: [
            "Workshop: Scaffolding Learning and Providing Support in PBL",
            "Demonstrations: Differentiated Instruction and Individualized Support"
          ],
          afternoonSession: [
            "Action Research Project: Monitoring Student Progress and Providing Feedback",
            "Peer Collaboration and Problem-Solving: Addressing Challenges and Sharing Solutions"
          ]
        },
        {
          title: "Assessing Learning in PBL Environments",
          morningSession: [
            "Workshop: Authentic Assessment in Project-Based Learning",
            "Case Study Analysis: Assessing Student Learning and Growth"
          ],
          afternoonSession: [
            "Action Research Project: Reflecting on Student Learning Outcomes and Next Steps",
            "Closing Reflection and Certificate Distribution"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/school-education/3.jpg',
      name: 'Unlocking Inclusion: Fostering Diversity & Equity in Schools',
      preInfo: '"Unlocking Inclusion: Fostering Diversity & Equity in Schools" is a vital course aimed at equipping educators with the knowledge, skills, and strategies to create inclusive and equitable learning environments that honor diversity and promote social justice. Rooted in the objectives and priorities of the Erasmus+ Programme, this course seeks to enhance the quality and relevance of education and training, foster social cohesion and inclusion, and empower learners from diverse backgrounds to thrive and succeed. Did you know that according to UNESCO, education is a fundamental human right and a powerful tool for promoting social justice, equality, and inclusion? By addressing issues of diversity and equity in school communities, educators can help ensure that all students have access to high-quality education and opportunities for learning, regardless of their backgrounds, identities, or circumstances.',
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya', 'Bitola'],
      description: [
        "This transformative course is designed for educators who are committed to creating safe, supportive, and inclusive learning environments where every student feels valued, respected, and empowered to succeed. Through a combination of theoretical insights, practical strategies, case studies, and interactive activities, participants will explore key concepts such as cultural competence, equity-mindedness, inclusive pedagogy, and anti-bias education.",

        "Participants will learn how to recognize and address systemic inequities and barriers to learning, including racism, sexism, ableism, and other forms of discrimination. They will explore strategies for fostering cultural responsiveness, empathy, and solidarity, and for advocating for social justice and equity in their schools and communities.",

        "This course is particularly relevant for educators who wish to deepen their understanding of diversity and equity issues, strengthen their capacity to support diverse learners, and create more inclusive and equitable learning environments for all students.",
      ],
      objectives: [
        "Understand the concepts of diversity, equity, and inclusion and their importance in education, including their impact on student learning, well-being, and success.",
        "Develop cultural competence and equity-mindedness, including an awareness of their own biases, privileges, and identities, and their implications for teaching and learning.",
        "Learn strategies for fostering inclusive pedagogy and anti-bias education, including curriculum design, instructional practices, and classroom management strategies.",
        "Explore ways to create safe, supportive, and affirming learning environments that honor diversity, promote belonging, and celebrate students' identities and experiences.",
        "Gain insights into the impact of systemic inequities and barriers to learning, including racism, sexism, ableism, and other forms of discrimination, and strategies for addressing them.",
        "Develop advocacy skills and strategies for promoting social justice and equity in their schools and communities, including allyship, advocacy, and community organizing.",
      ],
      methodology: [
        "Interactive workshops and dialogue sessions: Participants will engage in interactive workshops, dialogue sessions, and critical reflections to deepen their understanding of diversity and equity issues and explore strategies for promoting social justice and inclusion in education. They will have opportunities to share experiences, perspectives, and best practices, and to collaborate on developing solutions to common challenges.",

        "Case studies and storytelling: Case studies and storytelling will be used to illustrate real-world examples of diversity and equity initiatives in educational settings and to inspire participants to take action in their own contexts. Participants will learn from diverse perspectives, experiences, and voices, and explore strategies for applying lessons learned to their own practice.",

        "Culturally responsive teaching and learning: Participants will explore culturally responsive teaching and learning approaches that honor and affirm students' cultural identities, languages, and lived experiences. They will learn how to integrate culturally relevant content, instructional strategies, and assessment practices into their teaching to promote engagement, achievement, and empowerment for all students.",

        "Implementation: Participants will design and implement culturally responsive teaching and learning experiences that incorporate diverse perspectives, voices, and experiences into the curriculum. They will create opportunities for students to explore and critically analyze issues of diversity, equity, and social justice, and to connect their learning to their own lives and communities.",

        "Equity audits and action planning: Participants will conduct equity audits of their school environments to assess the extent to which they are inclusive, equitable, and responsive to the needs of all students. They will identify areas of strength and areas for improvement and develop action plans for addressing equity gaps and promoting positive change.",

        "Implementation: Participants will conduct equity audits using tools and protocols designed to assess the accessibility, inclusivity, and responsiveness of their school environments. They will analyze data, gather input from stakeholders, and identify priorities for action. They will develop action plans that outline goals, strategies, and timelines for addressing equity gaps and promoting systemic change.",
      ],
      assesmentImplementation: [
        "Reflective journals and self-assessment: Participants will engage in reflective journaling and self-assessment activities to deepen their understanding of diversity and equity issues and to identify areas for growth and development. They will reflect on their beliefs, attitudes, and practices related to diversity and equity and set goals for ongoing learning and improvement.",

        "Case study analysis and critical reflection: Participants will analyze case studies and engage in critical reflection activities to apply their learning to real-world scenarios and explore strategies for addressing diversity and equity challenges in educational settings. They will consider the implications of their decisions and actions for promoting social justice and inclusion and identify opportunities for advocacy and change.",

        "Peer feedback and collaborative inquiry: Participants will provide feedback to their peers on their equity audits, action plans, and advocacy initiatives, offering insights, suggestions, and support for ongoing improvement. They will engage in collaborative inquiry and problem-solving, sharing resources, strategies, and best practices for promoting diversity and equity in their schools and communities.",

        "Final project presentation and evaluation: Participants will present their equity audits, action plans, and advocacy initiatives to the group, sharing their goals, strategies, and intended outcomes. Presentations will be evaluated based on their clarity, coherence, and potential impact, and participants will receive feedback and support from peers and instructors.",
      ],
      dailyProgram: [
        {
          title: "Understanding Diversity and Equity",
          morningSession: [
            "Welcome and Course Overview",
            "Introduction to Diversity, Equity, and Inclusion",
            "Exploring Personal Identities and Biases"
          ],
          afternoonSession: [
            "Workshop: Cultural Competence and Equity-Mindedness",
            "Case Study Analysis: Promoting Equity in Education"
          ]
        },
        {
          title: "Culturally Responsive Teaching and Learning",
          morningSession: [
            "Culturally Responsive Pedagogy",
            "Strategies for Culturally Responsive Teaching and Learning"
          ],
          afternoonSession: [
            "Workshop: Designing Culturally Responsive Curriculum",
            "Peer Collaboration and Feedback"
          ]
        },
        {
          title: "Equity Audits and Action Planning",
          morningSession: [
            "Introduction to Equity Audits",
            "Conducting an Equity Audit of School Environments"
          ],
          afternoonSession: [
            "Developing Equity Action Plans",
            "Group Activity: Action Planning and Goal Setting"
          ]
        },
        {
          title: "Fostering Inclusive School Cultures",
          morningSession: [
            "Creating Safe and Affirming School Environments",
            "Strategies for Promoting Inclusive School Cultures"
          ],
          afternoonSession: [
            "Workshop: Building Community and Connection",
            "Reflective Dialogue and Critical Reflection"
          ]
        },
        {
          title: "Advocacy and Action for Social Justice",
          morningSession: [
            "Introduction to Advocacy and Activism",
            "Strategies for Advocating for Social Justice in Education"
          ],
          afternoonSession: [
            "Final Project Presentations",
            "Reflection and Closing Remarks"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/school-education/2.jpg',
      name: '',
      preInfo: "",
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya', 'Bitola'],
      description: [],
      objectives: [],
      methodology: [],
      assesmentImplementation: [],
      dailyProgram: [],
      isCertificated: true
    },
  ]
  schoolEducationsSubject: BehaviorSubject<EducationModel> = new BehaviorSubject<EducationModel>(this.schoolEducations[0])
  schoolEducationsObservable$: Observable<EducationModel> = this.schoolEducationsSubject.asObservable();

  updateObservingSchoolEducationData(index: number) {
    if (index < this.schoolEducations.length) {
      this.schoolEducationsSubject.next(this.schoolEducations[index])
    }
  }

  getSchoolEducation() {
    return this.schoolEducations;
  }
  // school Education data and observable end

  // **************************************************
  // vocational Education data and observable begin
  vocationalEducations: EducationModel[] = [
    {
      img: '../assets/images/vocational-education/adult-care-2.jpg',
      name: 'Elderly Care Profession',
      preInfo: '"Elderly Care Profession" is a specialized course designed to equip caregivers and healthcare professionals with the essential knowledge, skills, and empathy required to provide effective and compassionate care for elderly individuals. This course aims to address the growing need for skilled professionals in elderly care and to promote dignity, independence, and well-being among older adults.',
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya'],
      description: [
        "This comprehensive course is tailored for caregivers, healthcare professionals, and individuals interested in pursuing a career in elderly care. Participants will explore fundamental concepts in gerontology, caregiving techniques, and ethical considerations in elderly care. Through a blend of theoretical insights, practical training, and experiential learning, participants will develop competence in providing holistic care that respects the unique needs and preferences of elderly individuals.",

        "Participants will learn essential caregiving skills such as personal care assistance, medication management, mobility support, and emotional support. They will also gain insights into communication strategies, crisis management, and maintaining a safe and comfortable environment for elderly clients.",
      ],
      objectives: [
        "Understand the physical, emotional, and social needs of elderly individuals and the importance of personalized care.",
        "Develop proficiency in essential caregiving skills, including personal hygiene, nutrition support, and medication administration.",
        "Learn effective communication techniques for interacting with elderly clients, families, and healthcare professionals.",
        "Gain knowledge of common health conditions and age-related challenges faced by elderly individuals, and strategies for promoting health and well-being.",
        "Explore ethical considerations and legal aspects related to elderly care, including confidentiality, autonomy, and end-of-life care decisions.",
        "Develop empathy, patience, and cultural sensitivity in providing person-centered care that respects the dignity and preferences of elderly clients."
      ],
      methodology: [
        "Interactive Workshops: Engage in hands-on workshops to practice caregiving techniques, role-play scenarios, and simulate real-world caregiving challenges.",

        "Case Studies: Analyze case studies to apply theoretical knowledge to practical caregiving situations and develop critical thinking skills.",

        "Guest Speakers: Learn from guest speakers, including geriatric specialists, caregivers, and healthcare professionals, who will share their expertise and experiences in elderly care.",

        "Site Visits: Visit elderly care facilities to observe best practices in caregiving, explore different care models, and learn about facility operations."
      ],
      assesmentImplementation: [
        "Skills Assessments: Demonstrate competency in caregiving skills through practical assessments, including simulated caregiving tasks and role-playing exercises.",

        "Knowledge Assessments: Complete quizzes, exams, or written assignments to assess understanding of theoretical concepts, ethical considerations, and legal issues in elderly care.",

        "Reflective Journals: Maintain reflective journals to document personal growth, challenges faced, and lessons learned throughout the course.",

        "Peer Feedback: Provide and receive constructive feedback from peers on caregiving techniques, communication skills, and ethical dilemmas encountered during training."
      ],
      dailyProgram: [
        {
          title: "Introduction to Elderly Care Profession",
          morningSession: [
            "Welcome and Course Overview",
            "Understanding the Role of Elderly Care Professionals",
            "Introduction to Gerontology and Aging Process"
          ],
          afternoonSession: [
            "Workshop: Essential Caregiving Skills (Personal Hygiene, Nutrition Support)",
            "Case Study Analysis: Ethical Dilemmas in Elderly Care"
          ]
        },
        {
          title: "Caregiving Techniques and Communication",
          morningSession: [
            "Effective Communication Strategies in Elderly Care",
            "Workshop: Medication Management and Mobility Support"
          ],
          afternoonSession: [
            "Role-Playing Exercise: Crisis Management and Decision-Making",
            "Guest Speaker: Expert Insights on Common Health Conditions in Elderly"
          ]
        },
        {
          title: "Ethical Considerations and Legal Aspects",
          morningSession: [
            "Ethical Principles in Elderly Care: Respect, Autonomy, and Confidentiality",
            "Workshop: End-of-Life Care and Advance Directives"
          ],
          afternoonSession: [
            "Site Visit: Tour of Elderly Care Facility and Best Practices Observation",
            "Group Discussion: Legal Issues and Responsibilities in Elderly Care"
          ]
        },
        {
          title: "Personalized Care and Cultural Sensitivity",
          morningSession: [
            "Person-Centered Care: Understanding Individual Preferences and Dignity",
            "Workshop: Emotional Support and Mental Health Awareness"
          ],
          afternoonSession: [
            "Case Study Presentation: Developing Care Plans for Specific Client Needs",
            "Peer Feedback and Reflection on Caregiving Practices"
          ]
        },
        {
          title: "Assessment and Professional Development",
          morningSession: [
            "Skills Assessment: Practical Skills Demonstration and Evaluation",
            "Knowledge Assessment: Written Exam on Gerontology and Caregiving Practices"
          ],
          afternoonSession: [
            "Reflective Journaling: Personal Reflection on Learning Journey",
            "Closing Remarks, Certificate Distribution, and Course Evaluation"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/vocational-education/tourism-and-hospitality.jpg',
      name: 'Tourism & Hospitality Profession',
      preInfo: "'Tourism & Hospitality Professions' is a specialized course designed to prepare individuals for successful careers in the dynamic fields of tourism and hospitality. This course focuses on equipping participants with essential skills, knowledge, and practical experience necessary to thrive in various roles within the tourism and hospitality industry. Participants will gain insights into industry trends, customer service excellence, and operational management to meet the diverse needs of travelers and guests.",
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya'],
      description: [
        "This comprehensive course is ideal for aspiring professionals and current practitioners in tourism and hospitality sectors. Participants will explore key aspects such as tourism management, hotel operations, event planning, and guest relations. Through a blend of theoretical learning, hands-on training, and industry insights, participants will develop a holistic understanding of the industry and acquire skills essential for career advancement.",

        "Participants will learn to deliver exceptional customer experiences, manage hospitality operations efficiently, and adapt to changing industry demands. They will also explore sustainable tourism practices, cultural awareness, and ethical considerations in hospitality management to promote responsible tourism and enhance guest satisfaction.",
      ],
      objectives: [
        "Understand the fundamentals of tourism and hospitality management, including industry trends, market dynamics, and customer expectations.",
        "Develop proficiency in key areas such as hotel operations, food and beverage management, event planning, and tourism marketing.",
        "Acquire practical skills in customer service excellence, effective communication, and problem-solving to meet guest needs and exceed expectations.",
        "Explore sustainable tourism practices, cultural sensitivity, and ethical considerations to promote responsible tourism and environmental stewardship.",
        "Gain insights into career pathways within the tourism and hospitality industry and develop a personalized career development plan.",
        "Enhance leadership skills, teamwork abilities, and resilience to thrive in fast-paced and diverse hospitality environments."
      ],
      methodology: [
        "Interactive Workshops: Engage in hands-on workshops covering topics such as guest relations, event management, and revenue optimization strategies.",

        "Industry Guest Speakers: Learn from industry experts and successful professionals through guest lectures, panel discussions, and networking events.",

        "Case Studies and Simulations: Analyze real-world hospitality scenarios, conduct market research, and develop strategic solutions to operational challenges.",

        "Field Trips and Site Visits: Visit hospitality establishments, tourist attractions, and event venues to observe best practices and gain practical insights into industry operations."
      ],
      assesmentImplementation: [
        "Project-Based Assessments: Work on group projects, case studies, or business simulations to demonstrate understanding of hospitality management principles and practices.",

        "Skills Assessments: Participate in role-playing exercises, customer service evaluations, and operational simulations to assess competency in hospitality skills.",

        "Reflective Journals: Maintain reflective journals to document learning experiences, challenges faced, and personal growth throughout the course.",

        "Peer Feedback: Provide and receive constructive feedback from peers on teamwork, presentation skills, and project outcomes to foster continuous improvement."
      ],
      dailyProgram: [
        {
          title: "Introduction to Tourism & Hospitality Management",
          morningSession: [
            "Welcome and Course Overview",
            "Introduction to Tourism Industry: Trends and Opportunities"
          ],
          afternoonSession: [
            "Workshop: Basics of Hotel Operations and Guest Relations",
            "Case Study Analysis: Customer Service Excellence in Hospitality"
          ]
        },
        {
          title: "Hotel Operations and Event Management",
          morningSession: [
            "Hotel Operations Management: Front Office, Housekeeping, and Maintenance",
            "Workshop: Event Planning and Execution"
          ],
          afternoonSession: [
            "Guest Speaker: Event Management Professional - Best Practices and Insights",
            "Group Activity: Designing a Hospitality Event Proposal"
          ]
        },
        {
          title: "Food and Beverage Management",
          morningSession: [
            "Food and Beverage Operations: Menu Planning, Service Techniques, and Quality Control",
            "Workshop: Beverage Management and Bar Operations"
          ],
          afternoonSession: [
            "Site Visit: Tour of a Local Restaurant or Hotel Kitchen",
            "Case Study Presentation: Optimizing Food and Beverage Revenue"
          ]
        },
        {
          title: "Marketing Strategies and Cultural Sensitivity",
          morningSession: [
            "Tourism Marketing Essentials: Strategies for Attracting and Retaining Guests",
            "Workshop: Cultural Awareness and Diversity in Hospitality"
          ],
          afternoonSession: [
            "Industry Panel Discussion: Sustainable Tourism Practices and Corporate Social Responsibility",
            "Group Project: Developing a Sustainable Tourism Initiative"
          ]
        },
        {
          title: "Career Development and Professional Growth",
          morningSession: [
            "Career Pathways in Tourism & Hospitality: Opportunities and Challenges",
            "Workshop: Leadership Skills and Team Dynamics in Hospitality"
          ],
          afternoonSession: [
            "Skills Assessment: Role-Playing Exercises and Customer Service Challenges",
            "Reflection and Personal Development Planning",
            "Closing Remarks, Certificate Distribution, and Course Evaluation"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/vocational-education/agrecultural-profession.jpg',
      name: 'Agricultural Profession',
      preInfo: "'Agricultural Professions' is a specialized course designed to equip individuals with the knowledge, skills, and practical experience necessary to succeed in various agricultural careers. This course focuses on sustainable farming practices, agricultural technology, crop management, and rural development. Participants will explore modern agricultural techniques, environmental stewardship, and market trends to foster innovation and productivity in the agricultural sector.",
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya'],
      description: [
        "This comprehensive course is ideal for aspiring farmers, agricultural technicians, and agribusiness professionals seeking to enhance their expertise in agricultural sciences and management. Participants will delve into topics such as soil health, crop cultivation, livestock management, and agricultural economics. Through theoretical learning and hands-on training, participants will develop competencies essential for sustainable farming practices, food security, and rural development.",

        "Participants will also explore emerging technologies in agriculture, such as precision farming, greenhouse management, and biotechnology applications. They will gain insights into global agricultural trends, market dynamics, and policy frameworks to make informed decisions and drive agricultural innovation."
      ],
      objectives: [
        "Understand the fundamentals of agriculture, including soil science, plant physiology, and animal husbandry.",
        "Develop proficiency in crop management, pest control, irrigation techniques, and sustainable farming practices.",
        "Acquire practical skills in agricultural technology, including precision farming tools, GIS applications, and automated systems.",
        "Explore agribusiness principles, agricultural economics, marketing strategies, and value chain management.",
        "Gain insights into rural development, community engagement, and environmental sustainability in agriculture.",
        "Enhance leadership abilities, teamwork skills, and entrepreneurial mindset to thrive in the agricultural sector."
      ],
      methodology: [
        "Field Demonstrations: Participate in field trips, farm visits, and demonstrations to observe best practices in crop cultivation, livestock handling, and machinery operation.",

        "Laboratory Sessions: Conduct experiments, soil analyses, and plant diagnostics in laboratories to understand agricultural science principles and techniques.",

        "Workshops and Guest Lectures: Engage in interactive workshops, guest lectures from industry experts, and panel discussions on topics such as agricultural innovation and policy.",

        "Case Studies and Projects: Analyze real-world case studies, develop business plans, and implement agricultural projects to address challenges and opportunities in the sector."
      ],
      assesmentImplementation: [
        "Practical Assessments: Demonstrate proficiency in farm management, crop planning, and livestock handling through practical assessments and farm-based projects.",

        "Written Assignments: Submit research papers, market analyses, and policy briefs on agricultural topics to assess critical thinking and analytical skills.",

        "Presentation and Communication: Deliver presentations, participate in debates, and engage in peer discussions to enhance communication and presentation skills.",

        "Reflective Journals: Maintain reflective journals to document learning experiences, challenges faced, and personal growth throughout the course."
      ],
      dailyProgram: [
        {
          title: "Introduction to Agriculture and Soil Science",
          morningSession: [
            "Welcome and Course Overview",
            "Introduction to Agricultural Professions: Trends and Opportunities"
          ],
          afternoonSession: [
            "Workshop: Fundamentals of Soil Science and Soil Health",
            "Field Demonstration: Soil Sampling Techniques and Analysis"
          ]
        },
        {
          title: "Crop Management and Sustainable Agriculture",
          morningSession: [
            "Crop Physiology and Growth Stages",
            "Workshop: Sustainable Crop Production Techniques"
          ],
          afternoonSession: [
            "Guest Speaker: Innovations in Agricultural Technology",
            "Group Activity: Designing a Sustainable Farming Plan"
          ]
        },
        {
          title: "Livestock Management and Animal Husbandry",
          morningSession: [
            "Livestock Breeds and Genetics",
            "Workshop: Animal Health and Welfare Practices"
          ],
          afternoonSession: [
            "Farm Visit: Livestock Farming Practices and Management",
            "Case Study Analysis: Improving Livestock Productivity"
          ]
        },
        {
          title: "Agricultural Economics and Agribusiness",
          morningSession: [
            "Introduction to Agricultural Economics",
            "Workshop: Marketing Strategies for Agricultural Products"
          ],
          afternoonSession: [
            "Industry Panel Discussion: Agribusiness Opportunities and Challenges",
            "Group Project: Developing a Market Analysis and Business Proposal"
          ]
        },
        {
          title: "Rural Development and Sustainability",
          morningSession: [
            "Rural Development Strategies and Community Engagement",
            "Workshop: Environmental Sustainability in Agriculture"
          ],
          afternoonSession: [
            "Skills Assessment: Farm Management Simulation and Decision Making",
            "Reflection and Personal Development Planning",
            "Closing Remarks, Certificate Distribution, and Course Evaluation"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/vocational-education/hairdressing-profession.jpg',
      name: 'Hairdressing Profession',
      preInfo: "'Hairdressing Professions' is a specialized course designed to provide comprehensive training in hair care, styling techniques, and salon management. This course is tailored for individuals aspiring to become professional hairdressers or salon managers, equipping them with the skills and knowledge necessary to excel in the dynamic beauty industry.",
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya'],
      description: [
        "This intensive course covers fundamental hairdressing techniques, advanced styling methods, client consultation skills, and salon operations. Participants will learn about hair anatomy, hair care products, color theory, and the latest trends in hair fashion. Through hands-on practice and theoretical learning, participants will develop expertise in cutting, coloring, perming, and styling hair for diverse clientele.",

        "Participants will also gain insights into salon management, customer service, retail sales, and business development within the beauty industry. Practical training in salon settings and simulated client interactions will prepare participants to deliver professional hairdressing services and cultivate loyal client relationships."
      ],
      objectives: [
        "Master essential hairdressing techniques, including cutting, coloring, styling, and hair treatments.",
        "Understand hair anatomy, scalp health, and the chemistry of hair care products.",
        "Develop proficiency in consultation skills, client assessment, and personalized service delivery.",
        "Explore creative hairstyling trends, fashion influences, and bridal hair techniques.",
        "Acquire knowledge of salon management practices, retail operations, and industry regulations.",
        "Enhance communication skills, teamwork abilities, and professionalism in salon settings."
      ],
      methodology: [
        "Hands-on Workshops: Participate in practical workshops focusing on hair cutting, coloring techniques, and styling methods under the guidance of experienced instructors.",

        "Salon Simulations: Engage in simulated salon environments to practice client consultations, service delivery, and salon management tasks.",

        "Guest Speakers and Industry Visits: Learn from guest speakers, including professional hairdressers and industry experts, and visit local salons to observe best practices and industry trends.",

        "Portfolio Development: Compile a portfolio showcasing hairdressing projects, creative styles, and client transformations to demonstrate practical skills and artistic abilities."
      ],
      assesmentImplementation: [
        "Practical Assessments: Demonstrate proficiency in hairdressing techniques through practical assessments, including haircutting, coloring, and styling challenges.",

        "Client Case Studies: Analyze client case studies and develop personalized hair care plans, considering individual preferences, hair types, and lifestyle factors.",

        "Written Examinations: Complete written exams covering hair anatomy, product knowledge, salon management principles, and industry regulations.",

        "Professional Portfolio Review: Present and discuss portfolio contents, client testimonials, and career aspirations with instructors for feedback and professional development."
      ],
      dailyProgram: [
        {
          title: "Introduction to Hairdressing Fundamentals",
          morningSession: [
            "Welcome and Course Overview",
            "Introduction to Hair Anatomy and Scalp Health"
          ],
          afternoonSession: [
            "Workshop: Basic Hair Cutting Technique",
            "Hands-on Practice: Mannequin Head Exercises"
          ]
        },
        {
          title: "Hair Coloring Techniques and Trends",
          morningSession: [
            "Color Theory and Hair Coloring Principles",
            "Workshop: Basic and Advanced Hair Coloring Techniques"
          ],
          afternoonSession: [
            "Guest Speaker: Trends in Hair Color and Fashion",
            "Salon Visit: Observation of Color Correction Techniques"
          ]
        },
        {
          title: "Styling Techniques and Bridal Hair",
          morningSession: [
            "Introduction to Hairstyling Tools and Equipment",
            "Workshop: Basic and Creative Styling Techniques"
          ],
          afternoonSession: [
            "Bridal Hair Workshop: Updos, Braids, and Wedding Hairstyles",
            "Client Consultation Role-Play: Bridal Hair Consultation Practice"
          ]
        },
        {
          title: "Salon Management and Client Relations",
          morningSession: [
            "Salon Operations and Customer Service Essentials",
            "Workshop: Retail Sales and Product Knowledge"
          ],
          afternoonSession: [
            "Salon Management Simulation: Appointment Scheduling and Client Management",
            "Case Study Analysis: Handling Client Complaints and Feedback"
          ]
        },
        {
          title: "Advanced Techniques and Career Development",
          morningSession: [
            "Advanced Hairdressing Techniques: Perming, Texture Services",
            "Portfolio Development: Compiling Client Transformations and Creative Projects"
          ],
          afternoonSession: [
            "Career Pathways in Hairdressing: Guest Speaker Panel",
            "Final Presentation: Portfolio Showcase and Reflection",
            "Certificate Distribution and Course Evaluation"
          ]
        }
      ],
      isCertificated: true
    },

    {
      img: '../assets/images/vocational-education/furniture-and-interior-design.jpg',
      name: 'Furniture & Interior Design Profession',
      preInfo: "'Furniture & Interior Design Professions' is a comprehensive course designed for individuals interested in pursuing careers in interior design and furniture styling. This course integrates practical skills with theoretical knowledge to prepare participants for success in the dynamic fields of interior decoration, furniture design, and space planning.",
      cost: '80 €/Day',
      language: 'English',
      enrolmentUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScFpK3UGE6JCdto_HpP36LXsI6UHVzyPvdhp9sF4tDsZlmcww/viewform',
      duration: {
        period: 'Days',
        amount: 5
      },
      cities: ['Antalya'],
      description: [
        "This course covers essential principles of interior design, furniture styles, spatial aesthetics, and project management. Participants will explore topics such as color theory, spatial layout, furniture selection, lighting design, and sustainable practices in interior design. Through hands-on projects and industry-relevant assignments, participants will develop proficiency in creating functional and aesthetically pleasing interior spaces.",

        "The course also emphasizes the integration of furniture design principles into interior projects, equipping participants with skills in conceptualizing, sketching, and prototyping furniture pieces. Participants will learn to analyze client needs, propose design solutions, and effectively communicate their ideas through visual presentations and digital tools."
      ],
      objectives: [
        "Gain a deep understanding of interior design principles, spatial planning, and architectural elements.",
        "Develop proficiency in furniture selection, styling, and integrating furniture design into interior projects.",
        "Explore color theory, lighting design, materials, and finishes relevant to interior decoration.",
        "Acquire skills in conceptualizing, sketching, and prototyping furniture designs.",
        "Master project management techniques, client communication, and budget planning in interior design projects.",
        "Understand sustainable practices and ethical considerations in furniture and interior design."
      ],
      methodology: [
        "Design Studios: Engage in design studios and workshops focused on interior design projects, furniture prototyping, and space planning exercises.",

        "Field Visits and Industry Talks: Visit furniture showrooms, design exhibitions, and attend talks by industry professionals to gain insights into current trends and practices.",

        "Digital Tools and Software: Learn to use CAD software, rendering tools, and graphic design applications for visual presentations and project documentation.",

        "Portfolio Development: Compile a portfolio showcasing design projects, furniture sketches, mood boards, and client presentations to demonstrate skills and creativity."
      ],
      assesmentImplementation: [
        "Design Projects: Complete design projects including residential and commercial interior layouts, furniture design prototypes, and thematic spaces.",

        "Client Presentations: Deliver client presentations showcasing design concepts, mood boards, and 3D visualizations for feedback and approval.",

        "Written Assessments: Complete written exams covering interior design theory, furniture history, sustainability practices, and project management principles.",

        "Portfolio Review: Present and discuss portfolio contents, design process, and career aspirations with instructors for feedback and professional development."
      ],
      dailyProgram: [
        {
          title: "Introduction to Interior Design Principles",
          morningSession: [
            "Welcome and Course Overview",
            "Introduction to Interior Design Elements and Principles"
          ],
          afternoonSession: [
            "Workshop: Basics of Spatial Planning and Functional Layouts",
            "Studio Exercise: Designing a Residential Floor Plan"
          ]
        },
        {
          title: "Furniture Selection and Styling",
          morningSession: [
            "Understanding Furniture Styles and Trends",
            "Workshop: Furniture Selection Criteria and Ergonomics"
          ],
          afternoonSession: [
            "Field Visit: Furniture Showroom Tour and Analysis",
            "Studio Exercise: Designing a Furniture Layout for a Living Room"
          ]
        },
        {
          title: "Color Theory and Lighting Design",
          morningSession: [
            "Color Psychology and Its Application in Interior Design",
            "Workshop: Basics of Lighting Design and Techniques"
          ],
          afternoonSession: [
            "Case Study Analysis: Lighting Solutions for Different Interior Spaces",
            "Studio Exercise: Creating a Mood Board for a Design Project"
          ]
        },
        {
          title: "Sustainable Practices and Materials",
          morningSession: [
            "Sustainable Design Principles and Practices",
            "Workshop: Eco-Friendly Materials and Finishes"
          ],
          afternoonSession: [
            "Guest Speaker: Sustainable Design in Furniture and Interior Spaces",
            "Studio Exercise: Designing a Sustainable Interior Concept"
          ]
        },
        {
          title: "Project Management and Portfolio Development",
          morningSession: [
            "Project Management Essentials: Budgeting and Timeline Planning",
            "Workshop: Digital Tools for Interior Design and Furniture Prototyping"
          ],
          afternoonSession: [
            "Portfolio Development: Compiling Design Projects and Client Presentations",
            "Final Presentation: Portfolio Showcase and Reflection",
            "Certificate Distribution and Course Evaluation"
          ]
        }
      ],
      isCertificated: true
    },
  ]
  vocationalEducationsSubject: BehaviorSubject<EducationModel> = new BehaviorSubject<EducationModel>(this.vocationalEducations[0])
  vocationalEducationsObservable$: Observable<EducationModel> = this.vocationalEducationsSubject.asObservable();

  updateObservingVocationalEducationData(index: number) {
    if (index < this.vocationalEducations.length) {
      this.vocationalEducationsSubject.next(this.vocationalEducations[index])
    }
  }

  getVocationalEducation() {
    return this.vocationalEducations;
  }
  // vocational Education data and observable end
}
