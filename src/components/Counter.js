import React, { Component, PropTypes } from 'react';
import players from './contacts'
export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      data: players,
      show: false
    }

    this.updateSearch = this.updateSearch.bind(this)
    this.findPlayer   = this.findPlayer.bind(this)
  }


  updateSearch(e) {

    this.setState({search: e.target.value})
  }

  displayPanel(e) {
    if (e.type == 'focus') {

      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }
  }

  findPlayer(e) {
    //if user pushes 'Enter'
    if (e.which == 13 || e.keyCode == 13) {
      //replace the input of the user into a list of pure strings that we can work with
      const filterWords = this.state.search.toLowerCase().replace(/['"]+/g, '').replace(/ +(?= )/g, '').split(' ')
      let data = players
      //create boolean to check if the string begins with 'minus' sign
      let reverse = true
      for (let word of filterWords) {
        if (word === 'all') {
          break
        }
        //check if word exists and that word is a string
        if (word && typeof word === 'string') {
          //check if word starts with a 'minus' sign, assign a boolean
          if (word[0] == '-' ) {
            reverse = false
            //get rid of the 'minus' sign
            word = word.substr(1)
          } else {
            reverse = true
          }
          //assign an empty list for the future filtered values
          let foundPlayers = []
          //if not a transfer value
          if (word[0] != '>' && word[0] !='<') {
            data.filter(
              (player) => {
                if (player.name.toLowerCase().indexOf(word.toLowerCase()) !== -1 ||
                    player.position.toLowerCase().indexOf(word.toLowerCase()) !== -1 ||
                    player.nationality.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
                      if (reverse) {
                        foundPlayers.push(player)
                      }

                    }  else if (!reverse) {
                        foundPlayers.push(player)
                    }
              }
            )
          }
          //if a transfer value - use another method of filtering
            else {
              data.filter(
                (player) => {
                    //replace the input string into a proper number
                    let number = parseInt(word.substr(1).replace(/[,.]/g , ''))
                    //check the case - whether 'bigger than' or 'smaller than'
                    switch (word[0]) {
                      case '>':
                        if (parseInt(player.marketValue.slice(0, -2).replace(/,/g , '')) > number) {foundPlayers.push(player)}

                        break;
                      case '<':
                          if (parseInt(player.marketValue.slice(0, -2).replace(/,/g , '')) < number) {foundPlayers.push(player)}
                        break;
                      }
                    }


            )
          }
          data = foundPlayers
       }
      }
      this.setState({
        data
      })
    }

  }


  render() {
    return (
      <div className="test-search">
        <input className="test-search__input"
               type="text"
                value={this.state.search}
                onChange={this.updateSearch}
                onKeyPress={this.findPlayer}
                autofocus='false'
                onFocus={this.displayPanel.bind(this)}
                onBlur={this.displayPanel.bind(this)} />


        {this.state.show ?
            <div className="test-search__popup">
              <div>Press <span className="popup-important">Enter</span> to get the results </div>
              <div>Type <span className="popup-important">All</span> to see the whole list</div>
            </div> : null}

        <div className="test-search__output">
          <ul>
            { this.state.data.length > 0 ? this.state.data.map((player) => (
              <li key={player.id}>
                <div className='player-name'>{player.name}</div>
                <div className='player-price'> Market price: {player.marketValue.slice(0, -2)}</div></li>
            )) : <li>Sorry, but no Chelsea player was found. Maybe you are an Arsenal fan?:) </li>}
          </ul>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
