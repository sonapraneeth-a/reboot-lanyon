---
layout: page
title: Contact
---

<!-- Akimset token: b775862a36d6 -->
<form action="https://getsimpleform.com/messages?form_api_token=64314f114eee2fa0a0b0d381d681cb02" method="post">
    <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
    <!-- <input type="hidden" name="redirect_to" value="{{page.url}}thankyou/" /> -->
    <input type="hidden" name="redirect_to" value="{{site.url}}{{page.url}}thankyou/" />
    <div class="form-item">
        <label class="form-label" for="first-name">First Name</label>
        <input class="form-input" type="text" name="first-name" placeholder="First Name" />
    </div>
    <div class="form-item">
        <label class="form-label" for="last-name">Last Name</label>
        <input class="form-input" type="text" name="last-name" placeholder="Last Name" />
    </div>
    <div class="form-item">
        <label class="form-label" for="email">Email</label>
        <input class="form-input" type="email" name="email" placeholder="Email" />
    </div>
    <div class="form-item">
        <label class="form-label" for="subject">Subject</label>
        <input class="form-input" type="text" name="subject" placeholder="Subject" />
    </div>
    <div class="form-item">
        <label class="form-label" for="message">Message</label>
        <textarea class="form-input" type="text" name="body" rows="5" placeholder="Message"></textarea>
    </div>
    <center><input type="submit" value="Submit" /></center>
</form>