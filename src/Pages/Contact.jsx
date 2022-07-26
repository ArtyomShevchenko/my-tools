import React from "react";

function Contact() {

	return (
		<div className="Contact">
			<div className="container">
				<div className="wrapper">
					<h1>Contact</h1>
					<a href="tel:+380934877758" type="phone">Phone</a>

					<div>
						<iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d741.1603388242057!2d30.464258156866926!3d50.59661937789651!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sua!4v1658842564191!5m2!1sru!2sua" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;