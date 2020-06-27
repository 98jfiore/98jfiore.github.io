import React, { Component } from 'react';

class HeadButton extends Component
{
	render()
	{
		if (this.props.current === this.props.text)
		{
			return(
				<a href={this.props.link} className="current-page-item">{this.props.text}</a>
			)
		}
		else
		{
			return(
				<a href={this.props.link}>{this.props.text}</a>
			)
		}
	}
}

class HeadBar extends Component
{
	render()
	{
		return(
			<header id="header">
				<h1><a href="index.html" id="logo">Fiore</a></h1>
				<nav id="nav">
					<HeadButton link="index.html" text="Homepage" current={this.props.at} />
					<HeadButton link="twocolumn1.html" text="Two Column #1" current={this.props.at} />
					<HeadButton link="twocolumn2.html" text="Two Column #2" current={this.props.at} />
					<HeadButton link="onecolumn.html" text="One Column" current={this.props.at} />
					<HeadButton link="threecolumn.html" text="Three Column" current={this.props.at} />
				</nav>
			</header>
		);
	}
}

class Header extends Component 
{
  render() {
    return (
    	<div id="header-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<HeadBar at="Homepage"/>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Header;
