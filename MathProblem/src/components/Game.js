import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import RandomNumber from './RandomNumber';

class Game extends Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
    initialSeconds: PropTypes.number.isRequired,
    onPlayAgain: PropTypes.func.isRequired,
  };
  state = {
    selectedIds: [],
    timeRemaining: this.props.initialSeconds,
  };

  gameStatus = 'PLAYING';
  randomNumbers = Array.from({length: this.props.randomNumberCount})
                       .map(() => 1 + Math.floor(10 * Math.random()));
  target = this.randomNumbers
               .slice(this.props.randomNumberCount -2)
               .reduce((acc, curr) => acc + curr, 0);

  //got unreferenced Error for variable since this.randomNumbers was not used
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        return {timeRemaining: prevState.timeRemaining - 1};
      }, () => {
        if (this.state.timeRemaining === 0) {
          clearInterval(this.intervalId);
        }
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  isNumberSelected = (numberIndex) => {
    return this.state.selectedIds.indexOf(numberIndex) >= 0;
  };

  selectNumber = (numberIndex) => {
    this.setState((prevState) => ({
      selectedIds: [...prevState.selectedIds, numberIndex],
    }));
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextState.selectedIds !== this.state.selectedIds || nextState.timeRemaining === 0) {
      this.gameStatus = this.calcGameStatus(nextState);
      if (this.gameStatus !== 'PLAYING') {
        clearInterval(this.intervalId);
      }
    }
  }

  //gamestatus
  calcGameStatus = (nextState) => {
    const sumSelected = nextState.selectedIds.reduce((acc, curr) => {
      return acc + this.randomNumbers[curr];
    }, 0);
    if (nextState.timeRemaining === 0) {
      return 'LOST';
    }
    if (sumSelected < this.target) {
      return 'PLAYING';
    }
    if (sumSelected === this.target) {
      return 'WON';
    }
    if (sumSelected > this.target) {
      return 'LOST'
    }
  };
  render() {
    const gameResult = this.gameStatus;
    return (
      <View style={styles.container}>
         <Text style={[styles.target, styles[`STATUS_${gameResult}`]]}>{this.target}</Text>
         <View style={styles.randomContainer}>
           {this.randomNumbers.map((randomNumber, index) =>
              <RandomNumber
                key={index}
                id={index}
                number={randomNumber}
                isDisabled={this.isNumberSelected(index) || gameResult !== 'PLAYING'}
                onPress={this.selectNumber}
              />
           )}
         </View>
         {this.gameStatus !== 'PLAYING' && (<Button title="play again" onPress={this.props.onPlayAgain} />)}
         <Text>{this.state.timeRemaining}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1
  },
  target: {
    fontSize: 40,
    marginHorizontal: 50,
    textAlign: 'center',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
  STATUS_PLAYING: {
    backgroundColor: '#aaa',
  },
  STATUS_WON: {
    backgroundColor: 'green',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  },
});

export default Game;
