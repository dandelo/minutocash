/**
 * Created by mindestens on 12/14/13.
 */
Template.offerCreate.events({
  'submit form': function(e) {
    e.preventDefault();

    var offer = {
      firstname: $(e.target).find('[name=firstname]').val(),
      lastname: $(e.target).find('[name=lastname]').val(),
      phone: $(e.target).find('[name=phone]').val(),
      content: $(e.target).find('[name=content]').val()
    };

    Meteor.call('createOffer', offer, function (error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
      }

      Router.go('offerPage', {_id: id});
      return null;
    });
  }
});