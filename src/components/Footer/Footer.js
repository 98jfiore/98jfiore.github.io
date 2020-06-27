import React, { Component } from 'react';

class Copyright extends Component
{
  render()
  {
    //Removed a <div className="row"> wrapper
    return(
      <div className="col-12">
        <div id="copyright">
          &copy; Untitled. All rights reserved. | Design: <a href="http://html5up.net">HTML5 UP</a>
        </div>
      </div>
    );
  }
}

class LinkColumn extends Component
{
  render()
  {
    const rows = [];

    this.props.links.forEach((hlink) => {
      rows.push(
        <li><a href={hlink.link}>{hlink.text}</a></li>
      );
    });

    return (
      <div className="col-3 col-6-medium col-12-small">
        <ul className="link-list">
          {rows}
        </ul>
      </div>
    );
  }
}

class LinkList extends Component
{
  render()
  {
    const Links1 = [
      {text: 'Twitter', link: "https://twitter.com/ImFioreous"}
    ];

    const Links2 = [
      {text: 'LinkedIn', link: "https://www.linkedin.com/in/joseph-fiore-151664175"}
    ];

    const Links3 = [
    ];

    const Links4 = [
    ];

    return (
      
      <div className="col-8 col-12-medium">                
        <section>
          <h2>Personal Links</h2>
          <div>
            <div className="row">
              <LinkColumn links={Links1} />
              <LinkColumn links={Links2} />
              <LinkColumn links={Links3} />
              <LinkColumn links={Links4} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

class LinkButton extends Component
{
  render()
  {
    return(
      <footer className="controls">
        <a href={this.props.link} className="button">{this.props.text}</a>
      </footer>
    );

  }
}

class TextSection extends Component
{
  render()
  {
    return(
      <div className="col-4 col-12-medium">
        <section>
          <h2>This Site</h2>
          <p>This site is based on a template provided by htmltup.net call minimaxing.
          It has been translated into React and edited by me.
          If you would like to view the original template click on the "template" buton below.
          If you would like to contact me, please do so at 98jfiore@gmail.com.</p>
          <LinkButton link="https://html5up.net/minimaxing" text="Template" />
        </section>
      </div>
    );
  }
}

class Footer extends Component
{
  render()
  {
    return(
      <div id="footer-wrapper">
        <div className="container">
          <div className="row">
            <LinkList />
            <TextSection />
          </div>

          <Copyright />

        </div>
      </div>
    );
  }
}


export default Footer;
