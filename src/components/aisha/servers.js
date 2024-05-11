/* eslint-disable no-unused-expressions */
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
            .get(`/server`)
            .then(res => {
                const data = res.data

                const servers = data.data.map((s, i) =>
                        <div className="col-md-4" key={i}>
                            <div className="card mb-4 box-shadow">
                                <div className="card-body">
                                    <h5 className="card-title">{s.longName} (v{s.version})</h5>
                                    <hr />
                                    <p className="card-text">
                                        News: {s.berita}<br />
                                        Patchnote: {s.patchNote}<br />
                                        Servers: {s.ip.split(';').length} servers<br />
                                    </p>
                                    <hr />
                                    <div className="row">
                                        {s.ip.split(';').map((ip) =>
                                            <>
                                                <div className="col-md-6 col-sm-6">
                                                    <small className="muted-text">{ip}</small>
                                                </div>
                                                <div className="col-md-6 col-sm-6 text-right" dangerouslySetInnerHTML={{ __html: s.server === 1 ? '<small class="badge badge-success">Online</small>' : '<small class="badge badge-danger">Maintenance</small>' }}>
                                                </div>
                                            </>
                                        )}
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
            <div className="row">
                {this.state.servers}
            </div>
        )
    }
}
