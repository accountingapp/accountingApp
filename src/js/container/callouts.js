import { Container } from 'unstated';
import axios from 'axios';

export default class CalloutsContainer extends Container {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
  }
  
  getAccountByDescription(searchCriteria) {
    axios.get(`/accountDescription/${searchCriteria}`)
    .then(results => {
      this.setState({
        searchResults: searchCriteria ? results.data : []
      })
    })
  };

  getOwnerByName(searchCriteria) {
    axios.get(`/userName/${searchCriteria}`)
    .then(results => {
      this.setState({
        searchResults: searchCriteria ? results.data : []
      })
    })
  };

  getProcessByTitle(searchCriteria) {
    axios.get(`/processTitle/${searchCriteria}`)
    .then(results => {
      this.setState({
        searchResults: searchCriteria ? results.data : []
      })
    })
  };
}
