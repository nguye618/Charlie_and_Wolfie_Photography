---
hide:
 - footer
 - toc
 - navigation
---
<style> 
input[type=text] {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type=text]:focus {
  border: 3px solid #555;
}
</style>

# **Contact**

<p style="font-family: Comic Sans MS">Feel free to contact me by filling out the form below or <a href = "mailto: abc@example.com">email me</a> directly.</p>
  
  <form id="fcf-form-id" class="fcf-form-class" method="post" form action="form.php">
    <div class="fcf-form-group">
    <label for="FirstName" class="fcf-label">First Name</label>
    <div class="fcf-input-group">
      <input type="text" id="Name" name="Name" class="fcf-form-control" required font-family=:cursive>
    </div>
  <div class="fcf-form-group">
    <label for="LastName" class="fcf-label">Last Name</label>
    <div class="fcf-input-group">
    <input type="text" id="Name" name="Name" class="fcf-form-control" required>
  </div>
    <div class="fcf-form-group">
    <label for="Email" class="fcf-label">Your email address</label>
    <div class="fcf-input-group">
    <input type="text" id="Email" name="Email" class="fcf-form-control" required>
  </div>
    <div class="fcf-form-group">
    <label for="Message" class="fcf-label">Write your message here:</label>
    <div class="fcf-input-group">
    <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" cols="81"></textarea>
            </div>
        </div>
        <div class="fcf-form-group">
            <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send</button>
        </div>