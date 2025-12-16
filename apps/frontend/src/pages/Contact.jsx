export default function Contact(){

    const submitHandler = event => {
        event.preventDefault()

        const formData = new FormData(event.target)

        const data = Object.fromEntries(formData)

        console.log("data to send", data)

        fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        }).then(response => response.json()).then(data => console.log(data))
    }

    return(
        <>
            <h1 className="main__title">GET IN TOUCH WITH US</h1>
            <section className="contact">
                <form id="contact" className="contact-form" onSubmit={submitHandler}>
                    <label htmlFor="name" className="contact-form__title">Full name <span className="contact-form__title--highlight">*</span></label>
                    <input id="name" name="name" required className="contact-form__input" type="text" />
                    <label htmlFor="email" className="contact-form__title">Email <span className="contact-form__title--highlight">*</span></label>
                    <input id="email" name="email" required className="contact-form__input" type="email" />
                    <label htmlFor="subject" className="contact-form__title">Subject <span className="contact-form__title--highlight">*</span></label>
                    <input id="subject" name="subject" required className="contact-form__input" type="text" />
                    <label htmlFor="message" className="contact-form__title">Message <span className="contact-form__title--highlight">*</span></label>
                    <textarea id="message" name="message" required className="contact-form__textarea"></textarea>
                    <button className="contact-form__submit-btn" type="submit">Submit</button>
                </form>
                <p className="contact__extra-info">Visit our sister companies <span className="contact__extra-info--highlight">Home Sound</span> and <span className="contact__extra-info--highlight">The Movie Rooms</span> part of the HiFi Horizon Group.</p>
            </section>
        </>
    )
}