import { Component } from 'react';
import './toolbar.css';

export default class Toolbar extends Component {

    render() {
        const { filters, selected } = this.props;
        return (
            <nav className={'portfolio-toolbar'}>
                <ul className={'toolbar-list'}>
                    {filters.map((filter) =>
                        <li key={filter}>
                            <button
                                className={
                                    'toolbar-btn' + `${filter === selected ? ' toolbar-btn-selected' : ''}`
                                }
                                onClick={() => this.props.onSelectFilter(filter)}
                            >{filter}</button>
                        </li>)}
                </ul>
            </nav>
        )
    }
}