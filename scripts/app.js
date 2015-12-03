(function(){

    var gems = [
        {
            name: 'Azurite',
            price: 2.95,
            canPurchase: true,
            image:{
                full:"/images/apple.jpg"
            },
            description: "Lorem lonso fragma butti marito klaro nina paloti",
            info: "some infos to the product",
            reviews: [
                {
                    stars: "5",
                    body: "Lorem me quero uno mucho...",
                    author: "is@miocarinio.com"
                },
                {
                    stars: "5",
                    body: "Lorem me quero uno pokito ki mala bene bene...",
                    author: "adss@miocarinio.com"
                }

            ]


        },
        {
            name: 'nike',
            price: 22.95,
            canPurchase: true,
            image:{
                full:"/images/cerises.jpg"
            },
            description: "Lorem lonso fragma butti marito klaro nina paloti",
            info: "some infos to the poduct",
            reviews: [
                {
                    stars: "3",
                    body: "fragma mali mandiro chi kiro nano marta lovi",
                    author: "mootik@web.lala"
                },
                {
                    stars: "4",
                    body: "no no una producto me gusta di tutti",
                    author: "jdf@lal.nim"
                }

            ]
        }
    ];


    var app = angular.module("gemStore", []);

    app.controller("StoreController", function(){  // the controller is attached to (inside) our app.
        this.products = gems;
    });

    app.controller("ProgressbarController", function(){
        this.progValue = 56;

    })


})();

