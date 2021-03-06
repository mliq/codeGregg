import React, { Component } from 'react';

export default class Bio extends Component {
  componentDidMount() {
    window.twttr = (function(d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      const t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    })(document, 'script', 'twitter-wjs');
  }

  render() {
    return (
      <div>
        <p>
          Written by <strong>Matt Gregg</strong>, a UI engineer who lives and
          works in Minneapolis, MN
        </p>
        <p>
          Have something to say about this post? Tweet at me{' '}
          <a
            href='https://twitter.com/intent/tweet?screen_name=itwasmattgregg&ref_src=twsrc%5Etfw'
            className='twitter-mention-button'
            data-text={`${this.props.location}`}
            data-show-count='true'
          >
            @itwasmattgregg
          </a>
        </p>
      </div>
    );
  }
}
