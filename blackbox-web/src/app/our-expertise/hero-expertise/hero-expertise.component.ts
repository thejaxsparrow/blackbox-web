import { Component, OnInit, HostListener } from '@angular/core';
import {NgForOf, NgIf, NgStyle} from '@angular/common';

interface Expertise {
  name: string;
  type: string;
  tags: string[];
  description: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-hero-expertise',
  templateUrl: './hero-expertise.component.html',
  imports: [
    NgForOf,
    NgIf,
    NgStyle
  ],
  styleUrls: ['./hero-expertise.component.scss']
})
export class HeroExpertiseComponent implements OnInit {


  heroData = {
    title: 'OUR EXPERTISE',
    subtitle: `At Black Box Systems, we combine advanced technical expertise with
               creative problem-solving to deliver robust, efficient software solutions
               across a wide range of technologies.`
  };


  filters: string[] = [
    'All',
    'Front End',
    'Back End',
    'API',
    'Mobile',
    'Cloud',
    'Data',
    'Infrastructure',
    'Database',
    'Libraries',
    'Blockchain',
    'Web App',
    'Smart Contract',
    'DApp',
    'Third Party Connection',
    'Framework',
    'Language',
    'Backend',
    'Frontend',
    'Blockchain Network'
  ];


  selectedFilter: string = 'All';


