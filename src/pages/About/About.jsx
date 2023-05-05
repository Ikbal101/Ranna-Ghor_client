import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const About = () => {
    return (
        <div>
            <NavigationBar/>
            <div>
            <h2 className='text-center text-warning'> Ranna-Ghor Hotel and Restaurant</h2>
            <hr className='w-50 m-auto' />
            <p>
                <span className='text-warning'>Ranna-Ghor</span> Hotel and Restaurant is a popular destination for food lovers. We have been serving delicious and authentic cuisine for over 20 years, and our menu features a wide range of dishes from traditional Bangladeshi cuisine to international favorites.
            </p>
            <p>
                Our chefs are trained in the art of cooking and use only the freshest ingredients to create mouth-watering dishes that are sure to satisfy your taste buds. We also offer a range of vegetarian and vegan options for those who prefer plant-based meals.
            </p>
            <p>
                In addition to our restaurant, we also have a hotel with comfortable rooms and modern amenities. Whether you're traveling for business or pleasure, our hotel is the perfect place to stay. We offer personalized service and our staff is always ready to help you with anything you need.
            </p>
            <p>
                So come and visit us at Ranna-Ghor Hotel and Restaurant and experience the best food and hospitality that Bangladesh has to offer.
            </p>
        </div>
        </div>
    );
};

export default About;