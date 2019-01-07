import React, { Component } from 'react';
import { Badge, ButtonToolbar, Button } from 'react-bootstrap';
import './css/bootstrap-neon-glow.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron bg-transparent mb-0 radius-0">
          <div className="container">
            <div className="row">
              <div className="col-xl-10">
                <h1 className="display-2">Neon Glo<span className="vim-caret">w</span></h1>
                <div className="lead mb-3 text-mono text-success">This is a starter template with a jumbotron</div>
                <div className="text-mono">
                  <a href="#!"
                    title="Download Theme"
                    className="btn btn-success btn-shadow px-3 my-2 ml-0 text-left">
                    A Button
                    </a>
                  <a href="#!"
                    className="btn btn-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left">
                    Another Button
                    </a>
                </div>
                <div className="text-darkgrey text-mono my-2">Some muted text</div>
                <p className="mt-5 text-grey text-spacey">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, dignissimos provident. Alias, aliquid, cum cumque deleniti dignissimos eos exercitationem explicabo illum inventore laboriosam nihil nobis nostrum praesentium recusandae sequi, sint!
                </p>

                {/* Card */}
                <div className="card bg-primary text-white mb-3 text-center">
                  <div className="card-body">
                    <blockquote className="card-blockquote">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                      ante. Integer posuere erat a ante.</p>
                      <footer>Someone famous in
                      <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>


                {/* Jumbotron */}
                <div className="jumbotron">
                  <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-4" />
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <a className="btn btn-primary" href="#!" role="button">Learn more</a>
                  </p>
                </div>

                <p>
                  Badges <Badge bsClass="badge badge-primary">42</Badge>
                </p>

                <ButtonToolbar>
                  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                  <Button bsStyle="btn btn-primary btn-shadow px-3 my-2 ml-0 text-left">Primary</Button>

                  {/* Indicates a successful or positive action */}
                  <Button bsStyle="btn btn-success btn-shadow px-3 my-2 ml-0 text-left">Success</Button>

                  {/* Contextual button for informational alert messages */}
                  <Button bsStyle="btn btn-info btn-shadow px-3 my-2 ml-0 text-left">Info</Button>

                  {/* Indicates caution should be taken with this action */}
                  <Button bsStyle="btn btn-warning btn-shadow px-3 my-2 ml-0 text-left">Warning</Button>

                  {/* Indicates a dangerous or potentially negative action */}
                  <Button bsStyle="btn btn-danger btn-shadow px-3 my-2 ml-0 text-left">Danger</Button>

                  {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
                  <Button bsStyle="link">Link</Button>
                </ButtonToolbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
