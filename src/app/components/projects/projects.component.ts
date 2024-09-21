import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'TIES : TV Interactive Engagement System',
      description: 'I contributed to Project TIES (TV Interactive Engagement System), an Android app that enhances TV communication for the elderly. The app integrates smartphones and TVs, featuring usage tracking, unusual activity detection, medical reminders, video calls, and QR-based pairing for messaging. I implemented a machine learning model for unusual activity detection using Scikit-Learn and ONYX. The project utilized Fragments, MVVM architecture, and technologies like Android Studio, Kotlin, Figma, and Firebase, while incorporating SDKs such as Agora and Zxing to enhance functionality.',
      technologies: ['Android', 'Kotlin', 'XML', 'Firebase'],
      src: './assets/projects/ties.jpeg',
      link: 'https://www.figma.com/design/VANWMuugbDVOX7jTnhBvxz/TIES-%3ATV-Interactive-Engagement-System?node-id=250-12697&t=CBgHzS6OWHM7XxUs-1',
    },
    {
      name: 'Motion Sensing Android App',
      description: 'I developed a Motion Sensing Android app using Android Studio, Kotlin, and XML from February to March 2023. The app utilizes pedestrian dead reckoning (PDR) to accurately track user steps and detects whether the user is taking the lift or stairs, enhancing usability and convenience. Additionally, it visualizes the users trajectory on a graph for better tracking',
      technologies:  ['Android', 'Kotlin', 'XML', 'Firebase','Accelerometer and Magentormeter'],
      src: './assets/projects/motion.jpeg',
      link: 'https://github.com/Krishmeet-10/Motion-Sensing-App',
    },
    {
      name: 'Modified Raft Concensus Algorithm',
      description: 'I implemented and modified the Raft Consensus algorithm using Python, gRPC, and key-value pairs from February to March 2024. My enhancements focused on improving efficiency and fault tolerance, including the introduction of a leader lease to optimize the algorithms effectiveness. This project showcased my problem-solving skills and ability to enhance system performance through targeted algorithm modifications. ',
      technologies: ['Python', 'Google Cloud'],
      src: './assets/projects/raft.jpeg',
      link: 'https://github.com/chetanch31/cse530-distributed-systems/tree/main/Assignment2',
    },
    {
      name: 'Will Hero Mobile Game Clone',
      description: 'I developed a fully functional clone of the popular mobile game Will Hero using Java, JavaFX, and Scene Builder from November 2021 to January 2022. By applying object-oriented programming principles, I ensured an efficient and organized code structure throughout the project. This experience demonstrated my proficiency in Java and my ability to create engaging, interactive applications while successfully replicating the gameplay mechanics of the original game.',
      technologies: ['Java', 'JavaFX', 'SceneBuilder'],
      src: './assets/projects/willhero.png',
      link: 'https://github.com/Krishmeet-10/WillHero',
    },
    {
      name: 'Database Management System for a Cab Booking Service',
      description: 'I developed a comprehensive database management system for a hypothetical online cab booking service using Python Tkinter and MySQL from March to May 2022. This system ensured efficient data storage and retrieval, enabling seamless operations and quick access to information. I utilized MySQL for data management and manipulation, while designing a user-friendly interface with Python Tkinter to enhance user experience and facilitate easy interaction with the system, making it intuitive and accessible for users.',
      technologies: ['Python','Tkinter','MySql'],
      src: './assets/projects/database.png',
      link: 'https://github.com/Krishmeet-10/DBMS-Project',
    }
  ];
}
