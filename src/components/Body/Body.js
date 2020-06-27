import React, { Component } from 'react';

class ButtonLink extends Component
{
  render()
  {
    return <a href={this.props.link} className="button">{this.props.text}</a>;
  }
}

class TextAndLink extends Component
{
  render() 
  {
    return(
      <div className="col-4 col-12-medium">
        <section>
          <h2>{this.props.title}</h2>
          <p>{this.props.children}</p>
          <footer className="controls">
            <ButtonLink link={this.props.link} text={this.props.buttonText} />
          </footer>
        </section>
			</div>
    );
  }
}

class SmallImageList extends Component 
{
  render() 
  {
    const entries = [];
    
    this.props.pics.forEach((pic) => {
      entries.push(
        <li>
          <a href={pic.link}><img src={pic.image} alt="" className="left" /></a>
          <h4>{pic.name}</h4>
          <p>{pic.body}</p>
        </li>
      );
    });

    return(
      <div className="col-4 col-6-medium col-12-small">
        <section>
          <h2>{this.props.title}</h2>
          <ul className="small-image-list">
            {entries}
          </ul>
        </section>
      </div>
    );
  }
}

/*class LinkList extends Component 
{
  render() 
  {
    const columns = [];

    this.props.linkCols.forEach((col) => {
      const curCol =[];
      col.forEach((link) => {
        curCol.push(
          <li><a href={link.link}>{link.text}</a></li>
        );
      });

      columns.push(
        <div className="col-6 col-12-small">
          <ul className="link-list">
            {curCol}
          </ul>
        </div>
      );
    });

    return(
      <div className="col-4 col-6-medium col-12-small">
        <section>
          <h2>{this.props.title}</h2>
          <div>
            <div className="row">
              {columns}
            </div>
          </div>
        </section>
      </div>
    );
  }
}*/

class LargeImageList extends Component
{
  render()
  {
    const entries = [];
    
    this.props.entries.forEach((entry) => {
      entries.push(
        <li>
          <a href={entry.link}><img src={entry.image} alt="" className="left" /></a>
          <h3>{entry.title}</h3>
          <p>{entry.body}</p>
        </li>
      );
    });

    return(
      <div className="col-6 col-12-medium">
        <section>
          <h2>{this.props.title}</h2>
          <p>{this.props.mainBody}</p>
          <ul className="big-image-list">
            {entries}
          </ul>
        </section>
      </div>
    );
  }
}

class BlogPost extends Component
{
  render()
  {
    return(
      <div className="col-6 col-12-medium">
        <article className="blog-post">
          <h2>{this.props.title}</h2>
          <a href={this.props.imageLink}><img src={this.props.image} alt="" className="top blog-post-image" /></a>
          <h3>{this.props.subtitle}</h3>
          <p>{this.props.children}</p>
          <footer className="controls">
            <ButtonLink link={this.props.link} text={this.props.linkText} />
          </footer>
        </article>
      </div>
    );
  }
}

class Body extends Component
{
  render() 
  {
    return(
      <div id="main">
				<div className="container">
					<div className="row main-row">
            <SmallImageList title="Who am I?" pics={[{link:"/#", image: "images/NicePic.png", name: "Joseph Paul Fiore",
              body: "I am a current Honors student at NJIT Majoring in Computer Science and Minoring in Applied Mathematics."}]} />

            <TextAndLink title="My Education" link="https://www.youtube.com/channel/UCUIlwhmEF9lpBjBm5EUG3kA/videos" buttonText="NJIT Math Club YouTube">
              I am currently working on my BS in Computer Science at <a href="https://www.njit.edu/">The New Jersey Institute of Technology</a>.  I 
              have been on the Dean's List in each semester since I started attending and currently have a 4.0 GPA.
              In fall 2020, I will begin taking Master's level courses in order to get a head start when 
              I start working on my MS after graduating. Outside of Academics, I am a member of the NJIT chapter of the ACM
              and edit YouTube videos for the Math Club.
            </TextAndLink>

            <SmallImageList title="My Values" pics={[{link: "/#", image: "images/pic1.jpg", name: "Work Ethic",
              body: "I believe the before anything else, you must always fulfill your commitments.  Once you agree to do something you must see it through to its conclusion.  My assignments are always completed ahead of schedule."},
              {link: "/#", image: "images/pic2.jpg", name: "Personal Values",
              body: "Honest and clear communication is one of the most important skills to have.  Before everything else, the ability to share ideas clearly and concisely, while remaining honest, will make any task significantly easier."}]} />

            <LargeImageList title="Projects" mainBody="Below are listed a few of the projects I have worked on and brief descriptions of what they were." 
              entries={[
              {link: "/#", image: "images/pic1.jpg",
              title: "Personal Site",
              body: "As written elsewhere on this page, this site is a personal project of mine.  I took a template site provided by html5up.net and translated it into React.  I also edited the some of the site's format to fit my needs better."},
              {link: "/#", image: "images/pic3.jpg",
              title: "Encrypted Messaging Project", 
              body: "Written in Python, I programmed a server and client set up that would allow messaging between different clients.  I implemented a number of cybersecurity techniques to make the set up as secure as possible, including end-to-end encryption, user authentication, and server authentication."},
              {link: "/#", image: "images/pic4.jpg",
              title: "Hack NJIT 2019 Project", 
              body: "This project was completed in a three person team in 24 hours utilizing Python, SQL, HTML, CSS, and the Google Cloud.  The project would take in a user's Pizza order and output recomendations for movies to pair with it."},
              {link: "/#", image: "images/pic5.jpg",
              title: "Hack NJIT 2017 Project", 
              body: "This project was completed in a 4 person team utilizing Android Studio.  The team developed an app that would assist in studying by blocking incoming messages and alerts during a preset period of time."},
              {link: "/#", image: "images/pic3.jpg",
              title: "Logan Hall Library Project",
              body: "A non-programming project I conducted in 2016.  The project was collecting a large amount of books for the purpose of donating to the Logan Hall Halfway Home in Newark, NJ.  To conduct the project, I had to spend weeks spreading the word and eventually lead a group of over 50 people to sort and deliver the books."}]}/>
						
						<BlogPost title="Non-Computer Interests" imageLink="/#" image="images/pic6.jpg"
              subtitle="What I enjoy" link="/#" linkText="Reviews">
              Outside of academia and Computer Science I have other interests.  My biggest hobby is baking, 
              I love spending hours on a recipe making sure I get everything right and being able to share the 
              fruits of my labor at the end.  I'm always on the lookout for new things to make and expand my skils.  
              I am also a big fan of animation and video games, I greatly enjoy analyzing the media that I enjoy so 
              that I am able to have detailed, in depth discusions about my thoughts and feelings on specific subjects.
              Additionally, I enjoy reading theory behind these artforms so I can better appreciate the effort and skill 
              that goes into crafting such incredible projects.  In general, I like breaking down my emotions on art, which 
              is why I also enjoy writing brief reviews of the movies I see.  Whenever I see a movie in the year it comes out,
              I write a brief review going over my thoughts on the quality and meanning of the movie.  The link below will 
              lead you to some of these reviews.
            </BlogPost>
            
          </div>
				</div>
			</div>
    );
  }
}

export default Body;
