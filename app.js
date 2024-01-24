const easyquizQuestions = [
  {
    question: "What does CPU stand for?",
    options: [
      { text: "Central Processing Unit", isCorrect: true },
      { text: "Computer Personal Unit", isCorrect: false },
      { text: "Central Processor Unit", isCorrect: false },
      { text: "Central Process Unit", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question:
      "Which programming language is known as the 'mother of all languages'?",
    options: [
      { text: "Java", isCorrect: false },
      { text: "Fortran", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "Python", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "What is the default extension of a Java source code file?",
    options: [
      { text: ".java", isCorrect: true },
      { text: ".class", isCorrect: false },
      { text: ".jav", isCorrect: false },
      { text: ".src", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "What is the main purpose of a 'boolean' data type in programming?",
    options: [
        { text: "Storing decimal numbers", isCorrect: false },
        { text: "Representing true or false values", isCorrect: true },
        { text: "Organizing text characters", isCorrect: false },
        { text: "Managing date and time information", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "Which company developed the first computer mouse?",
    options: [
      { text: "IBM", isCorrect: false },
      { text: "Microsoft", isCorrect: false },
      { text: "Xerox", isCorrect: true },
      { text: "Apple", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "What is the largest computer hardware company in the world?",
    options: [
      { text: "Dell", isCorrect: false },
      { text: "IBM", isCorrect: true },
      { text: "HP", isCorrect: false },
      { text: "Apple", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "What does the acronym 'URL' stand for?",
    options: [
      { text: "Universal Resource Locator", isCorrect: true },
      { text: "Uniform Resource Locator", isCorrect: false },
      { text: "Universal Reference Locator", isCorrect: false },
      { text: "Uniform Reference Locator", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "What is the purpose of an IP address?",
    options: [
      { text: "Identifying a person's name", isCorrect: false },
      { text: "Locating a device on a network", isCorrect: true },
      { text: "Measuring internet speed", isCorrect: false },
      { text: "Encrypting data", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "Who is often referred to as the 'Father of the Internet'?",
    options: [
      { text: "Bill Gates", isCorrect: false },
      { text: "Tim Berners-Lee", isCorrect: false },
      { text: "Vint Cerf", isCorrect: true },
      { text: "Mark Zuckerberg", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "In computing, what does the acronym 'RAM' stand for?",
    options: [
      { text: "Random Access Memory", isCorrect: true },
      { text: "Read-Only Memory", isCorrect: false },
      { text: "Redundant Array of Memory", isCorrect: false },
      { text: "Random Array of Memory", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "What is the main function of a CPU?",
    options: [
      { text: "Storing data permanently", isCorrect: false },
      { text: "Processing data", isCorrect: true },
      { text: "Displaying graphics", isCorrect: false },
      { text: "Connecting to the internet", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question:
      "Which programming language is often used for artificial intelligence?",
    options: [
      { text: "C#", isCorrect: false },
      { text: "Python", isCorrect: true },
      { text: "Java", isCorrect: false },
      { text: "Ruby", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "What is the file extension of a Python source code file?",
    options: [
      { text: ".py", isCorrect: true },
      { text: ".java", isCorrect: false },
      { text: ".php", isCorrect: false },
      { text: ".html", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "Which company developed the Android operating system?",
    options: [
      { text: "Microsoft", isCorrect: false },
      { text: "Apple", isCorrect: false },
      { text: "Google", isCorrect: true },
      { text: "Samsung", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "What is the purpose of a compiler in programming?",
    options: [
      { text: "Executing code", isCorrect: false },
      { text: "Translating code to machine language", isCorrect: true },
      { text: "Debugging code", isCorrect: false },
      { text: "Creating user interfaces", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "Which data type is used to store whole numbers in programming?",
    options: [
      { text: "Float", isCorrect: false },
      { text: "String", isCorrect: false },
      { text: "Integer", isCorrect: true },
      { text: "Boolean", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "What does the acronym 'HTTP' stand for?",
    options: [
      { text: "HyperText Transfer Protocol", isCorrect: true },
      { text: "HyperText Testing Protocol", isCorrect: false },
      { text: "HyperTransfer Text Protocol", isCorrect: false },
      { text: "HyperText Terminal Protocol", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "Which database management system is open-source?",
    options: [
      { text: "MySQL", isCorrect: true },
      { text: "Oracle Database", isCorrect: false },
      { text: "Microsoft SQL Server", isCorrect: false },
      { text: "IBM Db2", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "What is the purpose of an 'if' statement in programming?",
    options: [
      { text: "Looping through data", isCorrect: false },
      { text: "Declaring variables", isCorrect: false },
      { text: "Conditional execution of code", isCorrect: true },
      { text: "Printing output", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "Which of the following is a front-end programming language?",
    options: [
      { text: "Java", isCorrect: false },
      { text: "C#", isCorrect: false },
      { text: "JavaScript", isCorrect: true },
      { text: "Python", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "What does the acronym 'API' stand for?",
    options: [
      { text: "Application Programming Interface", isCorrect: true },
      { text: "Advanced Programming Interface", isCorrect: false },
      { text: "Automated Programming Interface", isCorrect: false },
      { text: "Application Processing Interface", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "In web development, what does CSS stand for?",
    options: [
      { text: "Computer Style Sheets", isCorrect: false },
      { text: "Cascading Style Sheets", isCorrect: true },
      { text: "Creative Style Sheets", isCorrect: false },
      { text: "Colorful Style Sheets", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question:
      "Which programming language is known for its simplicity and readability?",
    options: [
      { text: "C++", isCorrect: false },
      { text: "Python", isCorrect: true },
      { text: "Java", isCorrect: false },
      { text: "JavaScript", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question: "What is the purpose of the 'git' version control system?",
    options: [
      { text: "Managing databases", isCorrect: false },
      { text: "Managing project versions", isCorrect: true },
      { text: "Creating websites", isCorrect: false },
      { text: "Analyzing data", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    question:
      "Which programming language is often used for data analysis and statistics?",
    options: [
      { text: "Java", isCorrect: false },
      { text: "C#", isCorrect: false },
      { text: "Python", isCorrect: true },
      { text: "Ruby", isCorrect: false },
    ],
    difficulty: "Easy",
  }
];

const computerScienceMediumQuizQuestions = [

  {
    question: "What is the primary purpose of a 'for' loop in programming?",
    options: [
      { text: "Defining a new variable", isCorrect: false },
      { text: "Repeating a set of statements a specific number of times", isCorrect: true },
      { text: "Handling exceptions or errors", isCorrect: false },
      { text: "Executing a function", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question: "In computer science, what does the term 'algorithm' refer to?",
    options: [
      { text: "Defining a new variable", isCorrect: false },
      { text: "A step-by-step procedure or formula for solving a problem", isCorrect: true },
      { text: "Handling exceptions or errors", isCorrect: false },
      { text: "Executing a function", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question: "What does the acronym 'HTML' stand for in web development?",
    options: [
      { text: "Hypertext Markup Language", isCorrect: true },
      { text: "High-Level Text Manipulation Language", isCorrect: false },
      { text: "Handling Multiple Tasks in Loops", isCorrect: false },
      { text: "Hyperlink and Text Management Language", isCorrect: false },
    ],
    difficulty: "Medium",
  },

  {
    question: "What is the purpose of a 'try...catch' block in programming?",
    options: [
      { text: "Defining a new variable", isCorrect: false },
      { text: "Handling exceptions or errors", isCorrect: true },
      { text: "Creating a loop", isCorrect: false },
      { text: "Executing a function", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question: "What does the term 'API endpoint' refer to?",
    options: [
      {
        text: "A point in the code where the API is initialized",
        isCorrect: false,
      },
      {
        text: "A URL that represents a specific function or resource in an API",
        isCorrect: true,
      },
      { text: "The main function of an API", isCorrect: false },
      { text: "An external library used in API development", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question: "In object-oriented programming, what is encapsulation?",
    options: [
      {
        text: "A technique to hide the implementation details of an object",
        isCorrect: true,
      },
      {
        text: "The process of converting data into a specific format",
        isCorrect: false,
      },
      { text: "A type of loop structure", isCorrect: false },
      { text: "The principle of reusing code", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question:
      "Which sorting algorithm has an average time complexity of O(n log n)?",
    options: [
      { text: "Bubble Sort", isCorrect: false },
      { text: "Insertion Sort", isCorrect: false },
      { text: "Quick Sort", isCorrect: true },
      { text: "Selection Sort", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question: "What is a hash function in computer science?",
    options: [
      {
        text: "A function that arranges data in alphabetical order",
        isCorrect: false,
      },
      {
        text: "A function that maps data of arbitrary size to a fixed size",
        isCorrect: true,
      },
      {
        text: "A function that encrypts data for secure transmission",
        isCorrect: false,
      },
      {
        text: "A function that calculates the average of a set of numbers",
        isCorrect: false,
      },
    ],
    difficulty: "Medium",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      { text: "Referring to the current file", isCorrect: false },
      { text: "Referring to the current function", isCorrect: false },
      { text: "Referring to the current object or context", isCorrect: true },
      { text: "Referring to the previous variable", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question: "In relational databases, what is the primary key used for?",
    options: [
      { text: "Sorting data in ascending order", isCorrect: false },
      { text: "Linking tables together", isCorrect: false },
      { text: "Uniquely identifying a record in a table", isCorrect: true },
      { text: "Encrypting sensitive information", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question: "What is the purpose of the 'break' statement in a loop?",
    options: [
      {
        text: "Ending the loop and transferring control to the next iteration",
        isCorrect: false,
      },
      { text: "Skipping the next iteration of the loop", isCorrect: false },
      { text: "Terminating the loop prematurely", isCorrect: true },
      { text: "Resuming the loop from the beginning", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question:
      "What is the role of a CDN (Content Delivery Network) in web development?",
    options: [
      { text: "A database management system", isCorrect: false },
      { text: "A network protocol for file transfer", isCorrect: false },
      { text: "A system for managing website content", isCorrect: false },
      {
        text: "Improving the performance and speed of content delivery",
        isCorrect: true,
      },
    ],
    difficulty: "Medium",
  },
  {
    question:
      "Which data structure follows the Last In, First Out (LIFO) principle?",
    options: [
      { text: "Queue", isCorrect: false },
      { text: "Linked List", isCorrect: false },
      { text: "Stack", isCorrect: true },
      { text: "Tree", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question: "What is a NoSQL database?",
    options: [
      { text: "A database without any query language", isCorrect: false },
      { text: "A database that uses only SQL for queries", isCorrect: false },
      {
        text: "A database that does not use a traditional relational schema",
        isCorrect: true,
      },
      {
        text: "A database that cannot handle large datasets",
        isCorrect: false,
      },
    ],
    difficulty: "Medium",
  },
  {
    question: "What is the purpose of the 'git clone' command?",
    options: [
      { text: "Creating a new repository", isCorrect: false },
      {
        text: "Copying an existing repository to a new location",
        isCorrect: true,
      },
      { text: "Committing changes to a repository", isCorrect: false },
      { text: "Deleting a repository", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question: "What is the main difference between HTTP and HTTPS?",
    options: [
      { text: "The programming language used", isCorrect: false },
      { text: "The method of data transfer", isCorrect: false },
      { text: "The level of security and encryption", isCorrect: true },
      { text: "The type of content supported", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question:
      "In software development, what is the purpose of continuous integration?",
    options: [
      {
        text: "Merging code changes at the end of a project",
        isCorrect: false,
      },
      {
        text: "Automatically testing and integrating code changes frequently",
        isCorrect: true,
      },
      { text: "Creating a standalone software module", isCorrect: false },
      { text: "Deploying software to production servers", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question:
      "What is the difference between 'localStorage' and 'sessionStorage' in web browsers?",
    options: [
      {
        text: "They serve the same purpose and are interchangeable",
        isCorrect: false,
      },
      {
        text: "localStorage persists even after the browser is closed, sessionStorage does not",
        isCorrect: true,
      },
      {
        text: "sessionStorage is more secure than localStorage",
        isCorrect: false,
      },
      {
        text: "localStorage is limited to a single session, sessionStorage is persistent",
        isCorrect: false,
      },
    ],
    difficulty: "Medium",
  },
  {
    question:
      "What is the purpose of a 'foreign key' in a relational database?",
    options: [
      {
        text: "Ensuring data integrity by enforcing uniqueness",
        isCorrect: false,
      },
      { text: "Creating a link between tables", isCorrect: true },
      { text: "Storing large binary data", isCorrect: false },
      { text: "Sorting data in ascending order", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question: "What is the 'Big O' notation used for in computer science?",
    options: [
      {
        text: "Measuring the physical size of data structures",
        isCorrect: false,
      },
      {
        text: "Evaluating the efficiency of algorithms in terms of time and space complexity",
        isCorrect: true,
      },
      {
        text: "Assigning unique identifiers to data elements",
        isCorrect: false,
      },
      {
        text: "Defining the maximum size of a data structure",
        isCorrect: false,
      },
    ],
    difficulty: "Medium",
  },
  {
    question:
      "Which design pattern is commonly used for creating objects in JavaScript?",
    options: [
      { text: "Observer Pattern", isCorrect: false },
      { text: "Factory Pattern", isCorrect: true },
      { text: "Singleton Pattern", isCorrect: false },
      { text: "Decorator Pattern", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question: "What is the purpose of a 'cookie' in web development?",
    options: [
      {
        text: "Storing server-side information on the client-side",
        isCorrect: false,
      },
      {
        text: "Storing client-side information on the server-side",
        isCorrect: false,
      },
      { text: "Identifying and authenticating a user", isCorrect: true },
      { text: "Managing database transactions", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question: "What is the 'same-origin policy' in web security?",
    options: [
      {
        text: "A policy that prevents sharing resources between different origins",
        isCorrect: true,
      },
      {
        text: "A policy that allows sharing resources between different origins",
        isCorrect: false,
      },
      {
        text: "A policy that restricts access to server-side resources",
        isCorrect: false,
      },
      {
        text: "A policy that enforces HTTPS for all websites",
        isCorrect: false,
      },
    ],
    difficulty: "Medium",
  },
  {
    question:
      "What is the purpose of the 'addEventListener' method in JavaScript?",
    options: [
      { text: "Creating a new HTML element", isCorrect: false },
      {
        text: "Attaching an event handler function to an HTML element",
        isCorrect: true,
      },
      { text: "Modifying the styles of an HTML element", isCorrect: false },
      { text: "Removing an HTML element from the DOM", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    question:
      "Which programming language is often used for developing mobile applications?",
    options: [
      { text: "Java", isCorrect: false },
      { text: "C#", isCorrect: false },
      { text: "Swift", isCorrect: true },
      { text: "Ruby", isCorrect: false },
    ],
    difficulty: "Medium",
  }
];

const computerScienceHardQuizQuestions = [
  {
    question:
      "What is the purpose of the 'Observer Pattern' in software design?",
    options: [
      { text: "Creating objects", isCorrect: false },
      { text: "Defining interfaces", isCorrect: false },
      {
        text: "Defining a one-to-many dependency between objects",
        isCorrect: true,
      },
      { text: "Implementing algorithms", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    question: "Explain the principles of the SOLID object-oriented design.",
    options: [
      {
        text: "Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, Dependency Inversion Principle",
        isCorrect: true,
      },
      {
        text: "Simple Object Layout and Instantiation Design",
        isCorrect: false,
      },
      {
        text: "Secure Object Lifecycle and Integration Design",
        isCorrect: false,
      },
      {
        text: "Structured Object Language Integration and Development",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "What is the 'Halting Problem' in the context of theoretical computer science?",
    options: [
      {
        text: "A problem related to stopping a computer program before it finishes execution",
        isCorrect: false,
      },
      {
        text: "A problem of determining whether a given program with a specific input will eventually halt or continue indefinitely",
        isCorrect: true,
      },
      {
        text: "A problem related to optimizing program execution speed",
        isCorrect: false,
      },
      {
        text: "A problem of designing efficient algorithms for halting processes",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question: "Explain the concept of 'Virtual Memory' in operating systems.",
    options: [
      {
        text: "Memory that is virtually present but physically absent",
        isCorrect: true,
      },
      { text: "Memory used for virtual machines only", isCorrect: false },
      {
        text: "Memory dedicated to virtual reality applications",
        isCorrect: false,
      },
      { text: "Memory allocated for video processing", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    question: "What is the 'Traveling Salesman Problem' in computer science?",
    options: [
      {
        text: "A problem of finding the most efficient route for a traveling salesman",
        isCorrect: true,
      },
      {
        text: "A problem related to booking travel tickets online",
        isCorrect: false,
      },
      {
        text: "A problem of designing a sales management system",
        isCorrect: false,
      },
      { text: "A problem of optimizing sales strategies", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    question: "Explain the concept of 'MapReduce' in distributed computing.",
    options: [
      {
        text: "A programming language for mapping and reducing tasks",
        isCorrect: false,
      },
      {
        text: "A parallel programming model for processing large datasets across a distributed cluster of computers",
        isCorrect: true,
      },
      { text: "A file compression algorithm", isCorrect: false },
      {
        text: "A security protocol for mapping network addresses",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "What is the purpose of the 'CAP theorem' in distributed systems?",
    options: [
      {
        text: "A theory related to capital investments in IT infrastructure",
        isCorrect: false,
      },
      {
        text: "A theory stating that only two of the three characteristics—Consistency, Availability, and Partition Tolerance—can be achieved in a distributed system at the same time",
        isCorrect: true,
      },
      {
        text: "A theory on capitalizing profits in software development",
        isCorrect: false,
      },
      {
        text: "A theory on the capital structure of technology companies",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question: "Explain the concept of 'Dijkstra's Algorithm' in graph theory.",
    options: [
      {
        text: "An algorithm for finding the shortest path between two nodes in a graph",
        isCorrect: true,
      },
      { text: "An algorithm for encrypting graph data", isCorrect: false },
      {
        text: "An algorithm for visualizing graph structures",
        isCorrect: false,
      },
      { text: "An algorithm for sorting graph nodes", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "What is the 'P vs NP problem' in computational complexity theory?",
    options: [
      {
        text: "A problem of polynomial vs non-polynomial time complexity",
        isCorrect: true,
      },
      {
        text: "A problem of parallel vs non-parallel processing",
        isCorrect: false,
      },
      { text: "A problem of programming vs networking", isCorrect: false },
      {
        text: "A problem of practical vs non-practical algorithms",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "Explain the concept of 'Blockchain' in the context of cryptocurrencies.",
    options: [
      {
        text: "A chain of encrypted blocks used for secure communication",
        isCorrect: false,
      },
      {
        text: "A decentralized and distributed ledger technology used in cryptocurrencies",
        isCorrect: true,
      },
      {
        text: "A data structure for linking records in a linear format",
        isCorrect: false,
      },
      {
        text: "A programming paradigm for building block-based applications",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "What is the purpose of the 'Garbage Collection' process in programming languages?",
    options: [
      {
        text: "Collecting and recycling waste materials in the coding environment",
        isCorrect: false,
      },
      {
        text: "Automatically reclaiming memory occupied by objects that are no longer in use",
        isCorrect: true,
      },
      {
        text: "Sorting and organizing code files in a project",
        isCorrect: false,
      },
      { text: "Minimizing the size of executable files", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "Explain the concept of 'Reverse Engineering' in software development.",
    options: [
      {
        text: "The process of creating a mirror image of software code",
        isCorrect: false,
      },
      {
        text: "The process of analyzing and understanding the functionality of existing software",
        isCorrect: true,
      },
      {
        text: "The process of building software components in reverse order",
        isCorrect: false,
      },
      {
        text: "The process of undoing the changes made in software code",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "What is the purpose of the 'Huffman Coding' algorithm in data compression?",
    options: [
      {
        text: "A coding algorithm for secure data transmission",
        isCorrect: false,
      },
      {
        text: "A coding algorithm for text-to-speech conversion",
        isCorrect: false,
      },
      {
        text: "An optimal prefix coding algorithm for variable-length codes",
        isCorrect: true,
      },
      {
        text: "A coding algorithm for encrypting binary data",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question: "Explain the concept of 'Amdahl's Law' in parallel computing.",
    options: [
      {
        text: "A law describing the speedup achievable in parallel processing",
        isCorrect: true,
      },
      {
        text: "A law describing the limitations of single-core processors",
        isCorrect: false,
      },
      {
        text: "A law governing the distribution of processing power in a computer",
        isCorrect: false,
      },
      {
        text: "A law related to energy consumption in computing devices",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question: "What is the purpose of the 'Chaos Theory' in computer science?",
    options: [
      {
        text: "A theory related to unpredictable events in computer systems",
        isCorrect: false,
      },
      {
        text: "A theory describing the behavior of chaotic algorithms",
        isCorrect: false,
      },
      {
        text: "A theory studying the behavior of dynamic systems that are highly sensitive to initial conditions",
        isCorrect: true,
      },
      {
        text: "A theory on the role of randomness in computer programming",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "Explain the concept of 'Concurrent Programming' in software development.",
    options: [
      {
        text: "A programming approach that focuses on executing one task at a time",
        isCorrect: false,
      },
      {
        text: "A programming approach that allows multiple tasks to run in overlapping time intervals",
        isCorrect: true,
      },
      {
        text: "A programming approach that prioritizes sequential execution of tasks",
        isCorrect: false,
      },
      {
        text: "A programming approach that eliminates all forms of parallelism",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "What is the purpose of the 'Pigeonhole Principle' in computer science?",
    options: [
      {
        text: "A principle related to the storage of data in pigeonholes",
        isCorrect: false,
      },
      {
        text: "A principle stating that if you have more pigeons than pigeonholes, at least one pigeonhole must contain more than one pigeon",
        isCorrect: true,
      },
      {
        text: "A principle governing the use of pigeon images in user interfaces",
        isCorrect: false,
      },
      {
        text: "A principle related to the nesting behavior of pigeons",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "Explain the concept of 'Dynamic Programming' in algorithm design.",
    options: [
      {
        text: "A programming approach that constantly changes the programming language used in a project",
        isCorrect: false,
      },
      {
        text: "A programming approach that dynamically adjusts code structure during runtime",
        isCorrect: false,
      },
      {
        text: "A programming approach that solves complex problems by breaking them into simpler subproblems and storing their solutions",
        isCorrect: true,
      },
      {
        text: "A programming approach that relies on real-time program analysis",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "What is the 'Two-Phase Commit' protocol in distributed databases?",
    options: [
      {
        text: "A protocol for committing changes to a database in two phases: prepare and commit",
        isCorrect: true,
      },
      {
        text: "A protocol for simultaneously committing changes to two different databases",
        isCorrect: false,
      },
      {
        text: "A protocol for committing changes to a database in two phases: insert and update",
        isCorrect: false,
      },
      {
        text: "A protocol for committing changes to a database in two phases: read and write",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "Explain the concept of 'Shannon's Entropy' in information theory.",
    options: [
      {
        text: "A measure of information content in a message",
        isCorrect: true,
      },
      {
        text: "A measure of encryption strength in communication systems",
        isCorrect: false,
      },
      { text: "A measure of data compression efficiency", isCorrect: false },
      { text: "A measure of network latency", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    question:
      "What is the 'PageRank' algorithm used for in web search engines?",
    options: [
      { text: "Ranking web pages based on user engagement", isCorrect: true },
      {
        text: "Detecting and removing low-quality web pages",
        isCorrect: false,
      },
      { text: "Crawling and indexing web pages", isCorrect: false },
      { text: "Optimizing web page loading times", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    question: "What is the time complexity of the quicksort algorithm in the worst case?",
    options: [
      { text: "O(n)", isCorrect: false },
      { text: "O(n log n)", isCorrect: false },
      { text: "O(n^2)", isCorrect: false },
      { text: "O(n log n) on average, O(n^2) in the worst case", isCorrect: true },
    ],
    difficulty: "Hard",
  },
  {
    question: "What is the purpose of the 'Singleton' design pattern in object-oriented programming?",
    options: [
      { text: "To create a single instance of a class", isCorrect: true },
      { text: "To enforce encapsulation", isCorrect: false },
      { text: "To implement polymorphism", isCorrect: false },
      { text: "To handle exceptions", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    question: "What is the significance of the 'Big O' notation in algorithm analysis?",
    options: [
      { text: "It represents the best-case runtime of an algorithm", isCorrect: false },
      { text: "It provides an upper bound on the growth rate of an algorithm's runtime", isCorrect: true },
      { text: "It measures the actual runtime of an algorithm", isCorrect: false },
      { text: "It indicates the space complexity of an algorithm", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      { text: "A data structure for storing key-value pairs", isCorrect: false },
      { text: "A way to prevent code injection attacks", isCorrect: false },
      { text: "A function that has access to variables from its outer scope", isCorrect: true },
      { text: "A mechanism for handling asynchronous operations", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    question: "What is the purpose of the A* algorithm in pathfinding?",
    options: [
        { text: "To find the maximum flow in a network", isCorrect: false },
        { text: "To determine the shortest path in a weighted graph", isCorrect: true },
        { text: "To balance load in distributed systems", isCorrect: false },
        { text: "To perform image recognition in machine learning", isCorrect: false },
    ],
    difficulty: "Hard",
  }

];
var questionElement = document.getElementById("questionElement");
var option_container = document.getElementById("options_container");
var next_button = document.getElementById("next_button");


var previousQuestionIndex = [];
var currentQuestionIndex;
var score = 0;
var qindex = 0;
var qNo = 0;
var QuestionsArray;


//bg audio
var bg_audio = document.getElementById("bg_audio")
bg_audio.play()

//click audio
var correct_click = document.getElementById("correct_audio")
var wrong_click = document.getElementById("wrong_audio")


// This function is called when a user selects a difficulty level, and gives the index of the selected difficulty. 
// see html to find how the index is fetched

function selectQuestions(index) {
  qindex = index;                   // assigns the fetched index to the variable "qindex" that is by default "0"
  localStorage.setItem("selectedDifficulty", qindex);   //sets fetched index in the local storage with key "selectedDifficulty".
  document.location.href = "game.html";

}


// This event listener checks that the code inside it is executed only after the DOM has been fully loaded.
// Or else it will execute before getting loaded which may cause unexpected behaviors.
document.addEventListener("DOMContentLoaded", function () {   
  
 // The "parseInt()" function is used to parse a string and convert it into an integer.
 //  it is applied to the value retrieved from local storage, ensuring that the value is treated as an integer.

 //"localStorage.getItem("selectedDifficulty")" Here we are using the key value to get the index value we stored before using "setItem" 

 //"|| 0" this OR gate("||") will ensure that the getvalue is not a "null","zero", "undefined" or an "empty string". if it is then it will return "0" 
 
  const selectedDifficulty =
    parseInt(localStorage.getItem("selectedDifficulty")) || 0;

// We use switch case to assign the questions and options inside the selected difficulty index
  switch (selectedDifficulty) {
    case 0:                                     //if qindex "0" beginner questions 
      QuestionsArray = easyquizQuestions;
      break;
    case 1:                                     // if qindex "1"  intermediate questions
      QuestionsArray = computerScienceMediumQuizQuestions;
      break;
    case 2:                                     // if qindex "2" veteran questions
      QuestionsArray = computerScienceHardQuizQuestions;
      break;
    default:                                    // the default is "0" when no other indices are found
      QuestionsArray = easyquizQuestions; 
  }


  startgame();
});


//This is the main function of this game

function startgame() {
  let newQuestionIndex;     // this variable is to store the random numbers generated

  // The purpose of this condition is to check weather no 2 questions and options are repeated while game play.

  // using a do-while loop we check weather repeated numbers are present inside the "previousQuestionIndex array"
 // Before that we declare a variable "currentQuestioinIndex"(line:1102) which is the main question index

  do {
    newQuestionIndex = Math.round(Math.random() * 24); 
  } while (previousQuestionIndex.includes(newQuestionIndex));

  currentQuestionIndex = newQuestionIndex;
  previousQuestionIndex.push(currentQuestionIndex);

  showquestions();

  next_button.style.display="none";

}

 //This function displays the question and its option 
function showquestions() {
  resetState();

  // Check if QuestionsArray is defined and has the expected length
  if (QuestionsArray && QuestionsArray.length > currentQuestionIndex) {

    // This variable stores the generated random question "currentQuestionIndex" for the desired difficulty level.
    // at frist we will get to know what difficulty the player has chosen then we access one random question from the selected difficulty and store it in a variabele "currentQuestion"
    let currentQuestion = QuestionsArray[currentQuestionIndex];

    // Check if currentQuestion is defined and has the 'question' property
    if (currentQuestion && currentQuestion.question) {
      questionElement.innerHTML = currentQuestion.question;

      // This condition is to choose the desired options
      // first check if currentQuestion.options is an array
      if (Array.isArray(currentQuestion.options)) {
        currentQuestion.options.forEach((option) => {
          const button = document.createElement("button");
          button.innerHTML = option.text;
          button.classList.add("optionElements");
          option_container.appendChild(button);

          if (option.isCorrect) {
            button.dataset.isCorrect = option.isCorrect;
          }

          button.addEventListener("click", showresult);
        });
      } else {
        console.error("Current question options are not an array:", currentQuestion);
      }
    } else {
      console.error("Current question or its 'question' property is undefined:", currentQuestion);
    }
  } else {
    console.error("QuestionsArray is undefined or does not have enough questions:", QuestionsArray);
  }
}

// Function to reset the state for the next question
function resetState() {
  qNo++; // Increment the question number
  console.log(qNo);

  // Check if the question element exists
  if (questionElement) {
    questionElement.innerHTML = ""; // Clear the inner HTML of the question element
  } else {
    console.error("questionElement is null or undefined"); 
  }

  // Remove all child elements from the options container
  while (option_container.firstChild) {
    option_container.removeChild(option_container.firstChild);
  }
}

// Function to handle the result when a user selects an option
function showresult(e) {
  const selectedOption = e.target; // Get the selected option
  const isCorrect = selectedOption.dataset.isCorrect === "true"; // Check if the selected options isCorrect value is "true" and store it in a variable

  // If the selected option is correct, add the "correct" class and increment the score
  if (isCorrect) {
    selectedOption.classList.add("correct");
    correct_click.pause();
    correct_click.currentTime = 0;
    correct_click.play();

    score++;
  } else {
    // If the selected option is incorrect, add the "incorrect" class
    selectedOption.classList.add("incorrect");
    wrong_click.pause();
    wrong_click.currentTime = 0;
    wrong_click.play();

  }

  // Iterate through each option button
  Array.from(option_container.children).forEach((button) => {
    // If the button represents a correct option, add the "correct" class
    if (button.dataset.isCorrect) {
      button.classList.add("correct");
    }
    // Disable all option buttons
    button.disabled = true;
  });

  // Display the next button after a user selects an option
  next_button.style.display = "block";
}

// Event listener for the next button click
next_button.addEventListener("click", () => {

  // Check if there are more questions remaining
  if (qNo <= 9) {
    startgame(); // Start the next question
    next_button.style.display = "none"; // Hide the next button
  } else {
    showScore(); // If all questions are answered, display the final score
  }
});

// Function to display the final score and redirect to the result page
function showScore() {
  localStorage.setItem("score", score); // Store the final score in local storage
  window.location.href = "./result.html"; // Redirect to the result page
}
