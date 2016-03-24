dtwit.controller('daftar', function ($scope) {
    $scope.username = 'Livestream';

    $scope.twits = [
        {user:'detikcom', display:'detik dot com', content: 'Lorem ipsum dolor sit amet', love: '734', retweet: 524},
        {user:'detiknews', display:'detik news', content: 'Lorem ipsum dolor sit amet', love: '867', retweet: 345},
        {user:'detikhot', display:'detik hot', content: 'Lorem ipsum dolor sit amet', love: '43', retweet: 243},
        {user:'detiksport', display:'detik sport', content: 'Lorem ipsum dolor sit amet', love: '24', retweet: 74},
        {user:'detikoto', display:'detik oto', content: 'Lorem ipsum dolor sit amet', love: '43', retweet: 28}
    ]

    $scope.sendTwit = function() {
        var ngoceh = angular.element(document.querySelector('#ngoceh'));
        var isingoceh = ngoceh.val()
        var newNgoceh   = {user:'weteha', display:'Wahyu Haryanto', content: isingoceh, love: '0', retweet: 0}

        $scope.twits.unshift(newNgoceh);

        ngoceh.val('');
    }

    $scope.loveit = function($event, twit) {
        var clicked = $event.currentTarget;
        var love = angular.element(clicked).find('i');
        countLove = angular.element(love).html()
        countLove++;
        angular.element(love).html(countLove)
        return false;
    }

    //setTimeout(function () {
    //    $scope.$apply(function() {
    //        $scope.twits = [
    //            {
    //                user: 'detikcom',
    //                display: 'detik dot com',
    //                content: 'Lorem ipsum dolor sit amet',
    //                love: '734',
    //                retweet: 524
    //            }
    //        ]
    //        console.log('done');
    //    })
    //}, 1000)

})