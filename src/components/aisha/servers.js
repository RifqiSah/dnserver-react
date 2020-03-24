import React, { Component } from 'react'
import axios from '../../axios'

export default class servers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Servers: []
        };
    }

    getServersData() {
        axios
            .get(`/server`, {})
            .then(res => {
                const data = res.data

                const servers = data.map(s =>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <div class="card-body">
                                    <h5 class="card-title">{s.longName} (v{s.version})</h5>
                                    <p class="card-text">
                                        News: {s.berita}<br />
                                        Patchnote: {s.patchNote}
                                    </p>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6" dangerouslySetInnerHTML={{__html: s.server === '1' ? '<small class="badge badge-success">Online</small>' : '<small class="badge badge-danger">Maintenance</small>'}}>
                                        </div>
                                        <div class="col-md-6 col-sm-6">
                                            <small class="muted-text">{s.ip}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                this.setState({servers})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount(){
        this.getServersData()
    }

    render() {
        return (
            <div class="row">
                {this.state.servers}
            </div>
        )
    }
}