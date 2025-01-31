var html = function (globals) {
  var i18n = globals.i18n;
  var author = globals.author;
  var email = globals.email;
  var website = globals.website;

  return "" +
"<div class='isso-postbox'>"
 + "<div class='form-wrapper'>"
   + "<div class='textarea-wrapper'>"
    + "<div class='textarea placeholder' contenteditable='true'>" + i18n('postbox-text') + "</div>"
    + "<div class='preview'>"
      + "<div class='isso-comment'>"
        + "<div class='text-wrapper'>"
          + "<div class='text'></div>"
        + "</div>"
      + "</div>"
    + "</div>"
  + "</div>"
  + "<section class='auth-section'>"
    + "<p class='input-wrapper'>"
      + "<input type='text' name='author' placeholder='" + i18n('postbox-author') + "' value='" + (author ? author : '') + "' />"
    + "</p>"
    + "<p class='input-wrapper'>"
      + "<input type='email' name='email' placeholder='" + i18n('postbox-email') + "' value='" + (email ? email : '') + "' />"
    + "</p>"
    + "<p class='input-wrapper'>"
      + "<input type='text' name='website' placeholder='" + i18n('postbox-website') + "' value='" + (website ? website : '') + "' />"
    + "</p>"
    + "<p class='post-action'>"
      + "<input type='submit' value='" + i18n('postbox-submit') + "' />"
    + "</p>"
    + "<p class='post-action'>"
      + "<input type='button' name='preview' value='" + i18n('postbox-preview') + "' />"
    + "</p>"
    + "<p class='post-action'>"
      + "<input type='button' name='edit' value='" + i18n('postbox-edit') + "' />"
    + "</p>"
  + "</section>"
  + "<section class='notification-section'>"
    + "<label>"
      + "<input type='checkbox' name='notification' />" + i18n('postbox-notification')
    + "</label>"
  + "</section>"
+ "</div>"
+ "</div>"
};
module.exports = html;
