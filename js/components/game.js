export default class Game extends React.Component {
    constructor(props) {
    super(props);
        this.guessNumber = this.guessNumber.bind(this);
    }

    guessNumber(){
      const guessedNumber = this.guessNumberInput.value;
      //Add number to the state
    }

    render() {
        return (
            <div className="game-board">
                <input type="text" ref={ref => this.guessNumberInput = ref} />
                <button type="button" onClick={this.guessNumber}>
                    Guess a number
                </button>
            </div>
        );
    }
}
