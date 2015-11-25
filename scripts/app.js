(function(){

    var gems = [
        {
            name: 'Azurite',
            price: 2.95,
            canPurchase: true,
            image:{
                full:"/images/apple.jpg"
            }

        },
        {
            name: 'nike',
            price: 22.95,
            canPurchase: true,
            image:{
                full:"/images/cerises.jpg"
            }
        }
    ];


    var app = angular.module("gemStore", []);

    app.controller("StoreController", function () {  // the controller is attached to (inside) our app.
        this.products = gems;
    });
})();

