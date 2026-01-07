import {
  FlaskConical,
  Calculator,
  Palette,
  Drama,
  History,
  Globe2,
  Swords,
  Mic,
  Bot,
  Film,
  BookOpenCheck,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/departments", label: "Departments" },
  { href: "/clubs", label: "Clubs" },
  { href: "/facilities", label: "Facilities" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const featuredContent = [
  {
    title: "Innovate & Inspire",
    description: "Discover a place where curiosity meets innovation. Join our community of learners and leaders.",
    link: "/about",
    imageId: "carousel-1",
  },
  {
    title: "A World of Opportunities",
    description: "From state-of-the-art labs to a vibrant campus life, find your passion at TMSL.",
    link: "/facilities",
    imageId: "carousel-2",
  },
  {
    title: "Your Future Starts Here",
    description: "Achieve your dreams with our world-class faculty and comprehensive programs.",
    link: "/departments",
    imageId: "carousel-3",
  },
];

type Department = { name: string; description: string; icon: LucideIcon };
export const departments: Department[] = [
  {
    name: "Science",
    description: "Exploring the frontiers of biology, chemistry, and physics.",
    icon: FlaskConical,
  },
  {
    name: "Mathematics",
    description: "The language of the universe, from algebra to topology.",
    icon: Calculator,
  },
  {
    name: "Fine Arts",
    description: "Cultivating creativity through painting, sculpture, and design.",
    icon: Palette,
  },
  {
    name: "Performing Arts",
    description: "Express yourself on the stage through drama and music.",
    icon: Drama,
  },
  {
    name: "History",
    description: "Understanding the past to shape a better future.",
    icon: History,
  },
  {
    name: "Global Studies",
    description: "Engaging with diverse cultures and global challenges.",
    icon: Globe2,
  },
];

type Club = { name: string; description:string; icon: LucideIcon };
export const clubs: Club[] = [
    {
        name: "Debate Club",
        description: "Sharpen your arguments and public speaking skills.",
        icon: Mic,
    },
    {
        name: "Robotics Club",
        description: "Build and program the machines of the future.",
        icon: Bot,
    },
    {
        name: "Film Club",
        description: "Discuss and analyze the art of cinema from around the world.",
        icon: Film,
    },
    {
        name: "Literary Society",
        description: "For lovers of books, poetry, and creative writing.",
        icon: BookOpenCheck,
    },
    {
        name: "Historical Reenactment",
        description: "Bring history to life with costumes and staged events.",
        icon: Swords,
    }
];

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageId: string;
};
export const teamMembers: TeamMember[] = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    bio: "Alex is a full-stack wizard with a passion for clean code and delightful user experiences.",
    imageId: "team-1",
  },
  {
    name: "Brenda Smith",
    role: "UI/UX Designer",
    bio: "Brenda crafts beautiful, intuitive interfaces that are accessible to all.",
    imageId: "team-2",
  },
  {
    name: "Charles Brown",
    role: "Frontend Specialist",
    bio: "Charles turns designs into reality with cutting-edge web technologies and a keen eye for detail.",
    imageId: "team-3",
  },
  {
    name: "Diana Green",
    role: "Backend Engineer",
    bio: "Diana builds robust and scalable systems that power our applications seamlessly.",
    imageId: "team-4",
  },
  {
    name: "Ethan White",
    role: "Project Manager",
    bio: "Ethan keeps the team on track, ensuring projects are delivered on time and to the highest standard.",
    imageId: "team-5",
  },
];

type Facility = { name: string; description: string; imageId: string };
export const facilities: Facility[] = [
    {
        name: "Grand Library",
        description: "Home to thousands of books, digital archives, and quiet study spaces.",
        imageId: "facility-library"
    },
    {
        name: "Athletics Center",
        description: "A modern gym with courts, a swimming pool, and fitness classes.",
        imageId: "facility-gym"
    },
    {
        name: "Innovation Lab",
        description: "Equipped with the latest technology for scientific research and discovery.",
        imageId: "facility-lab"
    },
    {
        name: "Victory Stadium",
        description: "The heart of our sports events, with a seating capacity of 10,000.",
        imageId: "facility-stadium"
    }
];

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageId: string;
};

