'use strict';

function Dog (dog){
    this.name = dog.name;
    this.image = dog.image_url;
    this.hobbies = dog.hobbies;
}

Dog.prototype.render = function (){
    let dogClone = $('.dog-template').clone();
    $('main').append(dogClone);
    dogClone.find('h2').text(this.name);
    dogClone.find('img').attr('src', this.image_url);
    dogClone.find('p').text(this.hobbies);
    dogClone.attr('class', this.name);
};

const ajaxSettings = {
    method: 'get',
    dataType: 'json'
};

$.ajax('data.json', ajaxSettings).then((data)=>{
    data.forEach(dogObj => {
        let dog = new Dog(dogObj);
        dog.render();
    });
});