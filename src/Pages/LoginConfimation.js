import React, { Component } from 'react';
import {component} from 'react-dom';

class LoginConfirmation extends Component {
    render(){
    return(
    <div className="modal fade" id="reviewFormModal" tabindex="-1" role="dialog" aria-labelledby="reviewFormModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="reviewFormModalLabel">Submit a Review</h4>
                                    <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal" aria-hidden="true"></button>
                                </div>
                                <div className="modal-body">
                                    <form className="row mb-0" id="template-reviewform" name="template-reviewform" action="#" method="post">

                                        <div className="col-6 mb-3">
                                            <label for="template-reviewform-name">Name <small>*</small></label>
                                            <div className="input-group">
                                                <div className="input-group-text"><i className="icon-user"></i></div>
                                                <input type="text" id="template-reviewform-name" name="template-reviewform-name" value="" className="form-control required" />
                                            </div>
                                        </div>

                                        <div className="col-6 mb-3">
                                            <label for="template-reviewform-email">Email <small>*</small></label>
                                            <div className="input-group">
                                                <div className="input-group-text">@</div>
                                                <input type="email" id="template-reviewform-email" name="template-reviewform-email" value="" className="required email form-control" />
                                            </div>
                                        </div>

                                        <div className="w-100"></div>

                                        <div className="col-12 mb-3">
                                            <label for="template-reviewform-rating">Rating</label>
                                            <select id="template-reviewform-rating" name="template-reviewform-rating" className="form-select">
                                                <option value="">-- Select One --</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        <div className="w-100"></div>

                                        <div className="col-12 mb-3">
                                            <label for="template-reviewform-comment">Comment <small>*</small></label>
                                            <textarea className="required form-control" id="template-reviewform-comment" name="template-reviewform-comment" rows="6" cols="30"></textarea>
                                        </div>

                                        <div className="col-12">
                                            <button className="button button-3d m-0" type="submit" id="template-reviewform-submit" name="template-reviewform-submit" value="submit">Submit Review</button>
                                        </div>

                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    );
    }
}

export default LoginConfirmation;