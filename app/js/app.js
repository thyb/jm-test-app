var app = angular
  .module("myApp", [])
  .controller('MainController', function($scope) {
    $scope.title = 'La page de Jean-Marc Roy';
    $scope.promo = 'Ornithorinque';
    $scope.products = [
      {
        name:'The Book of Trees',
        price:19,
        pubdate: new Date('2014','03','08'),
        cover :'img/the-book-of-trees.jpg',
        likes:0
      },
      {
        name:'Program or be Programmed',
        price:8,
        pubdate: new Date('2013','08','01'),
        cover :'img/program-or-be-programmed.jpg',
        likes :0
      },
      {
        name:'Game of Thrones integrale 1',
        price:29,
        pubdate: new Date('2013','08','01'),
        cover :'',
        likes : 0
      },
      {
        name:'Game of Thrones integrale 2',
        price:29,
        pubdate: new Date('2013','08','01'),
        cover :'',
        likes:0
      }
    ];

    $scope.plusOne = function(index) {
      $scope.products[index].likes +=1;
    };
  });
