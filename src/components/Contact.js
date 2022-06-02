import React from 'react';

function Contact() {
    return (
        <div className="card w-1/2 bg-primary text-primary-content mx-auto my-6">
            <div className="card-body">
                <h2 className="font-bold text-xl">Contact me</h2>
                <form className="form-control w-100">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs" data-input="name"/>
                    <label className="label">
                        <span className="label-text">What is your email?</span>
                    </label>
                    <input type="text" placeholder="john@doe.com" className="input input-bordered w-full max-w-xs" data-input="email"/>
                    <label className="label">
                        <span className="label-text">What is your message?</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="I'd love to reach out regarding.." data-input="message"></textarea>
                    <button class="btn mt-4 w-24 self-end">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;