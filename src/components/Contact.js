import React from 'react';

function Contact() {
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2>Contact me</h2>
                <div classsName="form-control w-full max-w-xs">
                    <label classsName="label">
                        <span classsName="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="John Doe" classsName="input input-bordered w-full max-w-xs" />
                    <label classsName="label">
                        <span classsName="label-text">What is your email?</span>
                    </label>
                    <input type="text" placeholder="john@doe.com" classsName="input input-bordered w-full max-w-xs" />
                    <label classsName="label">
                        <span classsName="label-text">What is your message?</span>
                    </label>
                    <textarea classsName="textarea textarea-bordered" placeholder="Bio"></textarea>
                </div>
            </div>
        </div>
    );
}

export default Contact;