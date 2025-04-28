import { Component } from 'react';
import './project-list.css'
import columnList from './ColumтList';

export default class ProjectList extends Component {
    render() {
        const { projects } = this.props;
        const columnOne = projects.filter((project, index) => {
            return index % 3 === 0;
        });
        const columnTwo = projects.filter((project, index) => {
            return (index + 2) % 3 === 0;
        });
        const columnThree = projects.filter((project, index) => {
            return (index + 1) % 3 === 0;
        });


        return (
            <div className={'project-list-portfolio'}>
                {columnList(columnOne)}
                {columnList(columnTwo)}
                {columnList(columnThree)}
            </div>  
        )
    }
}
