import React from 'react'

const Contact = () => {
    return (
        <div>
            <div class="contact" id="contact">
                <div class="col-md-6 w3agile_contact_left con-lef-content">
                    <h3>Contact Us</h3>

                    <form action="#" method="post">
                        <input type="text" name="Name" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required="" />
                        <input type="email" name="Email" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required="" />
                        <textarea name="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
                <div class="col-md-6 w3agile_contact_right">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.47026078735!2d-74.25419852950611!3d40.73144986754836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C+NJ%2C+USA!5e0!3m2!1sen!2sin!4v1479793381615" allowfullscreen></iframe>



                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    )
}

export default Contact
