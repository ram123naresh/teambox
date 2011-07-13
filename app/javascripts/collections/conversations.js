(function  () {

  var Conversations = {
    model: Teambox.Models.Conversation
  };

  Conversations.parse = function (response) {
    return _.parseFromAPI(response);
  };

  Conversations.url = function () {
    return "/api/1/projects/" + this.options.project_id + '/conversations.json';
  };

  Conversations.fetchNextPage = function (callback) {
    var models = this.models
      , self = this
      , options = {};

    // TODO: once @micho eliminates jQuery from backbone, this will be different
    // because `data` is a jQuery argument for `$.ajax`
    options.data = 'max_id=' + models[models.length - 1].id;
    options.add = true;
    options.success = callback;

    this.fetch(options);
  };

  // exports
  Teambox.Collections.Conversations = Teambox.Collections.Base.extend(Conversations);

}());
