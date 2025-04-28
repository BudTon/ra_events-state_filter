import { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import ProjectList from './components/ProjectList/ProjectList';
import projects from './components/projects';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
    this.state = {
      selected: this.filters[0],
    }
  }

  onSelectFilter = (filter) => {
    if (this.state.selected === filter) return;
    this.setState({ selected: filter });
  }

  getFilteredProjects = () => {
    return projects
      .filter((project) => {
        if (this.state.selected === 'All') return true;
        return project.category === this.state.selected;
      })
      .map((project) => project.img)
  }

  render() {
    return (
      <div className={'portfolio'}>
        <h1>2. Состояние компонентов</h1>
        <h2>2.1 Портфолио с фильтрами</h2>
        <Toolbar
          filters={this.filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={this.getFilteredProjects()} selected={this.state.selected} />
      </div>
    )
  }
}