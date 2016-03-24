dtwit.directive('twitlist', function () {
    return {
        scope: true,
        restrict: 'C',
        link: function(scope, elm, attr) {
            scope.user = attr.user
            scope.display = attr.display
            scope.content = attr.content
            scope.love = attr.love
            scope.retweet = attr.retweet
        },
        template :
        '<div class="row">'+
            '<div class="col-md-1">'+
                '<a href="#">'+
                '<img class="img-responsive" src="app/images/detikcom-logo.jpeg" alt="" width="60px">'+
                '</a>'+
                '</div>'+
                '<div class="col-md-11">'+
                '<h4><span class="label label-default">@{{user}}</span> {{display}}</h4>'+
            '<p>{{content}}</p>'+
            '<a class="btn btn-primary" href="" ng-click="loveit($event, twit)"><i>{{love}}</i> <span class="glyphicon glyphicon-heart"></span></a>'+
                ' <a href="#">Retwet <span class="badge">{{retweet}}</span></a>'+
            '</div>'+
        '</div>'+
        '<hr>'
    }
})