export const blogPosts: BlogPost[] = [
    {
        slug: "breakthrough-in-quantum-research",
        title: "Breakthrough in Quantum Research by TMSL Students",
        excerpt: "Our physics students have published a groundbreaking paper on quantum entanglement, challenging existing theories and opening new doors for research...",
        content: "<p>Our physics students have published a groundbreaking paper on quantum entanglement, challenging existing theories and opening new doors for research. The study, led by Dr. Evelyn Reed, involved a team of five undergraduate students who spent two years conducting experiments in our state-of-the-art Innovation Lab.</p><p>Their findings suggest that information can be transmitted between entangled particles at speeds faster than previously thought possible, a concept that could revolutionize fields from computing to communication. The paper has been accepted by the prestigious 'Journal of Modern Physics' and is already making waves in the scientific community.</p><p>\"This is a testament to the incredible talent and dedication of our students,\" said Dr. Reed. \"They have shown that with curiosity and the right resources, undergraduates can make significant contributions to science.\"</p>",
        author: "Dr. Evelyn Reed",
        date: "October 26, 2023",
        imageId: "blog-1",
    },
    {
        slug: "annual-arts-festival-a-resounding-success",
        title: "Annual Arts Festival a Resounding Success",
        excerpt: "The campus was alive with color, music, and creativity during our annual Arts Festival. This year's theme, 'Horizons', inspired a wide range of stunning works...",
        content: "<p>The campus was alive with color, music, and creativity during our annual Arts Festival. This year's theme, 'Horizons', inspired a wide range of stunning works from students in the Fine Arts and Performing Arts departments.</p><p>Highlights included a collaborative sculpture garden, a one-act play festival, and a packed-out concert featuring student bands and the university orchestra. The festival culminated in an awards ceremony recognizing outstanding achievements in various categories.</p><p>\"The Arts Festival is a vibrant celebration of the creativity that thrives at TMSL,\" said Dean of Arts, Marcus Thorne. \"It's a wonderful opportunity for our students to share their passion with the entire community.\"</p>",
        author: "Campus Life Weekly",
        date: "September 15, 2023",
        imageId: "blog-2",
    },
    {
        slug: "alumni-spotlight-jane-doe-ceo",
        title: "Alumni Spotlight: Jane Doe, from TMSL to CEO",
        excerpt: "We catch up with TMSL alumna Jane Doe (Class of '05), who recently became the CEO of a leading tech company, Innovate Corp. She shares her journey and advice...",
        content: "<p>We catch up with TMSL alumna Jane Doe (Class of '05), who recently became the CEO of a leading tech company, Innovate Corp. She shares her journey and advice for current students.</p><p>Jane credits her time at TMSL, particularly her involvement in the Debate Club and her Global Studies major, for giving her the skills to succeed in the competitive tech world. \"TMSL taught me how to think critically, communicate effectively, and understand different perspectives,\" she said in a recent interview.</p><p>Her advice to students? \"Don't be afraid to take risks and pursue your passions, even if they seem unrelated to your career path. The skills you learn along the way are invaluable.\"</p>",
        author: "Alumni Association",
        date: "August 02, 2023",
        imageId: "blog-3",
    },
    {
        slug: "top-5-study-tips-for-final-exams",
        title: "Top 5 Study Tips for Final Exams",
        excerpt: "As finals week approaches, our Academic Success Center shares their top five tips to help you prepare effectively and reduce stress...",
        content: "<p>As finals week approaches, our Academic Success Center shares their top five tips to help you prepare effectively and reduce stress.</p><ol><li><strong>Create a Study Schedule:</strong> Plan out your study sessions for each subject. Consistency is key.</li><li><strong>Practice Active Recall:</strong> Don't just re-read your notes. Quiz yourself or try to explain concepts to a friend.</li><li><strong>Take Regular Breaks:</strong> Use techniques like the Pomodoro method (25 minutes of study, 5 minutes of break) to stay fresh.</li><li><strong>Prioritize Sleep:</strong> A well-rested brain performs better. Aim for 7-9 hours of sleep per night.</li><li><strong>Use Campus Resources:</strong> Visit the Grand Library for quiet study, or book a session with a tutor at the Success Center.</li></ol><p>Good luck with your exams!</p>",
        author: "Academic Success Center",
        date: "December 01, 2023",
        imageId: "blog-4"
    }
];