  expertises: Expertise[] = [
    {
      name: 'Python',
      type: 'Language',
      tags: ['Language', 'Web App', 'Backend'],
      description: 'Python is a versatile, high-level language known for its readability...'
    },
    {
      name: 'React Native',
      type: 'Framework',
      tags: ['Mobile', 'Frontend'],
      description: 'React Native leverages React to build native iOS and Android apps...'
    },
    {
      name: 'React JS',
      type: 'Framework',
      tags: ['Frontend', 'Web App'],
      description: 'React JS is a popular library for building interactive UIs...'
    },
    {
      name: "Django",
      type: "Framework",
      tags: ["Backend", "Web App"],
      description: "Django is a high-level Python framework encouraging rapid development and clean design for robust web applications."
    },
    {
      name: "ERPNext",
      type: "Framework",
      tags: ["Web App", "Backend", "Frontend"],
      description: "ERPNext is an open-source ERP solution for managing inventory, accounting, HR, and more in one integrated system."
    },
    {
      name: "Rust",
      type: "Language",
      tags: ["Language", "Backend", "Infrastructure"],
      description: "Rust is a fast, memory-safe language that prevents segfaults and guarantees thread safety—perfect for performance-critical apps."
    },
    {
      name: "Solidity",
      type: "Language",
      tags: ["Blockchain", "Backend"],
      description: "Solidity is designed for writing smart contracts on the Ethereum Virtual Machine and other EVM-compatible networks."
    },
    {
      name: "Go",
      type: "Language",
      tags: ["Backend", "Cloud"],
      description: "Go (Golang) is a fast, statically typed language with excellent concurrency features, ideal for microservices and large-scale systems."
    },
    {
      name: "CosmWasm",
      type: "Backend",
      tags: ["Blockchain", "Smart Contract"],
      description: "CosmWasm is a WASM-based smart contract platform in the Cosmos ecosystem for secure, interoperable blockchain applications."
    },
    {
      name: "Clio API",
      type: "Backend",
      tags: ["API", "Third Party Connection"],
      description: "Clio API offers secure integration with Clio’s legal practice management, automating workflows for legal professionals."
    },
    {
      name: "Heroku",
      type: "Backend",
      tags: ["Cloud", "Infrastructure", "Web App"],
      description: "Heroku is a cloud PaaS letting developers build, run, and manage apps entirely online with minimal config."
    },
    {
      name: "Stripe API",
      type: "Backend",
      tags: ["API", "Payment", "Web App"],
      description: "Stripe API integrates payment processing, subscription billing, and financial services into web/mobile applications."
    },
    {
      name: "Chargebee API",
      type: "Backend",
      tags: ["API", "Third Party Connection"],
      description: "Chargebee API simplifies subscription billing and recurring payments for SaaS businesses."
    },
    {
      name: "Google Document AI API",
      type: "Backend",
      tags: ["API", "Data", "AI"],
      description: "Google Document AI applies ML to extract structured data from documents, enabling large-scale processing."
    },
    {
      name: "Hubspot API",
      type: "Backend",
      tags: ["API", "Third Party Connection"],
      description: "HubSpot API provides programmatic access to CRM data, marketing automation, and sales enablement tools."
    },
    {
      name: "TypeScript",
      type: "Language",
      tags: ["Language", "Frontend", "Backend"],
      description: "TypeScript is a typed superset of JavaScript that compiles to JS, improving developer productivity and maintainability."
    },
    {
      name: ".NET",
      type: "Backend",
      tags: ["Framework", "Cloud"],
      description: ".NET is a cross-platform framework for building cloud, desktop, mobile, gaming, and IoT apps and services."
    },
    {
      name: "GraphQL",
      type: "Backend",
      tags: ["API", "Web App"],
      description: "GraphQL is a query language for APIs that lets clients request exactly the data they need, boosting performance and flexibility."
    },
    {
      name: "Next JS",
      type: "Framework",
      tags: ["Frontend", "Full Stack"],
      description: "Next.js is a React framework for hybrid static/server rendering, SEO-friendly web apps, and easy TypeScript support."
    },
    {
      name: "Angular JS",
      type: "Framework",
      tags: ["Frontend", "Web App"],
      description: "AngularJS extends HTML's syntax for building dynamic single-page apps with a declarative approach."
    },
    {
      name: "Web3 JS",
      type: "Libraries",
      tags: ["Blockchain", "Web App"],
      description: "Web3.js libraries let you interact with a local or remote Ethereum node via HTTP, IPC, or WebSocket."
    },
    {
      name: "Web3 Py",
      type: "Libraries",
      tags: ["Blockchain", "Backend"],
      description: "Web3.py is a Python library for interacting with Ethereum, supporting tasks like sending transactions or reading chain data."
    },
    {
      name: "Ether JS",
      type: "Libraries",
      tags: ["Blockchain", "Web App"],
      description: "Ethers.js is a lightweight JS library for interacting with the Ethereum blockchain and its ecosystem."
    },
    {
      name: "Salesforce API",
      type: "Backend",
      tags: ["API", "Third Party Connection"],
      description: "Salesforce API offers access to Salesforce CRM functionalities for data synchronization and process automation."
    },
    {
      name: "Node.js",
      type: "Backend",
      tags: ["Backend", "API", "Microservices"],
      description: "Node.js is a JavaScript runtime built on Chrome's V8, enabling server-side code in JS with non-blocking I/O and extensive ecosystem."
    },
    {
      name: "Vue.js",
      type: "Framework",
      tags: ["Frontend", "Web App"],
      description: "Vue.js is a progressive framework for building user interfaces that emphasizes incrementally adaptable architecture."
    },
    {
      name: "Svelte",
      type: "Framework",
      tags: ["Frontend", "Web App"],
      description: "Svelte compiles components at build time, producing minimal, high-performance JavaScript for the browser."
    },
    {
      name: "Java",
      type: "Language",
      tags: ["Backend", "Enterprise", "Server"],
      description: "Java is a versatile, object-oriented language widely used for enterprise apps, Android development, and large-scale systems."
    },
    {
      name: "C#",
      type: "Language",
      tags: ["Backend", "Desktop", "Web App"],
      description: "C# is a modern, object-oriented language from Microsoft, used with .NET for building Windows, web, cloud, and cross-platform apps."
    },
    {
      name: "AWS",
      type: "Cloud",
      tags: ["Cloud", "DevOps", "Serverless"],
      description: "Amazon Web Services provides on-demand cloud computing platforms and APIs, offering scalable compute, storage, and more."
    },
    {
      name: "Azure",
      type: "Cloud",
      tags: ["Cloud", "DevOps", "Serverless"],
      description: "Microsoft Azure is a cloud computing service for building, testing, deploying, and managing apps and services via Microsoft-managed data centers."
    },
    {
      name: "GCP",
      type: "Cloud",
      tags: ["Cloud", "DevOps", "Serverless"],
      description: "Google Cloud Platform offers reliable and scalable infrastructure, data analytics, and machine learning services."
    },
    {
      name: "Docker",
      type: "DevOps",
      tags: ["Container", "Infrastructure", "Automation"],
      description: "Docker packages software into containers, ensuring consistent environments across development, testing, and production."
    },
    {
      name: "Kubernetes",
      type: "DevOps",
      tags: ["Container Orchestration", "Cloud", "Infrastructure"],
      description: "Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications."
    }

  ];


