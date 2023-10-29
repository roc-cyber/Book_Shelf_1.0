const Books = [
  {
    id: "1",
    title: "The Official Raspberry Pi Handbook 2023",
    subtitle: `Discover the true potential of Raspberry Pi with the new, official Handbook 2023. With over 200 pages of amazing projects, fun tutorials, practical guides, and clear reviews, it has everything you need to master Raspberry Pi!
                      This open book is licensed under a Creative Commons License (CC BY-NC-SA). You can download The Official Raspberry Pi Handbook 2023 ebook for free in PDF format (81.4 MB).`,
    author:
      "David Crookes, PJ Evans, Rosie Hattersley, Phil King, Nicola King, KG Orphanides, Nik Rawlinson, Mark Vanstone",
    image: "https://www.dbooks.org/img/books/191204742Xs.jpg",
    url: "https://www.dbooks.org/the-official-raspberry-pi-handbook-2023-191204742x/",
    price: 24,},
  {
    id: "2",
    title: "Pay for Play",
    subtitle: "How the Music Industry Works, Where the Money Goes, and Why",
    author: "Larry Wayte",
    image: "https://www.dbooks.org/img/books/5685804586s.jpg",
    url: "https://www.dbooks.org/pay-for-play-5685804586/",
    price: 63,},
  {
    id: "3",
    title: "Azure Bot Service Succinctly",
    subtitle:
      "The power of artificial intelligence may be intimidating, but Microsoft provides the Bot Framework Composer to simplify the process of building conversational AI bots. Conversational bots are especially useful in serving different segments of a business, like customer support, sales, and administration. In this ebook, author Ed Freitas gets you up and running with your first conversational bot with minimal code and shows you how to publish it. From the foundation provided, you'll be able to start building your own bots to satisfy your unique needs.",
    author: "Ed Freitas",
    image: "https://www.dbooks.org/img/books/1642002275s.jpg",
    url: "https://www.dbooks.org/azure-bot-service-succinctly-1642002275/",
    price: 33,},
  {
    id: "4",
    title: "Introductory Algebra",
    subtitle:
      "In order to represent real life situations mathematically, we often use symbols to represent unknown quantities. We call these symbols variables. Each mathematical subject requires knowledge of manipulating expressions and equations to solve for a variable. Careers such as automobile accident investigators, quality control engineers, and insurance originators use equations to determine the value of variables. Real numbers are all around us.",
    author: "Anne Gloag, Andrew Gloag, Melissa Kramer",
    image: "https://www.dbooks.org/img/books/1607826593s.jpg",
    url: "https://www.dbooks.org/introductory-algebra-1607826593/",
    price: 55,},
  {
    id: "5",
    title: "Managing Cloud Native Data on Kubernetes",
    subtitle:
      "Architecting Cloud Native Data Services Using Open Source Technology",
    author: "Jeff Carpenter, Patrick McFadin",
    image: "https://www.dbooks.org/img/books/1098111389s.jpg",
    url: "https://www.dbooks.org/managing-cloud-native-data-on-kubernetes-1098111389/",
    price: 50,},
  {
    id: "6",
    title: "An Introduction to C & GUI Programming",
    subtitle:
      "Freshly updated for GTK3, the 2nd edition of An Introduction to C & GUI Programming will teach you all you need to know to write simple programs in C and start creating GUIs, even if you're an absolute beginner. The first half of the book is an introduction to C, and covers the basics of writing simple command-line programs. The second half shows how to use the GTK user interface toolkit with C to create feature-rich GUI applications which can be run on the desktop.",
    author: "Simon Long",
    image: "https://www.dbooks.org/img/books/1912047446s.jpg",
    url: "https://www.dbooks.org/an-introduction-to-c-gui-programming-1912047446/",
    price: 50,},
  {
    id: "7",
    title: "Contemporary Mathematics",
    subtitle: "Contemporary Mathematics is designed to meet the scope and sequence requirements for a liberal arts mathematics course. This resource provides stand-alone sections with a focus on showing relevance in the features as well as the examples, exercises, and exposition. Contemporary Mathematics integrates technology applications, projects, and highlights a diverse group of contributors to mathematics, statistics, and related fields.",
    author: "Donna Kirk",
    image: "https://www.dbooks.org/img/books/1711470546s.jpg",
    url: "https://www.dbooks.org/contemporary-mathematics-1711470546/",
    price: 34,},
  {
    id: "8",
    title: "The Last Man Who Knew Everything",
    subtitle: "The book is an introduction to the language of systems biology, which is spoken among many disciplines, from biology to engineering. Authors Thomas Sauter and Marco Albrecht draw on a multidisciplinary background and evidence-based learning to facilitate the understanding of biochemical networks, metabolic modeling and system dynamics.",
    author: "Andrew Robinson",
    image: "https://www.dbooks.org/img/books/1805110195s.jpg",
    url: "https://www.dbooks.org/the-last-man-who-knew-everything-1805110195/",
    price: 45,},
  {
    id: "9",
    title: "HackSpace Magazine: Issue 65",
    subtitle: "With enough inspiration, the world is your playground - that's why this issue we're bringing you 16 of the best DIY toys and games to keep boredom at bay.",
    author: "HackSpace Team",
    image: "https://www.dbooks.org/img/books/5685527822s.jpg",
    url: "https://www.dbooks.org/hackspace-magazine-issue-65-5685527822/",
    price: 76,},
  {
    id: "10",
    title: "Intro to Social Media",
    subtitle: "The book is aimed at managers, business owners, marketing managers, and aspiring social media marketing interns and managers. I will assume that however accomplished in your own field - baker, developer, teacher and that even as successful business owners, you approach the topic of social media marketing as a beginner. Even if you are an avid personal user of social networks, we will treat this book as a guided tour of social media for marketing purposes.",
    author: "Cheryl Lawson",
    image: "https://www.dbooks.org/img/books/5685535457s.jpg",
    url: "https://www.dbooks.org/intro-to-social-media-5685535457/",
    price: 50,},
  {
    id: "11",
    title: "HackSpace magazine: Issue 64",
    subtitle: "Bodging electrical components together on a breadboard is all very well, but when it comes to making a circuit permanent, you have to learn to solder. We've rounded up the best wizarding wands to give you this magical maker power.",
    author: "HackSpace Team",
    image: "https://www.dbooks.org/img/books/5679752518s.jpg",
    url: "https://www.dbooks.org/hackspace-magazine-issue-64-5679752518/",
    price: 87,},
  {
    id: "12",
    title: "Introduction to Mechanical Engineering Design",
    subtitle: "A collection of readings and exercises aligned with the course, ME 270, Introduction to Mechanical Engineering Design, at Iowa State University. This course provides an overview of mechanical engineering design with applications to thermal and mechanical systems, and an introduction to current design practices used in industry. As part of the course design, learners will complete a semester-long team project focused on addressing societal needs.",
    author: "Jacqulyn A. Baughman",
    image: "https://www.dbooks.org/img/books/5679742652s.jpg",
    url: "https://www.dbooks.org/introduction-to-mechanical-engineering-design-5679742652/",
    price: 50,},
  {
    id: "13",
    title: "Svelte Succinctly",
    subtitle: "Svelte departs from the virtual DOM approach by compiling the code you write into native-browser JavaScript when you build your application. The result is minimal and highly optimized pure JavaScript that the browser executes with no heavy runtime. In Svelte Succinctly, Ed Freitas will show readers how to install Svelte and give them a condensed overview of how to build an app with Svelte using SvelteKit.",
    author: "Ed Freitas",
    image: "https://www.dbooks.org/img/books/1642002305s.jpg",
    url: "https://www.dbooks.org/svelte-succinctly-1642002305/",
    price: 31,},
  {
    id: "14",
    title: "Introduction to Systems Biology",
    subtitle: "Workbook for Flipped-classroom Teaching book is an introduction to the language of systems biology, which is spoken among many disciplines, from biology to engineering. Authors Thomas Sauter and Marco Albrecht draw on a multidisciplinary background and evidence-based learning to facilitate the understanding of biochemical networks, metabolic modeling and system dynamics.",
    author: "Thomas Sauter, Marco Albrecht",
    image: "https://www.dbooks.org/img/books/1800644124s.jpg",
    url: "https://www.dbooks.org/introduction-to-systems-biology-1800644124/",
    price: 41,},
  {
    id: "15",
    title: "Blockchain For Dummies",
    subtitle: "Blockchain For Dummies, 2nd IBM Limited Edition, equips you with an understanding of what blockchain is, how it works, and how it can enhance your business and the industry in which it operates. You learn the fundamentals of blockchain and how this technology revolutionizes transactions and business networks. You also discover the important difference between 'blockchain' and 'blockchain for business' and what makes blockchain an ideal solution for streamlining business networks.",
    author: "Manav Gupta",
    image: "https://www.dbooks.org/img/books/111954601Xs.jpg",
    url: "https://www.dbooks.org/blockchain-for-dummies-111954601x/",
    price: 91,},
  {
    id: "16",
    title: "ASP.NET Core APIs Succinctly",
    subtitle: "APIs are such a critical part of software that 'API-first' has become a popular approach to development, one where the API is designed before the app itself is written. Without a well-designed API, your app is isolated from the greater app ecosystem. In ASP.NET Core APIs Succinctly, author Dirk Strauss guides you through designing your own REST API, using it to return and modify data, and versioning it as you continue to develop it.",
    author: "Dirk Strauss",
    image: "https://www.dbooks.org/img/books/1642002283s.jpg",
    url: "https://www.dbooks.org/aspnet-core-apis-succinctly-1642002283/",
    price: 66,},
  {
    id: "17",
    title: "Numerical Methods for Ordinary Differential Equations",
    subtitle: "Why do enterprises feel daunted when undertaking a large-scale cloud transformation? A move to the cloud usually offers substantial rewards. Once companies make this transition, they unlock new business opportunities that fundamentally change the way they work. With this report, members of the Google team will show you how to navigate the cultural and technological transformation required to migrate to the cloud.",
    author: "Kees Vuik, Fred Vermolen, Martin van Gijzen",
    image: "https://www.dbooks.org/img/books/9463666656s.jpg",
    url: "https://www.dbooks.org/numerical-methods-for-ordinary-differential-equations-9463666656/",
    price: 62,},
  {
    id: "18",
    title: "A Practical Guide to Cloud Migration",
    subtitle:
      "Essays on Organizational Transformation from Google Practitioners, Why do enterprises feel daunted when undertaking a large-scale cloud transformation? A move to the cloud usually offers substantial rewards. Once companies make this transition, they unlock new business opportunities that fundamentally change the way they work. With this report, members of the Google team will show you how to navigate the cultural and technological transformation required to migrate to the cloud.",
    author: "Kieran Broadfoot",
    image: "https://www.dbooks.org/img/books/1492095176s.jpg",
    url: "https://www.dbooks.org/a-practical-guide-to-cloud-migration-1492095176/",
    price: 58,},
  {
    id: "19",
    title: "The European Experience",
    subtitle: "The European Experience brings together the expertise of nearly a hundred historians from eight European universities to internationalise and diversify the study of modern European history, exploring a grand sweep of time from 1500 to 2000. Offering a valuable corrective to the Anglocentric narratives of previous English-language textbooks, scholars from all over Europe have pooled their knowledge on comparative themes such as identities, cultural encounters, power and citizenship, and economic development to reflect the complexity and heterogeneous nature of the European experience. Rather than another grand narrative, the international author teams offer a multifaceted and rich perspective on the history of the continent of the past 500 years. Each major theme is dissected through three chronological sub-chapters, revealing how major social, political and historical trends manifested themselves in different European settings during the early modern (1500-1800), modern (1800-1900) and contemporary period (1900-2000).",
    author:
      "Jan Hansen, Jochen Hung, Jaroslav Ira, Judit Klement, Sylvain Lesage, Juan Luis Simal, Andrew Tompkins",
    image: "https://www.dbooks.org/img/books/1800648723s.jpg",
    url: "https://www.dbooks.org/the-european-experience-1800648723/",
    price: 50,},
  {
    id: "20",
    title: "HackSpace Magazine: Issue 63",
    subtitle: "Flying machines: humans have always dreamed about flight, but with our puny arms and lack of feathers it's something we've struggled with. No more! Join us as we explore the best, cleverest and most innovative home-made flying machines. Icarus would have been proud!",
    author: "HackSpace Team",
    image: "https://www.dbooks.org/img/books/5676984863s.jpg",
    url: "https://www.dbooks.org/hackspace-magazine-issue-63-5676984863/",
    price: 76,},
];

export default Books;
