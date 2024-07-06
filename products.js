// AngularJS App
var app = angular.module('shopApp', []);

// Main Controller
app.controller('MainController', function($scope) {
    this.products = [
        {
            name: 'Phone 1',
            description: 'This is a great phone.',
            image: '6.jpg',
            category: 'Phones'
        },
        {
            name: 'Phone 2',
            description: 'This is another great phone.',
            image: '5.jpg',
            category: 'Phones'
        },
        {
            name: 'Gaming Console 1',
            description: 'This is a great gaming console.',
            image: '3.jpg',
            category: 'Gaming'
        },
        {
            name: 'Gaming Console 2',
            description: 'This is another great gaming console.',
            image: '4.jpg',
            category: 'Gaming'
        },
        {
            name: 'Smart Watch 1',
            description: 'This is a great smart watch.',
            image: '1.jpg',
            category: 'Smart Accessories'
        },
        {
            name: 'Smart Watch @ 90,000/=',
            description: 'This is another great smart watch.',
            image: '2.jpg',
            category: 'Smart Accessories'
        }
    ];

    this.selectedProduct = {};

    this.showModal = function(product) {
        this.selectedProduct = product;
        $('#productModal').modal('show');
    };

    this.buyNow = function() {
        alert('Successfully ordered! Visit the Contact section.');
        $('#productModal').modal('hide');
        window.location.href = '#contact';
    };
});


    // Show or hide the back-to-top button
    window.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
            backToTopButton.classList.remove('hide');
        } else {
            backToTopButton.classList.add('hide');
            backToTopButton.classList.remove('show');
        }
    });

    // Smooth scroll back to top
    document.getElementById('back-to-top').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