  isMobile = false;

  mobileButtonStyle: any = {};


  showMobileFilters = false;


  showMobileFilterButton = false;


  leftColStyle: any = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '50%'
  };

  constructor() {
  }

  ngOnInit(): void {
    this.checkScreenSize();
    this.updateLeftColPosition();
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateLeftColPosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
    this.updateLeftColPosition();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768;
  }


  get filteredExpertises(): Expertise[] {
    if (this.selectedFilter === 'All') {
      return this.expertises;
    }
    return this.expertises.filter(e => e.tags.includes(this.selectedFilter));
  }

  setFilter(filter: string): void {
    this.selectedFilter = filter;
  }


  toggleExpand(expertise: Expertise): void {
    expertise.expanded = !expertise.expanded;
  }


  toggleMobileFilters(): void {
    this.showMobileFilters = !this.showMobileFilters;
  }

  selectMobileFilter(filter: string): void {
    this.selectedFilter = filter;
    // Ferme le panel
    this.showMobileFilters = false;
  }


  updateLeftColPosition(): void {

    if (window.innerWidth >= 768 && window.innerWidth <= 1300) {
      return;
    }

    const container = document.querySelector('.hero-expertise-container') as HTMLElement;
    if (!container) return;


    const containerRect = container.getBoundingClientRect();
    const containerTop = containerRect.top + window.scrollY;
    const containerHeight = container.offsetHeight;
    const containerBottom = containerTop + containerHeight;


    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;


    if (this.isMobile) {
      const screenBottom = scrollY + viewportHeight;
      if (screenBottom >= containerTop && scrollY <= containerBottom) {

        this.showMobileFilterButton = true;
      } else {

        this.showMobileFilterButton = false;
        if (this.showMobileFilters) {
          this.showMobileFilters = false;
        }
      }
    }


    const leftCol = document.querySelector('.left-col') as HTMLElement;
    if (leftCol) {
      const leftColHeight = leftCol.offsetHeight;

      if (containerHeight <= viewportHeight) {

        this.leftColStyle = {
          position: 'fixed',
          bottom: '0',
          left: '0',
          width: '50%'
        };
      } else if ((scrollY + viewportHeight) >= containerBottom) {

        const offsetFromTop = containerHeight - leftColHeight;
        this.leftColStyle = {
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '50%',
          top: offsetFromTop + 'px'
        };
      } else {
        // Sinon => fixe
        this.leftColStyle = {
          position: 'fixed',
          bottom: '0',
          left: '0',
          width: '50%'
        };
      }
    }


    if (this.isMobile && this.showMobileFilterButton) {



      if (containerHeight <= viewportHeight) {
        this.mobileButtonStyle = {
          position: 'fixed',
          bottom: '1rem',  // par ex.
          left: '50%',
          transform: 'translateX(-50%)'
        };
      }

      else if ((scrollY + viewportHeight) >= containerBottom) {

        const mobileBtn = document.querySelector('.mobile-filter-button') as HTMLElement;
        const btnHeight = mobileBtn ? mobileBtn.offsetHeight : 50;
        const offsetFromTop = containerHeight - btnHeight;

        this.mobileButtonStyle = {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '0',
          top: offsetFromTop + 'px'
        };
      }

      else {
        this.mobileButtonStyle = {
          position: 'fixed',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)'
        };
      }
    } else {

      this.mobileButtonStyle = {};
    }
  }
}
