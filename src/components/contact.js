import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yd8vy62',
      'template_k7wjsf8',
      form.current,
      'CRNoa4Wwwyvg90SqT'
    )
    .then(() => {
      form.current.reset();
      setShowModal(true);
    })
    .catch((error) => {
      console.error('❌ Email error:', error);
      alert('Failed to send.');
    });
  };

  const closeModal = () => {
    setFadeOut(true); // Trigger fade-out
    setTimeout(() => {
      setShowModal(false);
      setFadeOut(false);
    }, 300); // match Bootstrap's fade duration (300ms)
  };

  return (
    <div className="container my-5" id="contact">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" className="form-control" rows="4" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>

      {/* Modal with fade in/out */}
      {showModal && (
        <>
          <div
            className={`modal fade ${fadeOut ? '' : 'show'}`}
            style={{ display: 'block' }}
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content shadow">
                <div className="modal-header">
                  <h5 className="modal-title">Thank You!</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <p>Your message has been sent successfully! I’ll reply soon 😊</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Backdrop with fade class */}
          <div className={`modal-backdrop fade ${fadeOut ? '' : 'show'}`}></div>
        </>
      )}
    </div>
  );
};

export default Contact;

/*import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yd8vy62',
      'template_k7wjsf8',
      form.current,
      'CRNoa4Wwwyvg90SqT'
    )
    .then((result) => {
      console.log('✅ Email sent:', result.text);
      setMessageSent(true); // ✅ Show thank you message
      form.current.reset();
    })
    .catch((error) => {
      console.error('❌ Error sending email:', error);
      alert('Failed to send. Please try again.');
    });
  };

  return (
    <div className="container my-5" id="contact">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" className="form-control" rows="4" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          {messageSent && (
            <div className="alert alert-success mt-4" role="alert">
              ✅ Thank you! Your message has been sent successfully.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;*/
/*import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yd8vy62',       // Replace with your Service ID
      'template_k7wjsf8',      // Replace with your Template ID
      form.current,
      'CRNoa4Wwwyvg90SqT'        // Replace with your Public Key
    )
    .then((result) => {
      alert("Message sent successfully!");
      form.current.reset(); // Clear form
    }, (error) => {
      alert("Failed to send. Please try again.");
      console.log(error.text);
    });
  };

  return (
    <div className="container my-5" id="contact">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" className="form-control" rows="4" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;*/

/*import React from 'react';

const Contact = () => {
  return (
    <div className="container my-5" id="contact">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Type your message here"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;*/
