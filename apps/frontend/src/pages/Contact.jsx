export default function Contact(){
    return(
        <>
            <h1 className="main__title">Get in touch with us</h1>
            <section className="contact">
                <form className="contact-form">
                    <label className="contact-form__title">Full name <span className="contact-form__title--highlight">*</span></label>
                    <input required className="contact-form__input" type="text" />
                    <label className="contact-form__title">Email <span className="contact-form__title--highlight">*</span></label>
                    <input required className="contact-form__input" type="email" />
                    <label className="contact-form__title">Subject <span className="contact-form__title--highlight">*</span></label>
                    <input required className="contact-form__input" type="text" />
                    <label className="contact-form__title">Message <span className="contact-form__title--highlight">*</span></label>
                    <textarea required className="contact-form__textarea"></textarea>
                    <button className="contact-form__submit-btn" type="submit">Submit</button>
                </form>
                <p className="contact__extra-info">Visit our sister companies <span className="contact__extra-info--highlight">Home Sound</span> and <span className="contact__extra-info--highlight">The Movie Rooms</span> part of the HiFi Horizon Group.</p>
            </section>
        </>
    )
}