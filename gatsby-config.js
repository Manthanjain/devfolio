module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://manthanjain.netlify.app/`,
    // Your Name
    name: 'Manthan Jain',
    // Main Site Title
    title: `Manthan Jain | Assocaite QA Engineer`,
    // Description that goes under your name in main bio
    description: `Hi, thanks for dropping by. `,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/Manthanjain`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/manthanjain/`,
    // Content of the About Me section
    about: `I am a QA engineer and an aspiring developer with 1 year of experience in automation testing. I have explored many testing tools indepth that might help organisations move their testing process from manual to automation.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Resume Builder using Django',
        description:'A simple website made in Django(Python) to help users build resumes using simple forms',
        link: '',
      },
      {
        name: 'Internet Traffic Classification',
        description:'A machine learning classification model using Naive Bayes Algorithm on the Internet traffic classification dataset to classify the type of request made on the internet. Different type of internet request is basically about identifying whether the traffic was an HTTP or multimedia or from services etc.',
        link: '',
      },
      {
        name: 'Recommendation System',
        description:'Movie recommender systems using collaborative filtering on public datasets (Movie Lens dataset)',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Mitel Networks',
        description: 'Associate QA Engineer, Nov 2020 - Present',
        link: '',
      },
      {
        name: 'Mitel Networks',
        description: 'Software Engineer Intern, Jan 2020 - June 2020',
        link: '',
      },
      
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C++, Python',
      },
      {
        name: 'Databases',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description:
          'Django, Anaconda, Jupyternotebook',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
