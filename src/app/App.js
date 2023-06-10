
import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../not-found/noRouteFound';
import { Result } from '../result/result';
import { Questions } from '../questions/questions';
import jsondata from '../question.json';

export class App extends React.Component {
 
  constructor(props) {
    super(props);
   var self = jsondata.questions;
this.state = {questions:self, resultArray: []};

console.log(this.state.questions.length)

    console.log(this.state);
  }





  updateResultArray = (id, result) => {
    this.setState(prevState => {
      let newResultArray = [...prevState.resultArray];
      newResultArray[id] = result;
      return {resultArray: newResultArray};
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Do you know the answer?       
          </h1>
          <Switch>
            <Route
              path="/questions/:id"
              render={(props) => <Questions {...props} updateResultArray={this.updateResultArray} questions={this.state.questions} />}
            />
            <Route
              path="/result"
              render={(props) => <Result {...props} resultArray={this.state.resultArray} />}
            />

            <Route component={NotFound} />
          </Switch>
        </header>
      </div>
    );
  }
}
