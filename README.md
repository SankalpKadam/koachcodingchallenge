# Koach Coding Challenge

Candidate - ***Sankalp Kadam***
Deployment Link - _https://koach-coding-challenge.vercel.app/_

### Technologies Used -
_React_, _JavaScript_, _HTML_, _CSS_, _Vercel (For Deployment)_

### Process

1. Designing in Figma - Used Figma to develop a mock UI to have an idea of the webpage before starting to develop the frontend application
2. Deciding on the component structure - Just decided the components I was going to use to make the frontend.
    - HomePage - Renders the list of available users
    - UserPage - Renders details and activities of each user
3. Started by working on the UserPage since it was the most crucial requirement. Established responsive UI and integrated demo API calls to render demo data.
4. Developed loading skeleton and added delay to network request to show those loading screens.
5. Then started to work on HomePage, to render a list of users.
6. Properly integrated the given API to fetch dynamic data.
7. Performed manual testing to ensure proper error handling.
8. Resolved the found issues and ensured no warnings existed for proper deployment.
9. Chose vercel to deploy the project, since it has integration with github and redeploys the entire application whenever any new features are released.

### Steps to run on local

1. Ensure you have node and npm installed
   `npm --version && node --version`
2. Clone the source code from github
   `git clone https://github.com/SankalpKadam/koachcodingchallenge.git`
3. In the code directory, install all the necessary packages
    `npm install`
4. Start the application
    `npm run start`

### Improvements

1. One improvement I can think of is the implementation of ***useMemo*** hook to reduce the number of API calls and thus optimize the web performance.
2. Implementation of unit testing by using jest.

### My thoughts behind the design

_Assumptions_ and how they align with my design
1. 
    - The post can contain futher details like media, larger text, so it would be better to have a list to display a short version of it and then clicking on it can show the full version in a new page. 
    - Hence, I decided to implement a accordion like component for the user activities.
2. 
    - The user profile has no photo for now, but it can have it later.
    - So, I adopted a vertical stacking layout to support adding of new data in the future.
