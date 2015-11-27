import React from 'react';

export default class Application extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render() {
    return (
      <main>
        <header>
          <nav>
          </nav>
        </header>
        {this.props.children}
        <footer>
        </footer>
      </main>
    );
  }
}
