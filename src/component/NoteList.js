import React, { Component } from 'react'

export default class NoteList extends Component {
    render() {
        return (
            <div className="col">
            <div id="noteLists" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div className="card-header" role="tab" id="note">
                  <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#noteLists" href="#note1" aria-expanded="true" aria-controls="note1">
                      Ghi chú ngày 17-06-2019
                    </a>
                  </h5>
                </div>
                <div id="note1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                  <div className="card-body">
                    Test
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="note">
                  <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#noteLists" href="#note2" aria-expanded="true" aria-controls="note2">
                      Ghi chú ngày 18-06-2019
                    </a>
                  </h5>
                </div>
                <div id="note2" className="collapse in" role="tabpanel" aria-labelledby="note2">
                  <div className="card-body">
                    Test
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
