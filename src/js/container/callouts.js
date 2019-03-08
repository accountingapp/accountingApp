import { Container } from 'unstated';
import axios from 'axios';

export default class CalloutsContainer extends Container {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
  }
  
  getAccounts(searchCriteria) {
    axios.post('/account', {description: searchCriteria})
    .then(results => {
      console.log("test: ", results);
      this.setState({
        searchResults: searchCriteria ? results.data.data : []
      })
    })
  };
}
